/* const input = document.getElementById("search");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
}); */

$('#search').submit(function (e) {
  if (e.which == 13) {
    e.preventDefault();
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
        let result = `
        <li>
  
          <img src = '${photo.urls.small}' alt='${photo.description}'/>
        </li>`;
        $('body').append(result.a)
        $('.photoGrid').append(result);

        $("li").addClass("selected");

        $(document).ready(function () {

          $(".selected").on('click', function () {
            var image = `${photo.urls.regular}`;
            w2popup.open({
              title    : 'Image',
              body     : '<img src="' + image + '"></img>',
              width    : 1000,
              height   : 700,
              opacity  : 0.4,     // opacity for the screen lock div
              speed    : 0.3,     // popup speed (in seconds)
              });
          });

        });
      });
    })
    .then(function (data) {
      data.results.forEach(photo => {
        let zoom = `<img src = ${photo.urls.full}/>`
        $('.infoSection').click.append(zoom);
      })
    })
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
{/* <a href = '${photo.links.download}'> 
        <a href = '${photo.urls.full}' />*/}