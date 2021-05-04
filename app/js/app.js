//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)


document.addEventListener('DOMContentLoaded', () => {

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


  showContacts();
  hamburgerMenu();
  
  // Запускаем функции в десктопах и на мобильных устройствах
  if (window.innerWidth <= 992) {
    showDropdownMenu(".navbar__item.has-child .navbar__link");
    showDropdownMenu(".dropdown .has-child .parent-link");
  }
  if (window.innerWidth <= 768) {
    document.querySelector(".main-section-btn").innerHTML = "Рассчитать стоимость";
  }

})
