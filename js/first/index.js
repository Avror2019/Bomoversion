$(function () {

  // button for info in intro
  $('.button-info').click(function () {
    $('.info-intro').toggleClass('info-none');
  });
  // button for other speakers
  $('.button-speakers').click(function () {
    $('.block-name-other-speakers').toggleClass('block-name-block');
  });

  //  switch buttons on programs speakers days
  $(document).ready(function () {
    let tabsItem = $('.button-days');
    tabsItem.on('click', function (event) {
      event.preventDefault();
      let activeContent = $(this).attr('href');
      $('.visible').toggleClass('visible'); //отключаем класс там де он есть 
      $(activeContent).toggleClass('visible'); // Добавляем класс там где мы активаируем
      $('.tabs-item-active').toggleClass('tabs-item-active');
      $(this).toggleClass('tabs-item-active');
    });
  });


});


