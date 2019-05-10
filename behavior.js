$("select").on("click", function () {
  const $section = $(this).val();
  const $article = $("<div></div>");
  $(".articles").append($article);
  $article.addClass("article");
  const $p = $("<p></p>");
  const $h2 = $("<h2></h2>");
  $(".article").append($h2);
  $(".article").append($p);
  $p.addClass("p");
  $h2.addClass("h2");

  $.ajax({
    method: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/ ' + $section + ' .json?api-key=nyb43KA5zLUQ2199VSWc5ZPM7SiJPXrk'
  })
    .done(function (data) {
      $('.h2').append(data.results[0].title);
      $('.p').append(data.results[0].abstract);
      $('.article').css("background-image", "url(" + data.results[0].multimedia[4].url + ")");
    });
});



