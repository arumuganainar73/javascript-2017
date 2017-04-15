// Template Strings | Object Destructuring | Fetch API | Map | Lambdas
// Refactor with Single responsiblity principle
const userURL = "https://reqres.in/api/users?page=1&per_page=10"

const buildUsersHTML = ({ data: users }) => users.map(userHTML).join("")

const renderUsers = html => $("#users").html(html)

const fetchJSON = url => fetch(url).then(response => response.json())

const loadUserData = userURL =>
  fetchJSON(userURL).then(buildUsersHTML).then(renderUsers)

function userHTML({ avatar, first_name, last_name }) {
  return `<div class="col-md-3 span3 well">
             <center>
                  <img src="${avatar}" name="aboutme" width="140" height="140" class="img-circle">
                  <h3>${first_name} ${last_name}</h3>
             </center>
         </div>`
}

loadUserData(userURL)

/* 
 PAIN POINTS 
  1) HTML rendering in javascript  - Easier
  2) Cannot write a ajax call without the help of Internet - Fixed
  3) Too much code for simple task - Better codes
  4) Not Expressive - Yes

BUG PRONE
  1) HTML rendering - Easier to find out bugs 
  2) Anywhere there are loops - Done
*/
