/* Welcome Sign in div */
function store() {
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = document.getElementById('orangeForm-name').value;
    localStorage.setItem("username", inputUsername);
    document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
    return false;
  } // end store()
  
  document.getElementById('signOut');