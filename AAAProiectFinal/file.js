const input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});


function searchFoodClick() {
  let ApiKey = '1WTDmnwKulyV-39XW3CDEWTMqA5PIHpdXH-yV6QapPg';
  let query = document.getElementById('search').value;
  let url = 'https://api.unsplash.com/search/photos?client_id=' + ApiKey + '&page=1&query=' + query;

  //make request to api
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);

      data.results.forEach(photo => {
        let result = `
          <img src = '${photo.urls.small}'>

        `;

        $('.infoSection').append(result)
      });
    });
}
searchFoodClick();

{/* <a href = '${photo.links.download}'> */}