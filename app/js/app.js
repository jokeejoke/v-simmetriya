import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
import Swiper, {
	Autoplay,
	Pagination,
	Navigation
} from 'swiper';
import lightGallery from 'lightgallery';

require('~/app/js/vendor/fancybox/dist/jquery.fancybox.min.js');


document.addEventListener('DOMContentLoaded', () => {

  $(".gallery-items").lightGallery({});

  $(".form-popup-close").on("click", function() {
    $.fancybox.close();
  });

  $(".compare-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".compare-table").toggleClass("active");
  })
  

  $(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.to-top').addClass('active')
		} else {
			$('.to-top').removeClass('active')
		}
	})

  $('.to-top').on('click', function() {
		$('html, body').stop().animate({ scrollTop: 0}, 'slow', 'swing')
	});

  $(".gallery-tab-item").not(":first").hide();
  $(".gallery-wrapper .gallery-tab").click(function() {
    $(".gallery-wrapper .gallery-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".gallery-tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

   

	function showContacts () {
    const $icon = document.querySelector(".contacts-mobile-icon");
    const $contactsBlock = document.querySelector(".contacts__list");
    $icon.addEventListener("click", function () {
      $contactsBlock.classList.toggle("active");
    })
  }

  function showDropdownMenu (selector) {
    const $parentLink = document.querySelectorAll(selector);
    $parentLink.forEach(link => {
      link.addEventListener("click", function (e) {
        if (link.nextElementSibling.classList.contains("dropdown") || link.nextElementSibling.classList.contains("third-level")) {
          link.classList.toggle("active");
          link.nextElementSibling.classList.toggle("active");
        }
        e.preventDefault();
        return false;
      })
    })
  }

  function hamburgerMenu() {
		const $burgerBtn = document.querySelector('.hamburger')
		const $mobileMenu = document.querySelector('.header__right')
		$burgerBtn.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active')
				$mobileMenu.classList.remove('active')
				document.body.style.overflow = ''
			} else {
				this.classList.add('active')
				$mobileMenu.classList.add('active')
				document.body.style.overflow = 'hidden'
			}
		})
	}

  // Init Slider
  Swiper.use([Autoplay, Pagination, Navigation]);

  function initSlider (selector, paginationSelector) {
    var slider = new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 5,
      speed: 800,
      freeMode: true,
      autoplay: false,
      loop: true,
      //centeredSlides: "auto",
      pagination: {
        el: paginationSelector,
        clickable: true,
        renderBullet: function (index, className) {
          if (index < 9) {
            index = '0' + (index + 1);
          }
          return '<span class="' + className + '">' + (index) + "</span>";
        },
      },
      navigation: {
        nextEl: ".slider-carousel__next",
        prevEl: ".slider-carousel__prev",
      },
      breakpoints: {
        992: {
          loop: true,
          spaceBetween: 20,
          autoplay: true
        },
        768: {
          spaceBetween: 20,
          autoplay: true
        }
      }
    });
  }
  

  showContacts();
  hamburgerMenu();
  initSlider(".office-slider .slider-carousel", ".office-slider .slider-carousel-pagination");
  initSlider(".plumbing-slider .slider-carousel", ".plumbing-slider .slider-carousel-pagination");
  initSlider(".interroom-slider .slider-carousel", ".interroom-slider .slider-carousel-pagination");
  initSlider(".loft-slider .slider-carousel", ".loft-slider .slider-carousel-pagination");
  initSlider(".sliding-slider .slider-carousel", ".sliding-slider .slider-carousel-pagination");


  // Models Slider
  var modelsSlider = new Swiper(".models-slider .slider-carousel", {
    slidesPerView: 2,
    spaceBetween: 5,
    speed: 800,
    freeMode: true,
    autoplay: true,
    loop: false,
    //centeredSlides: "auto",
    pagination: {
      el: ".models-slider .slider-carousel-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index < 9) {
          index = '0' + (index + 1);
        }
        return '<span class="' + className + '">' + (index) + "</span>";
      },
    },
    navigation: {
      nextEl: ".slider-carousel__next",
      prevEl: ".slider-carousel__prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: 4,
        autoplay: false
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      }
    }
  });
  
  // Запускаем функции в десктопах и на мобильных устройствах
  if (window.innerWidth <= 992) {
    showDropdownMenu(".navbar__item.has-child .navbar__link");
    showDropdownMenu(".dropdown .has-child .parent-link");
  }
  if (window.innerWidth <= 768) {
    if (document.querySelector(".main-section-btn")) {
      document.querySelector(".main-section-btn").innerHTML = "Рассчитать стоимость";
    }  
  }

  window.addEventListener("resize", function() {
    //location.reload();
  })

})
