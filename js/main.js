$('.game-img').each(function() {
    var link = $(this).html();
    $(this).contents().wrap('<a href="../pages/game-page.html"></a>');
  });