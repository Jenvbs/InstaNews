$(function () {
  $('.articles').hide();
  $("select").change(function () {
    $(".articles").empty();

    // Loader


    $('.loadingGif').show();

    const $section = $(this).val();

    $.ajax({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/' + $section + '.json?api-key=nyb43KA5zLUQ2199VSWc5ZPM7SiJPXrk'
    }).done(function (data) {
      $('.articles').show()
      if (data.results.length === 0) {
        $('.articles').append('<p>This section is empty, please pick a different one.</p>');
      } else {
        data.results.filter(function (item) {
          return item.multimedia.length;
        }).slice(0, 12).forEach(function (item, index) {
          $('.articles').append('<div class="all-articles article-' + index + '"><div class="text-' + index + '"><a href="' + item.url + '" class="text"><h3> ' + item.title + ' </h3><p> ' + item.abstract + ' </p></a></div></div></a>');
          // this selects number of article           //this creates the text div       //makes the text cickable         //adds the body copy
          let img = item.multimedia[4];
          $('.article-' + index).css('background-image', 'url("' + img.url + '")');



        });
      }
    }).always(function () {
      $('.loadingGif').hide();
    });
  })
});


/*$("select").change(function () {
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
      if (data.results[0].multimedia[4] !== undefined) {
        $(".h2" + $section).append(data.results[0].title);
        $(".p" + $section).append(data.results[0].abstract);
        $('.article' + $section).css("background-image", "url(" + data.results[0].multimedia[4].url + ")");
      }

    });
})}};*/
