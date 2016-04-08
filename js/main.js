var $body = $('.banner');
var $star;
var bannerWidth = $body.outerWidth();
var bannerHeight = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    left: Math.random() * bannerWidth,
    top: Math.random() * bannerHeight,
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
    opacity: Math.random()
  });
  $body.append($star);
}
