// Template Strings | Object Destructuring | Fetch API | Map | Lambdas
// Refactor
const userURL = "https://reqres.in/api/users?page=1&per_page=10"

const renderUserHTML = ({ data }) => {
  const html = data.map(renderUser).join("")
  $("#users").html(html)
}

function loadUserData(userURL) {
  fetch(userURL).then(response => response.json()).then(renderUserHTML)
}

function renderUser({ avatar, first_name, last_name }) {
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
  3) Too much code for simple task - lesser code
  4) Not Expressive - Better

BUG PRONE
  1) HTML rendering - Easier to find out bugs 
  2) Anywhere there are loops - Done
*/
