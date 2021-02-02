$(".item_filter .title").click(function(){
    if( !$(this).hasClass('active')){
        $(this).addClass('active')
        $(this).next().slideDown()

    }else{
        $(this).removeClass('active')
        $(this).next().slideUp()
    }
})


$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
});

const counter = (selector, action) => {
    let price = selector.parents('.basket_product').find($('.count_info'));
  
    switch (action) {
      case 'increment': 
        price.val(parseInt(price.val()) + 1); break;
      case 'decrement': 
        if (price.val() < 1) { price.val(0) } else { price.val(parseInt(price.val()) - 1);} break;  
    }
  } 
  $('.count_plus').click(function() {
    counter($(this), 'increment')
  })
  
  $('.count_minus').click(function() {
    counter($(this), 'decrement')
  })






$('.detailInfo_item').click(function(){
   
    $('.detailInfo_item').removeClass('active')
    $('.detailInfo_item').find('.info').slideUp()
    $(this).addClass('active')
    $(this).find('.info').slideDown()

})



$('.consultation .title').click(function(){

  if(  !$('.consultation .title').hasClass('active')){

    $('.consultation .title').addClass('active')
    $('.consultation').addClass('consultation_active')

  }else{
  $('.consultation .title').removeClass('active')
    $('.consultation').removeClass('consultation_active')
  }
  
})




$('.mob_menu_button').click(function(){
  $('.mob_menu_button').addClass('active')
  $('.mob_menu_content').slideDown()
  
})
$('.close_btn').click(function(){
  $('.mob_menu_button').removeClass('active')
  $('.mob_menu_content').slideUp()
  
})


$('.title_li').click(function(){
  if(  !$(this).hasClass('active')    ){
    $('.title_li').removeClass('active')
    $('.title_li').find('.icon-down-open').removeClass('icon-down-open_active')
    $('.title_li').next().slideUp()
    $(this).addClass('active')
    $(this).find('.icon-down-open').addClass('icon-down-open_active')
    $(this).next().slideDown()
  }else{
    $(this).removeClass('active')
    $(this).find('.icon-down-open').removeClass('icon-down-open_active')
    $(this).next().slideUp()
  }
  
  
})


$('.btn_show_filter').click(function(){
  $('.leftCat_block').fadeIn()
})
$('.btn_close_filter').click(function(){
  $('.leftCat_block').fadeOut()
})






$('.add_rew').click(function(e){
  
  $('.form_reviews').fadeIn()
})
$('.close_form, .send_reviews').click(function(){
  $('.form_reviews').fadeOut()
})













$('.banner_slider_left, .banner_slider_right').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});

$('.brands_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
      }
    }
    
  ]
    
});

$('.news_content_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        
      }
    }
    
  ]
    
});



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:false,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
    ]
  });











   



























