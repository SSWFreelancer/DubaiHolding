document.addEventListener('DOMContentLoaded', function(event) {	

	function handleScroll() {
		var header = document.querySelector('.header');
		var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll > 20) {
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }
	}
	handleScroll();


	window.addEventListener('scroll', handleScroll);

	
	var learnMore = document.querySelector('.learnmore');
	var learnMoreNext = document.querySelector('.learnmore + *');
	function handleResize() {
		if( window.screen.width > 1023){
			var learnMoreHeight = learnMore.offsetHeight/2;
    	learnMoreNext.style.marginTop = -learnMoreHeight + 'px'
  	}
	}
	handleResize();
	window.addEventListener('resize', handleResize);		
	



	var headerBurger = document.querySelectorAll('.menu__dots');
	var body = document.querySelector('body');
	var menu = document.querySelector('.menu');
	if(headerBurger){
		headerBurger.forEach(function(headerBurger){
			headerBurger.addEventListener('click', function(event){
				headerBurger.classList.toggle('active');
				menu.classList.toggle('active');
				body.classList.toggle('lock');
			});
		})
	}

	document.addEventListener('click', function(event) {
		headerBurger.forEach(function(headerBurger){
		  if (!headerBurger.contains(event.target)) {
					headerBurger.classList.remove('active');
		  }	  
		});
	});
	var menuLinks = document.querySelectorAll('.menu__link');
	if(menuLinks){
		menuLinks.forEach(function(menuLinks){
			menuLinks.addEventListener('click', function(event){
				headerBurger.forEach(function(headerBurger){
					headerBurger.classList.remove('active');
				});
				menu.classList.remove('active');
				body.classList.remove('lock');
			})
		});
	}

	var footerBurger = document.querySelector('.menu-footer__dots');
	var menuFooter = document.querySelector('.menu-footer');
	if(footerBurger){
		footerBurger.addEventListener('click', function(event){
			footerBurger.classList.toggle('active');
			menuFooter.classList.toggle('active');
		})
	}
	document.addEventListener('click', function(event) {
	  if (!footerBurger.contains(event.target)) {
				footerBurger.classList.remove('active');
				menuFooter.classList.remove('active');
	  }	  
	});

  if(document.querySelector('.places__slider')){
      new Swiper('.places__slider', {
        speed: 600,
        spaceBetween: 20,
	      navigation: {
	        prevEl: '.places__prev',	
	        nextEl: '.places__next',
	      },
		    breakpoints: {
		        1100: {
		        	loop:false,
		        	slidesPerView: 3,
		        },	    
		        768: {
		        	loop:false,
		        	slidesPerView: 2,
		        },	 
		        0: {
		        	loop:true,
		        	slidesPerView: 1,
		        },	
		    }
      });
   }
  if(document.querySelector('.about__slider')){
      new Swiper('.about__slider', {
        speed: 600,
        spaceBetween: 40,
        slidesPerView: 1.3,
        initialSlide: 1,
        centeredSlides: true,
	      navigation: {
	        prevEl: '.about__prev',	
	        nextEl: '.about__next',
	      },
		    breakpoints: {
		        1101: {
		        	slidesPerView: 1.3,
		        },	    
		        768: {
		        	spaceBetween: 20,
		        	slidesPerView: 1.2,
		        },	 
		        0: {
		        	initialSlide: 0,
		        	spaceBetween: 12,
		        	slidesPerView: 1.1,
		        },	
		    }

      });
   }
  if(document.querySelector('.gallery__slider')){
      new Swiper('.gallery__slider', {
        speed: 600,
        spaceBetween: 20,
        loop:true,
        slidesPerView: 1,
	      navigation: {
	        prevEl: '.gallery__prev',	
	        nextEl: '.gallery__next',
	      },
	      pagination: {
	      	el:'.gallery__pagination',
	      },
      });
   }
   if(document.querySelector('[data-fancybox]')){
		 	Fancybox.bind("[data-fancybox]", {
			  Images: {
			  	zoom:false,
			  	zoomOpacity:false,
			  },
			  Thumbs: {
			    type: "classic",
			  },
		 	});
   }


	var tabsItems = document.querySelectorAll('[data-tab]');
	if(tabsItems){
		tabsItems.forEach(function(tabsItem) {
		    tabsItem.addEventListener('click', function(event) {
				    event.preventDefault();
				    var tabParent = this.closest('.tabs');
				    var tabActive = tabParent.querySelector('[data-tab].active');
				    var contentActive = tabParent.querySelectorAll('[data-content].target');
				    if (tabActive) {
				        tabActive.classList.remove('active');
				    }
						contentActive.forEach(function(contentActive){
						  if (contentActive) {
								contentActive.classList.remove('target');
						  }	  
						});
				    this.classList.add('active');
				    const tabContent = this.getAttribute("data-tab");
				    const tabId = tabParent.querySelectorAll(`[data-content="${tabContent}"]`);
						tabId.forEach(function(tabId){
						  if (tabId) {
								tabId.classList.add('target');
						  }	  
						});
		    });
		});
	}

	var allphotos = document.querySelectorAll('.allphotos');
	if(allphotos){
		allphotos.forEach(function(allphotos){
			allphotos.addEventListener('click', function(event){
				event.preventDefault();
				var fancyboxName = this.getAttribute("data-fancyboxname");
				if (fancyboxName) {
          var targetImage = document.querySelector('[data-fancybox="' + fancyboxName + '"]');
          	if (targetImage) {
              targetImage.click();
           	}
        }
			})
		});
	}

  if (document.querySelector(".apartment__slider")) {
    new Swiper(".apartment__slider", {
      speed: 600,
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: {
          el: ".apartment__navslider",
          slidesPerView: 3,
          spaceBetween: 20,
			    breakpoints: {
			        1101: {
			        	spaceBetween: 20,
			        },	    
			        0: {
			        	spaceBetween: 10,
			        },	 
			    }

        },
      },
    });
  }


});
