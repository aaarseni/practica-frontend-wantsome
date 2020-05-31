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
  let url = 'https://api.unsplash.com/search/photos?client_id=' + ApiKey + '&per_page=30&query=' + query;

  //make request to api
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      data.results.forEach(photo => {
        let result = `<li>
          <img src = '${photo.urls.small}'/></li>
          
        `;

        $('.photoGrid').append(result)
      });
    })
/*     .then(function (data) {
      data.results.forEach(photo => {
        let result = `<li>
          <img src = '${photo.urls.large}'/></li>
          
        `;

        $('.photoGrid').append(result)
      });
    }) */
    .catch(error => {
      console.log('Error!');
      console.error(error);
    })

}

/* $(url).click(function () {
  data.results.forEach(photo => {
    let result = `<li>
      <img src = '${photo.urls.large}'/></li>
      
    `;
    $('.photoGrid').append(result)
  });
});
 */
{/* <a href = '${photo.links.download}'> */}


