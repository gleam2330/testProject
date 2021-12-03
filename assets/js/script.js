$(document).ready(function(){
  // kv
  $('.kv-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }
    ]
  });

  // promotion
  $('.promotion-list').slick({
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    // [a, b, c]
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: 'unslick',
        // ▲768일때 슬릭을 해제하겠다
        // 1. 768 이하가 될때, 슬라이드가 죽었습니다.
        // 2. 슬라이드가 죽어서, css도 같이 죽었어요 -> 저희가 옷을 입혀줫어요
        // 3. 화면을 다시 키워봤더니, 슬라이드가 안들어와요 -> 화면의 크기가 바뀌면, 슬라이드를 다시 붙여주는 작업~!

      }
    ]
  });

  // product
  $('.product-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: true
        }
      }
    ]
  });

  // 패밀리 사이트(.select-label)를 클릭을 하면
  // 회색박스 영역(.select-list)이 자연스럽게 올라오고
  // 패밀리사이트를 클릭하면 
  // 회색박스 영역이 자연스럽게 내려오고

  // 이벤트 = 함수 = 메소드
  // $('.select-label').click(function(e){
  //   console.log('---클릭');
  // });

  // $('.select-list').hide();
  // (css => .select-list { display: none; } )
  // console.log('--hide');
  // css로 할수 있는건 js로 가능하다
  // css로 할 수 있는건 굳이 js로 할 필요 없다
  // js로 가능한걸 css로 다 가능한건 아니다

  $('.select-label').on('click', function(){
    console.log('000클릭');
    // 회색박스 영역(.select-list)이 자연스럽게 올라오고 내려오고

    $('.select-list').slideToggle('fast');
    console.log('--slideToggle');
  });

// 햄버거버튼이 클릭이 되면 - 메뉴가 나오고
// 햄버거버튼이 또클릭이 되면 - 메뉴가 사라지고
// 메뉴가 나타나고 사라지는 작업 -> css 판을 다 깔아뒀어요 (.mob-gnb에 active 클래스)
  $('.toggle-menu').click(function(){
    $(this).toggleClass("active");
    // this => 토글메뉴
    // 메뉴가 나타나고 사라지는 작업
    $('.mob-gnb').toggleClass('active');
  });


  // ▼ 부연설명.ver
  // $('.gnb .dep1 > a').click(function(){
  //   console.log('클릭');
  //   console.log('this', this);
  //   console.log('.attr = ', $(this).attr('href'));
  //   // $(this).attr('href');
  //   // ▲ 현재 선택된 아이에서, 속성을 가져오는데, 'href'에 해당하는 속성의 값을 가져와줘~~
  //   console.log('test id = ', $(this).attr('id'));
  //   // $(this).attr('id');
  //   // ▲ 현재 선택된 아이에서, 속성을 가져오는데, 'id'에 해당하는 속성의 값을 가져와줘~~

  //   // $('#tmp1').offset().top
  //   // ▲ #tmp1의 좌표값 중에 top값을 구해줘~~
  //   // cf) #tmp1 == $(this).attr('href')
  //   console.log('this offset',  $($(this).attr('href')).offset().top );
  //   // console.log('tmp1 offset top = ', $('#tmp1').offset().top);
  //   // console.log('tmp2 offset top = ', $('#tmp2').offset().top);
  //   // console.log('tmp3 offset top = ', $('#tmp3').offset().top);

  //   var targetPos = $($(this).attr('href')).offset().top -80;
  //   // ▲ 구해진 좌표값을 변수 targetPos 에 대입 (hd 높이 만큼 빼줌)
  //   console.log('targetPos', targetPos);

  //   $('body, html').animate({'scrollTop': targetPos});
  //   // ▲문서전체의 스크롤을 이동~~
  // });

  // // ▼ 최종.ver
  // $('.gnb .dep1 > a').click(function(e){
  //   // 조건문
  //   // if(참) {
  //   //   // 참값 -> false(거짓: false, 0, 빈값, null, undefined)를 제외한 모든 값
  //   // } else {
  //   //   거짓일때만 해당되는 문장
  //   // }
  //   if(this.hash) {
  //     e.preventDefault();
  //     console.log('e ', e);

  //     var targetPos = $(this.hash).offset().top - 80;
  //     $('body, html').animate({'scrollTop': targetPos});
  //   } else {
  //     console.log('빈값이야');
  //     // e.preventDefault();
  //     // 태그가 가지고 있는 기본기능을 막아주는 역할
  //   }

  //   $('.toggle-menu').toggleClass("active");
  //   $('.mob-gnb').toggleClass('active');

  //   // 올바른것을 모두 고르세용
  //   // 1. 메뉴1을 눌렀을때 스크롤 이동 되면서/o navi가 닫힌다/o
  //   // 2. 메뉴5를 눌렀을때 페이지 이동이 되면서/o navi가 닫힌다/x
  //   // 3. 메뉴1을 눌렀을때 페이지 이동이 되지만/x navi는 닫히지 않는다./x
  //   // 4. 메뉴5를 눌렀을때 페이지 이동이 되지만/o navi는 닫히지 않는다./o

  //   // $('#tmp1')
  //   // $('//www.paris.co.kr/store/').offset().top
  //   // $('//www.paris.co.kr/delivery/howto/').offset().top
    
  //   // 해결1. href의 값에서 #이 들어간 아이들만 좌표값을 구하게끔~
    
  //   // var targetPos = $(this.hash).offset().top - 80;
  //   // // var targetPos = $('#tmp1').offset().top - 80;
  //   // // $(this).attr('href') == this.hash == #tmp1
  //   // console.log('hash = ', this.hash, 'attr = ', $(this).attr('href'));

  //   // $('body, html').animate({'scrollTop': targetPos});

  //   // $('.toggle-menu').toggleClass("active");
  //   // $('.mob-gnb').toggleClass('active');
  // });

  // ▼ 최최종.ver
  $('.gnb .dep1 > a').click(function(e){

    if(this.hash) {
      e.preventDefault();
      
      var targetPos = $(this.hash).offset().top - 80;
      $('body, html').animate({'scrollTop': targetPos});
    } 

    $('.toggle-menu').toggleClass("active");
    $('.mob-gnb').toggleClass('active');
  });


  $(window).resize(function(){
    // 창 크기 변화 감지
    var windowWidth = $( window ).width();
    // console.log('windowWidth = ' + windowWidth + '입니다.');
    // 문자열 잇기 : +
    // '문자열' + 변수 + '문자열'

    $('.promotion-list').slick('resize');
  });
  
  $('.promotion-list').on('setPosition', function(){
    // Q. '프로모션의 이미지영역' 높이를 구해주세요
    var pmSlideHeight = $('.promotion .img-area').height();
    // ▲프로모션 이미지영역의 높이를 구하고, 그 높이를 pmSlide라는 변수에 담아요.
    console.log('pmSlideHeight = ' + pmSlideHeight);

    // 화살표의 선택
    $('.promotion .slider .slick-arrow').css({'top': pmSlideHeight / 2});
  });

  $('.product-list').on('setPosition', function(){
    var pdSlideHeight = $('.product .img-area').height();
    $('.product .slider .slick-arrow').css({'top': pdSlideHeight / 2});
  });

});
