const userURL = "https://reqres.in/api/users?page=1&per_page=10"

const fetchJSON = url => fetch(url).then(response => response.json())

async function loadUserData(userURL) {
  const { data: users } = await fetchJSON(userURL)
  document.getElementById("users").innerHTML = users.map(userHTML).join("")
}

const userHTML = ({ avatar, first_name, last_name }) =>
  `<div class="col-md-3 span3 well">
     <center>
       <img src="${avatar}" name="aboutme" width="140" height="140" class="img-circle">
       <h3>${first_name} ${last_name}</h3>
      </center>
   </div>`

loadUserData(userURL)

/*






*/
