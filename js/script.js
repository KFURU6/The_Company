// header nav borderline
$('.header__nav li a').on('click', function() {
  $('.header__nav li a').removeClass('is-active');
  $(this).addClass('is-active');
});

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

// drawer-menu
$('.drawer-icon').on('click', function() {
  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
});

// to-top open close
$(window).on('scroll', function() {
  if (innerHeight < $(this).scrollTop()) {
    $('.to-top').addClass('is-show');
  } else {
    $('.to-top').removeClass('is-show');
  }
});

// click page scroll
$('a[href^="#"]').on('click', function() {
  const headerHeight = $('.header').innerHeight();
  const id = $(this).attr('href');
  let idOffsetTop = 0;
  if (id != '#') {
    idOffsetTop = $(id).offset().top - headerHeight;
  }
  $('html, body').animate({
    scrollTop: idOffsetTop
  }, 2000);
});

// qa answer
$('.qa__question').on('click', function() {
  $(this).next().slideToggle();
  $(this).find('span').toggleClass('is-active');
});

// privacy-modal
$('.privacy-link').on('click', function(e) {
  e.preventDefault();
  const isOpenCloseTarget = $(this).data('target');
  $('.' + isOpenCloseTarget).show(500);
});
$('.close-modal').on('click', function(e) {
  e.preventDefault();
  const isOpenCloseTarget = $(this).data('target');
  $('.' + isOpenCloseTarget).hide(500);
});