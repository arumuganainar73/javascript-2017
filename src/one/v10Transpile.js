let loadUserData = (() => {
  var _ref = _asyncToGenerator(function* (userURL) {
    const { data: users } = yield fetchJSON(userURL);
    document.getElementById("users").innerHTML = users.map(userHTML).join('');
  });

  return function loadUserData(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const userURL = "https://reqres.in/api/users?page=1&per_page=10";

const fetchJSON = url => fetch(url).then(response => response.json());

const userHTML = ({ avatar, first_name, last_name }) => `<div class="col-md-3 span3 well">
     <center>
       <img src="${avatar}" name="aboutme" width="140" height="140" class="img-circle">
       <h3>${first_name} ${last_name}</h3>
      </center>
   </div>`;
loadUserData(userURL);

/*






*/
