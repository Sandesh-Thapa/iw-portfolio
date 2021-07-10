var image = document.getElementById("githubPic");
var gitlink = document.getElementById("githubLink");
var fullname = document.getElementById("fullname");
var username = document.getElementById("username");
var followers = document.getElementById("followers");
var following = document.getElementById("following");
var country = document.getElementById("location");

var repos = document.getElementById("tableHead");
var repoTable = ""

fetch("https://api.github.com/users/Sandesh-Thapa")
  .then((response) => response.json())
  .then(function (data) {
      console.log(data);
    image.src = data["avatar_url"];
    gitlink.href = data["html_url"]
    fullname.innerText = data["name"];
    username.innerText = data["login"];
    followers.innerText = data["followers"];
    following.innerText = data["following"];
    country.innerText = data["location"];
});

fetch("https://api.github.com/users/Sandesh-Thapa/repos")
  .then((response) => response.json())
  .then(function (data) {
    data.forEach((element) => {
      var homepage = element.homepage != null ? `<td><a href="${element.homepage}" target="_blank"><i class="fa fa-globe" aria-hidden="true"></i> View Live</a></td>` : '<td><p> - </p></td>';
      repoTable += `<tr>
                        <td>${element.name}</td>
                        <td><a href="${element.html_url}" target="_blank"><i class="fa fa-code" aria-hidden="true"></i> View Code</a></td>
                        <td>${element.language}</td>
                        ${homepage}
                      </tr>`;
    });
    repos.innerHTML = repoTable;
  });
