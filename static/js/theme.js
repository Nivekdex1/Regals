(function ($) {
    'use strict';

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

     // Loder  //
     $(function () {
        $('body').addClass('loaded');
    });


    //primeleg all button
    $(function() {  
        $('.primeleg_btn')
        .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
    });


    
    // menu button - start
    $(document).ready(function () {
        $(".close_btn, .cart_sidebar_overlay").on("click", function () {
        $(".cart_sidebar").removeClass("active");
        $(".cart_sidebar_overlay").removeClass("active");
        });

        $(".cart_btn").on("click", function () {
        $(".cart_sidebar").addClass("active");
        $(".cart_sidebar_overlay").addClass("active");
        });

        $(".cart_item .remove_btn").on("click", function () {
        $(this).closest(".cart_item").toggleClass("remove");
        });
    });


    // menu button - start
    $(document).ready(function () {
      $(".close_btns, .product_sidebar_overlay").on("click", function () {
      $(".product_sidebar").removeClass("active");
      $(".product_sidebar_overlay").removeClass("active");
      });

      $(".product_btn").on("click", function () {
      $(".product_sidebar").addClass("active");
      $(".product_sidebar_overlay").addClass("active");
      });


  });



    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



     


    // countdown


         // Mouse Move

        //   $(document).ready(function () {
        //     document.addEventListener("mousemove", parallax);

        //     function parallax(e) {
        //       this.querySelectorAll(".layer").forEach((layer) => {
        //         const speed = layer.getAttribute("data-speed");

        //         const x = (window.innerWidth - e.pageX * speed) / 65;
        //         const y = (window.innerHeight - e.pageY * speed) / 65;

        //         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        //       });
        //     }
        //   });




    
  
    // brand list Active
    $('.case_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    })
     // case study Active
     $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 2
            }
        }
    })

         // case study Active
         $('.testi_list2').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            dots: false,
            margin: 30,
            nav: false,
            navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        })

    // testimonial Active
     $('.testimonial').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: true,
        navText: ["<i class='flaticon flaticon-left-arrow'''></i>", "<i class='flaticon flaticon-right-arrow'''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })


     // testimonial Active
     $('.brand_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 6
            }
        }
    })
    // testimonial Active
    $('.service_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: true,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })
    // Package Active
    $('.Package_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Testi list Active
    $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
     // Portfolio List Active
     $('.portfolio_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        margin: 30,
        nav: false,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })
    // Testi list Active
    $('.testi_list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        margin: 30,
        nav: true,
        navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })
  // Testi list Active
  $('.galary_list').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 10000,
    dots: false,
    margin: 0,
    nav: false,
    navText: ["<i class='flaticon flaticon-left-arrow''></i>", "<i class='flaticon flaticon-right-arrow''></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 2
        },
        992: {
            items: 4
        },
        1000: {
            items: 6
        },
        1920: {
            items: 6
        }
    }
})

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function () {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        };

    });

    // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true

    });
    
    


    jQuery(document).ready(function ($) {
        "use strict";

        // =======< accordion js >========
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $('.accordion a').on('click', function (j) {
            var dropDown = $(this).closest("li").find("p");

            $(this).closest(".accordion").find("p").not(dropDown).slideUp();

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });


         //=====< barfiller script >====
         $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });

        

    //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });



     //  Cart Plus Minus Button
             
     $('.ctnbutton').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    

     // Team 
    $(".team-share").click(function(){
        $(this).siblings(".team-social-icon").toggleClass('active');
    });

    


    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }

     /*------------- preloader js --------------*/
     var percentage = 0;
     var LoadingCounter = setInterval(function() {
         if (percentage <= 100) {
             // $('#loading-screen ').css('opacity', (100 - percentage));
             $("#loading-screen .loading-counter").text(percentage + "%");
             $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
             $("#loading-screen .progress-line").css(
                 "transform",
                 "scale(" + percentage / 100 + ")"
             );
             percentage++;
         } else {
             $("#loading-screen").fadeOut(500);
             setTimeout(() => {
                 $("#loading-screen").remove();
             }, 500);
             clearInterval(LoadingCounter);
         }
     }, 10);
     /*-----------------  End Percentage loading screen interactions -----------------  */
    
  // Sidebar
  ("use strict");
  jQuery(document).ready(function (o) {
    0 < o(".offset-side-bar").length &&
      o(".offset-side-bar").on("click", function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          o(".cart-group").addClass("isActive");
      }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".cart-group").removeClass("isActive");
        }),
      0 < o(".navSidebar-button").length &&
        o(".navSidebar-button").on("click", function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            o(".info-group").addClass("isActive");
        }),
      0 < o(".close-side-widget").length &&
        o(".close-side-widget").on("click", function (e) {
          e.preventDefault(), o(".info-group").removeClass("isActive");
        }),
      o("body").on("click", function (e) {
        o(".info-group").removeClass("isActive"),
          o(".cart-group").removeClass("isActive");
      }),
      o(".xs-sidebar-prodct").on("click", function (e) {
        e.stopPropagation();
      }),
      0 < o(".xs-modal-popup").length &&
        o(".xs-modal-popup").magnificPopup({
          type: "inline",
          fixedContentPos: !2,
          fixedBgPos: !0,
          overflowY: "auto",
          closeBtnInside: !2,
          callbacks: {
            beforeOpen: function () {
              this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
            },
          },
        });
  });







        // Shop To Pop Up
        $(document).ready(function () {
            function handleConfirmation(message, callback) {
              showConfirm(message, function (result) {
                if (result) {
                  console.log("You pressed Yes.");
                } else {
                  console.log("You pressed No.");
                }
                if (callback) {
                  callback(result);
                }
              });
            }
        
            $(".whiteListConfirm").on("click", function () {
              handleConfirmation("Do you want to add to white list ?", function (result) {});
            });
        
            $(".cartConfirm").on("click", function () {
              handleConfirmation("Do you want to add to Cart list ?", function (result) {
                if (result) {
                  window.location.href = "cart.html";
                }
              });
            });
          });

      // confirm box

        function showConfirm(message, callback) {
            let confirmBox = document.createElement("div");
            confirmBox.classList.add("confirm-box");

            let messageBox = document.createElement("div");
            messageBox.classList.add("message-box");
            messageBox.textContent = message;
            confirmBox.appendChild(messageBox);

            let buttonBox = document.createElement("div");
            buttonBox.classList.add("button-box");
            messageBox.appendChild(buttonBox);

            let yesButton = document.createElement("button");
            yesButton.classList.add("yes-button");
            yesButton.textContent = "Yes";
            buttonBox.appendChild(yesButton);
            yesButton.addEventListener("click", YesButtonClick);

            let noButton = document.createElement("button");
            noButton.classList.add("no-button");
            noButton.textContent = "No";
            buttonBox.appendChild(noButton);
            noButton.addEventListener("click", NoButtonClick);

            function removeConfirmBox() {
            document.body.removeChild(confirmBox);
            }

            function YesButtonClick() {
            callback(true);
            removeConfirmBox();
            }

            function NoButtonClick() {
            callback(false);
            removeConfirmBox();
            }

            document.body.appendChild(confirmBox);
        }


})(jQuery);




