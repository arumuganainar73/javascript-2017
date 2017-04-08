var userURL = "https://reqres.in/api/users?page=1&per_page=10";
function loadUserData(userURL) {
  $.ajax({
    url: userURL,
    type: "GET",
    success: function(response) {
      var data = response.data;
      var userHtml = "";
      for (i = 0; i < data.length; i++) {
        userHtml += buildUserHTML(data[i]);
      }
      $("#users").html(userHtml);
    }
  });
}

function buildUserHTML(user) {
  var userHtml = '<div class="col-md-3 span3 well"><center>';
  userHtml += '<img src="' + user.avatar + '" name="aboutme" width="140" height="140" class="img-circle">';
  userHtml += "<h3>" + user.first_name + " " + user.last_name + "</h3>";
  userHtml += "</center></div>";
  return userHtml;
}

loadUserData(userURL);

/* 
 PAIN POINTS 
  1) HTML rendering in javascript 
  2) Cannot write a ajax call without the help of Internet
  3) Too much code for simple task
  4) Not Expressive

BUG PRONE
  1) HTML rendering
  2) Anywhere there are loops
*/
