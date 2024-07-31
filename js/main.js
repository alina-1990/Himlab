// //tabs

(function ($) {
  $(function () {
    $("ul.stack__list").on("click", "li:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.stack__blog")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);

/// tabs
jQuery(document).ready(function ($) {
  $(".usefull-links").click(function () {
    $(this).parents(".bg").find(".links").toggleClass("open");
    $(this).parents(".bg").find(".flaticon-down-arrow").toggleClass("open");
  });
  $(".usefull-links1").click(function () {
    $(this).parents(".bg").find(".links1").toggleClass("open");
    $(this)
      .parents(".bg")
      .find(".flaticon-down-arrow1")
      .toggleClass("open").style.height = "23px";
  });
});

//slider product__container
$(function () {
  $(".product__container").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-arrows slick-prev"><img src="images/next.svg" alt="prev"/></button>',
    nextArrow:
      '<button type="button" class="slick-arrows slick-next"><img src="images/prev.svg" alt="next"/></button>',
    responsive: [
      {
        breakpoint: 475,
        settings: {},
      },
    ],
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    slide: "div",
    prevArrow:
      '<button type="button" class="slick-arrows slick-prev"><img src="images/next.svg" alt="prev"/></button>',
    nextArrow:
      '<button type="button" class="slick-arrows slick-next"><img src="images/prev.svg" alt="next"/></button>',
  });
  $(".news__container").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-arrows slick-prev"><img src="images/next-arrow.png" alt="prev"/></button>',
    nextArrow:
      '<button type="button" class="slick-arrows slick-next"><img src="images/arrow-about.png" alt="next"/></button>',
    responsive: [
      {
        breakpoint: 475,
        settings: {},
      },
    ],
  });
  $(".directions__container").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 475,
        settings: {
          slidesShow: 4,
        },
      },
    ],
  });
});

// //burger
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector(".header");
mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

//переключатель
// Убавляем кол-во по клику
$(".quantity_inner .bt_minus").click(function () {
  let $input = $(this).parent().find(".quantity");
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});
// Прибавляем кол-во по клику
$(".quantity_inner .bt_plus").click(function () {
  let $input = $(this).parent().find(".quantity");
  let count = parseInt($input.val()) + 1;
  count =
    count > parseInt($input.data("max-count"))
      ? parseInt($input.data("max-count"))
      : count;
  $input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$(".quantity_inner .quantity").bind("change keyup input click", function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, "");
  }
  if (this.value == "") {
    this.value = 1;
  }
  if (this.value > parseInt($(this).data("max-count"))) {
    this.value = parseInt($(this).data("max-count"));
  }
});

// //popup
var popup = document.querySelector(".popup");
var btns = document.querySelectorAll(".btn-modal");
var close = document.querySelector(".close");

btns.forEach((btns) =>
  btns.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("hidden");
  })
);

popup.addEventListener("click", function (event) {
  e = event || window.event;
  if (e.target == this) {
    popup.classList.add("hidden");
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
});

// переключение языка

$("#input0").click(function () {
  if ($("select#input0 :selected").val() == "RUS") {
    $("select#input0").attr(
      "style",
      "background-image:url(images/Hicon.png); background-repeat: no-repeat; padding-left: 29px;padding-top:-10px"
    );
  }
  if ($("select#input0 :selected").val() == "ENG") {
    $("select#input0").attr(
      "style",
      "background-image:url(images/Hicon.png); background-repeat: no-repeat;  padding-left: 29px;padding-top:-10px"
    );
  }
  console.log("select color: " + $("select#input0 :selected").val());
});

let text = document.querySelector(".dropbtn__lang");
let elem = document.querySelector("#input0");

function lang1(sel) {
  console.log(text);
  text.textContent = sel;
}

//

function changeText(ev) {
  if (ev.getAttribute("data-show") === "true") {
    ev.innerHTML =
      "Скрыть" +
      '<img style="width: 24px; z-index: -1; margin-left:15px;" src="images/arrows1.png">';
    ev.setAttribute("data-show", "false");
  } else {
    ev.innerHTML =
      "Читать еще" +
      '<img style="width: 24px; z-index: -1; margin-left:4px;" src="images/arrow.png">';
    ev.setAttribute("data-show", "true");
  }
}

// window.onload = function(){
//   slideOne();
//   slideTwo();
// }
// let sliderOne = document.getElementById("slider-1");
// let sliderTwo = document.getElementById("slider-2");
// let displayValOne = document.getElementById("range1");
// let displayValTwo = document.getElementById("range2");
// let minGap = 0;
// let sliderTrack = document.querySelector(".slider-track");
// let sliderMaxValue = document.getElementById("slider-1").max;
// function slideOne(){
//   if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//       sliderOne.value = parseInt(sliderTwo.value) - minGap;
//   }
//   displayValOne.textContent = sliderOne.value;
//   fillColor();
// }
// function slideTwo(){
//   if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
//       sliderTwo.value = parseInt(sliderOne.value) + minGap;
//   }
//   displayValTwo.textContent = sliderTwo.value;
//   fillColor();
// }
// function fillColor(){
//   percent1 = sliderOne.value
//   percent2 = sliderTwo.value
//   sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
// }

jQuery(document).ready(function () {
  $(".upper").on("input", setFill);
  $(".lower").on("input", setFill);

  var max = $(".upper").attr("max");
  var min = $(".lower").attr("min");

  function setFill(evt) {
    var valUpper = $(".upper").val();
    var valLower = $(".lower").val();
    if (parseFloat(valLower) > parseFloat(valUpper)) {
      var trade = valLower;
      valLower = valUpper;
      valUpper = trade;
    }

    var width = (valUpper * 100) / max;
    var left = (valLower * 100) / max;
    $(".fill").css("left", "calc(" + left + "%)");
    $(".fill").css("width", width - left + "%");

    // Update info
    if (parseInt(valLower) == min) {
      $(".easy-basket-lower").val("0");
    } else {
      $(".easy-basket-lower").val(parseInt(valLower));
    }
    if (parseInt(valUpper) == max) {
      $(".easy-basket-upper").val("5000");
    } else {
      $(".easy-basket-upper").val(parseInt(valUpper));
    }
    $(".histogram-list li").removeClass("ui-histogram-active");
  }

  // изменяем диапазон цен вручную
  $(".easy-basket-filter-info p input").keyup(function () {
    var valUpper = $(".easy-basket-upper").val();
    var valLower = $(".easy-basket-lower").val();
    var width = (valUpper * 100) / max;
    var left = (valLower * 100) / max;
    if (valUpper > 5000) {
      var left = max;
    }
    if (valLower < 0) {
      var left = min;
    } else if (valLower > max) {
      var left = min;
    }
    $(".fill").css("left", "calc(" + left + "%)");
    $(".fill").css("width", width - left + "%");
    // меняем положение ползунков
    $(".lower").val(valLower);
    $(".upper").val(valUpper);
  });
  $(".easy-basket-filter-info p input").focus(function () {
    $(this).val("");
  });
  $(".easy-basket-filter-info .iLower input").blur(function () {
    var valLower = $(".lower").val();
    $(this).val(Math.floor(valLower));
  });
  $(".easy-basket-filter-info .iUpper input").blur(function () {
    var valUpper = $(".upper").val();
    $(this).val(Math.floor(valUpper));
  });

  // $('.histogram-list li').click(function() {
  //   $('.histogram-list li').removeClass('ui-histogram-active');
  //   var range_from = $(this).attr('price-range-from');
  //   var range_to = $(this).attr('price-range-to');
  //   var width = range_to * 100 / max;
  //   var left = range_from * 100 / max;
  //   $('.easy-basket-lower').val(range_from);
  //   $('.easy-basket-upper').val(range_to);
  //   $('.fill').css('left', 'calc(' + left + '%)');
  //   $('.fill').css('width', width - left + '%');
  //   $('.lower').val(range_from);
  //   $('.upper').val(range_to);
  //   $(this).addClass('ui-histogram-active');
  // });
});

// $(document).ready(function() {	
// 	var $result = $('#search_box-result');
	
// 	$('#search').on('keyup', function(){
// 		var search = $(this).val();
// 		if ((search != '') && (search.length > 1)){
// 			$.ajax({
// 				type: "POST",
// 				url: "../ajax_search.php",
// 				data: {'search': search},
// 				success: function(msg){
// 					$result.html(msg);
// 					if(msg != ''){	
// 						$result.fadeIn();
// 					} else {
// 						$result.fadeOut(100);
// 					}
// 				}
// 			});
// 		 } else {
// 			$result.html('');
// 			$result.fadeOut(100);
// 		 }
// 	});

// 	$(document).on('click', '.search_result-name a', function(){
// 		$('#search').val($(this).text());
// 		$result.fadeOut(100);
// 		return false;
// 	});

// 	$(document).on('click', function(e){
// 		if (!$(e.target).closest('.search_box').length){
// 			$result.html('');
// 			$result.fadeOut(100);
// 		}
// 	});
// });



   
var CopyPage = []; // копия страницы в ихсодном виде
                       
function TrimStr(s) {
    s = s.replace( /^\s+/g, '');
    return s.replace( /\s+$/g, '');
}


function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода

    var obj = window.document.getElementById(inputId);
    var textToFind;

    if (obj) {
        textToFind = TrimStr(obj.value);//обрезаем пробелы
    } else {
        alert("Введенная фраза не найдена");
        return;
    }
   
    if (textToFind == "") {
        alert("Вы ничего не ввели");
        return;
    }
            if(document.getElementById('price').innerHTML.toLowerCase().indexOf(textToFind.toLowerCase()) == -1)
    {
    alert("Ничего не найдено, проверьте правильность ввода!");
    }
   
    else
    {
   
    for (var i=0; i<5; i++)
    {
    var id=document.getElementById("fing_"+i);

    if (CopyPage[i] == undefined)
         {CopyPage[i]=id.innerHTML;}
    else {id.innerHTML=CopyPage[i];}

   
    if(~id.innerHTML.toLowerCase().indexOf(textToFind.toLowerCase())) //(если не -1)
    //if (copy_page[i] != '')
        {
        id.style.display='block';
        id.innerHTML = id.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" class=find>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;

        } else {
                            id.style.display='none';
        }}
    }
    }  
