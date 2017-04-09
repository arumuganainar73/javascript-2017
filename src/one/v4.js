// Template Strings | Object Destructuring | Fetch API | Map

const userURL = "https://reqres.in/api/users?page=1&per_page=10";

function loadUserData(userURL) {
  fetch(userURL).then(response => response.json()).then(function({ data }) {
    const userHtml = data.map(buildUserHTML).join("");
    $("#users").html(userHtml);
  });
}

function buildUserHTML({ avatar, first_name, last_name }) {
  return `<div class="col-md-3 span3 well">
             <center>
                  <img src="${avatar}" name="aboutme" width="140" height="140" class="img-circle">
                  <h3>${first_name} ${last_name}</h3>
             </center>
         </div>`;
}

loadUserData(userURL);

/* 
 PAIN POINTS 
  1) HTML rendering in javascript  - Easier
  2) Cannot write a ajax call without the help of Internet - Fixed
  3) Too much code for simple task
  4) Not Expressive

BUG PRONE
  1) HTML rendering - Easier to find out bugs 
  2) Anywhere there are loops _ Done
*/
