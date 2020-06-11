/* import signUp from './signUp.js';
 */
/* const input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
}); */

/* onkeydown  cauta methoda de jquery pt cand apasa pe buton enter*/

$('#search').keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
    document.getElementById("myBtn").click();
  };
});



function searchFoodClick() {
  $('.photoGrid').empty();
  let ApiKey = '1WTDmnwKulyV-39XW3CDEWTMqA5PIHpdXH-yV6QapPg';
  let query = document.getElementById('search').value;
  let url = 'https://api.unsplash.com/search/photos?client_id=' + ApiKey + '&per_page=30&query=' + query;

  
  //make request to api
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      data.results.forEach(photo => {
        let result = `
        <li>
          <img src = '${photo.urls.small}' alt='${photo.description}'/>
        </li>`;
        $('body').append(result.a)
        $('.photoGrid').append(result);

        $("li").addClass("listCreate");

        $(document).ready(function () {
          $(".listCreate").on('click', function () {
            var image = `${photo.urls.regular}`;
            w2popup.open({
              title: 'Image',
              body: '<img src="' + image + '"></img>',
              width: 1000,
              height: 700,
              opacity: 0.4,     // opacity for the screen lock div
            });
          });

        });
      });
      
    })
    .catch(error => {
      console.log('Error!');
      console.error(error);
    })
}


{/* <a href = '${photo.links.download}'> 
        <a href = '${photo.urls.full}' />
      https://api.unsplash.com/collections?page=8
    */}


var ApKey = 'nt45x_DDBltmM_BaDorE44FA00rmNf2OswVyCzZorcs';

function firstCompilation() {
  let url = 'https://api.unsplash.com/search/photos/?client_id=' + ApKey + '&page=1&per_page=10&query=artistic';

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data)
      data.results.forEach(photo => {
        let result = `
        <li>
          <img src = '${photo.urls.small}' alt='${photo.description}'/>
        </li>`;
        $('.firstTypeOfPhoto').append(result);

        $("li").addClass("presentSection");

        $(document).ready(function () {

          $(".presentSection").on('click', function () {
            var image = `${photo.urls.regular}`;
            w2popup.open({
              title: 'Image',
              body: '<img src="' + image + '"></img>',
              width: 1000,
              height: 700,
              opacity: 0.4,     // opacity for the screen lock div
            });
          });
        });
      });
    })
    .catch(error => {
      console.log('Error!');
      console.error(error);
    })
}

function secondCompilation() {
  let url = 'https://api.unsplash.com/search/photos/?client_id=' + ApKey + '&page=1&per_page=8&query=animals';

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      data.results.forEach(photo => {
        let result = `
        <li>
          <img src = '${photo.urls.small}' alt='${photo.description}'/>
        </li>`;
        $('.secondTypeOfPhoto').append(result);
        $("li").addClass("presentSection");

        $(document).ready(function () {

          $(".presentSection").on('click', function () {
            var image = `${photo.urls.regular}`;
            w2popup.open({
              title: 'Image',
              body: '<img src="' + image + '"></img>',
              width: 1000,
              height: 700,
              opacity: 0.4,     // opacity for the screen lock div
            });
          });
        });
      });
    })
    .catch(error => {
      console.log('Error!');
      console.error(error);
    })
}

function thirdCompilation() {
  let url = 'https://api.unsplash.com/search/photos/?client_id=' + ApKey + '&page=1&per_page=8&query=city';

  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      data.results.forEach(photo => {
        let result = `
        <li>
          <img src = '${photo.urls.small}' alt='${photo.description}'/>
        </li>`;
        $('.thirdTypeOfPhoto').append(result);

        $("li").addClass("presentSection");

        $(document).ready(function () {

          $(".presentSection").on('click', function () {
            var image = `${photo.urls.regular}`;
            w2popup.open({
              title: 'Image',
              body: '<img src="' + image + '"></img>',
              width: 1000,
              height: 700,
              opacity: 0.4,     // opacity for the screen lock div
            });
          });
        });
      })
    })
    .catch(error => {
      console.log('Error!');
      console.error(error);
    })
}

window.onload = searchFoodClick();
window.onload = firstCompilation();
window.onload = secondCompilation();
window.onload = thirdCompilation();

/* $('#myform').saveStorage({
  exclude: ['password','hidden']
  }); */
  
  function store(theForm) {
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername= theForm["username"];
    var inputEmail= theForm['email'];
    var inputPassword= theForm["password"];
    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem('email', inputEmail.value);
    localStorage.setItem("password", inputPassword.value);
    document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
    return false;
   } // end store()
//function to sign in
   function login(theForm) {
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = theForm["username"];
    var inputEmail= theForm['email'];
    var inputPassword = theForm["password"];
    var username = inputUsername.value;
    var email = inputEmail.value;
    var password = inputPassword.value;
    if ((username == localStorage.getItem('username')) 
    && (email = localStorage.getItem('email'))
    && (password == localStorage.getItem('password'))) {
     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
      } else {
     document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
    }
    return false;
   } // end login()