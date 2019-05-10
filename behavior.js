$("select").change(function () {
  $(".articles").empty();
  const $section = $(this).val();
  const $article = $("<div></div>");
  $(".articles").append($article);
  $article.addClass("article" + $section);
  const $p = $("<p></p>");
  const $h2 = $("<h2></h2>");
  $(".article" + $section).append($h2);
  $(".article" + $section).append($p);
  $p.addClass("p" + $section);
  $h2.addClass("h2" + $section);

  $.ajax({
    method: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/' + $section + '.json?api-key=nyb43KA5zLUQ2199VSWc5ZPM7SiJPXrk'
  })
    .done(function (data) {
      $(".h2" + $section).append(data.results[0].title);
      $(".p" + $section).append(data.results[0].abstract);
      $('.article' + $section).css("background-image", "url(" + data.results[0].multimedia[4].url + ")");
    });
});




