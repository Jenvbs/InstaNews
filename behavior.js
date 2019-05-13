$(function () {
  $('.articles').hide();
  $("select").change(function () {
    $(".articles").empty();
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
          let img = item.multimedia[4];
          $('.article-' + index).css('background-image', 'url("' + img.url + '")');
          $(".header")
            .addClass("sectionSelected")
          $("img.logo")
            .css("height", 100)
            .css("margin-top", "1vh");
        });
      }
    }).always(function () {
      $('.loadingGif').hide();
    });
  })
});
