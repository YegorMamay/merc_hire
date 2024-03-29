'use strict';

((w, d, $, ajax) => {

    $(() => {
        console.log('%cThe website developed by BRAIN WORKS — https://brainworks.pro/', 'color: blue');
        console.log('%cСайт разработан в BRAIN WORKS — https://brainworks.pro/', 'color: blue');

        const $w = $(w);
        const $d = $(d);
        const html = $('html');
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            html.addClass('is-mobile');
        }

        html.removeClass('no-js').addClass('js');
        dropdownPhone();
        scrollToElement();
        sidebarAccordion();
        reviews('.js-reviews');
        scrollTop('.js-scroll-top');
        wrapHighlightedElements('.highlighted');
        if (ajax) {
            ajaxLoadMorePosts('.js-load-more', '.js-ajax-posts');
        }
        stickFooter('.js-footer', '.js-container');
        // hamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
        anotherHamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
        buyOneClick('.one-click-ru', '[data-field-id="field11"]', 'h1');
        // On Copy
        $d.on('copy', addLink);

        $w.on('resize', () => {
            if ($w.innerWidth() >= 630) {
                removeAllStyles($('.js-menu'));
            }
        });
    });

    /**
     * Dropdown Phone
     *
     * @example
     * dropdownPhone();
     *
     * @returns {void}
     */
    const dropdownPhone = () => {
        const dropDownBtn = $('.js-dropdown');
        const dropDownList = $('.js-phone-list');

        dropDownBtn.on('click', function () {
            $(this).toggleClass('active').siblings('.js-phone-list').fadeToggle(300);
        });

        $(document).on('click', (event) => {
            if ($(event.target).closest('.js-dropdown, .js-phone-list').length) return;

            dropDownList.fadeOut(300);
            dropDownBtn.removeClass('active');
        });
    };

    /**
     * Stick Footer
     *
     * @example
     * stickFooter('.js-footer', '.js-wrapper');
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @param {(string|Object)} footer - footer element
     * @param {(string|Object)} container - container element
     * @returns {void}
     */
    const stickFooter = (footer, container) => {
        let previousHeight, currentHeight;

        const offset = 0;
        const $footer = $(footer);
        const $container = $(container);

        currentHeight = ($footer.outerHeight() + offset) + 'px';
        previousHeight = currentHeight;

        $container.css('paddingBottom', currentHeight);

        $(window).on('resize', () => {
            currentHeight = ($footer.outerHeight() + offset) + 'px';

            if (previousHeight !== currentHeight) {
                $container.css('paddingBottom', currentHeight);
            }
        });
    };

    /**
     * Reviews - Slick Slider
     *
     * @example
     * reviews('.js-reviews');
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @param {(string|Object)} container - reviews container
     * @returns {void}
     */
    const reviews = (container) => {
        const element = $(container);

        if (element.children().length > 2 && typeof $.fn.slick === 'function') {
            element.slick({
                adaptiveHeight: false,
                autoplay: false,
                autoplaySpeed: 3000,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg></button>',
                dots: true,
                dotsClass: 'slick-dots',
                draggable: true,
                fade: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
                swipe: true,
                zIndex: 10,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ],
            });

            /*element.on('swipe', (slick, direction) => {
                console.log(slick, direction);
            });

            element.on('afterChange', (slick, currentSlide) => {
                console.log(slick, currentSlide);
            });

            element.on('beforeChange', (slick, currentSlide, nextSlide) => {
                console.log(slick, currentSlide, nextSlide);
            });*/
        }
    };

    /**
     * Hamburger Menu
     *
     * @example
     * hamburgerMenu('.js-menu', '.js-hamburger', '.js-menu-close');
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @param {(string|Object)} menuElement - Selected menu
     * @param {(string|Object)} hamburgerElement - Trigger element for open/close menu
     * @param {(string|Object)} closeTrigger - Trigger element for close opened menu
     * @returns {void}
     */
    /*const hamburgerMenu = (menuElement, hamburgerElement, closeTrigger) => {
        const menu = $(menuElement),
            close = $(closeTrigger),
            hamburger = $(hamburgerElement),
            menuAll = hamburger.add(menu);

        hamburger.add(close).on('click', () => {
            menu.toggleClass('is-active');
        });

        $(window).on('load', (event) => {
            if (document.location.hash !== '') {
                scrollToElement(document.location.hash);
            }
        });

        $(window).on('click', (e) => {
            if (!$(e.target).closest(menuAll).length) {
                menu.removeClass('is-active');
            }
        });
    };*/

    /**
     * Scroll to element
     *
     * @param {(string|Object)} elements Elements to add to handler
     * @returns {void}
     */
    /*const scrollHandlerForButton = (elements) => {
        elements = $(elements);

        let i, el;

        for (i = 0; i < elements.length; i++) {

            el = elements.eq(i);

            el.on('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                scrollToElement($(e.target.hash), () => {
                    document.location.hash = e.target.hash;
                });
            });

        }
    };*/


    /**
     * Another Hamburger Menu
     *
     * @param {string} menuElement Selector or element
     * @param {string} hamburgerElement Selector or element
     * @param {string} closeTrigger Also selector or element
     * @returns {void}
     */
    const anotherHamburgerMenu = (menuElement, hamburgerElement, closeTrigger) => {
        const Elements = {
            menu: $(menuElement),
            button: $(hamburgerElement),
            close: $(closeTrigger),
        };

        Elements.button.add(Elements.close).on('click', () => {
            Elements.menu.toggleClass('is-active');
        });

        Elements.menu.find('a').on('click', () => {
            Elements.menu.removeClass('is-active');
        });

        /**
         * Arrow Opener
         *
         * @param {Object} parent Selector or element
         * @returns {(Object)} jQuery element
         */
        const arrowOpener = function (parent) {
            const activeArrowClass = 'menu-item-has-children-arrow-active';

            return $('<button />')
                .addClass('menu-item-has-children-arrow')
                .on('click', function () {
                    parent.children('.sub-menu').eq(0).slideToggle(300);
                    if ($(this).hasClass(activeArrowClass)) {
                        $(this).removeClass(activeArrowClass);
                    } else {
                        $(this).addClass(activeArrowClass);
                    }

                });
        };

        const items = Elements.menu.find('.menu-item-has-children, .sub-menu-item-has-children');

        for (let i = 0; i < items.length; i++) {
            items.eq(i).append(arrowOpener(items.eq(i)));
        }
    };

    /**
     * Remove All Styles from sub menu element
     *
     * @param {Object} elementParent selector or element
     * @returns {void}
     */
    const removeAllStyles = (elementParent) => {
        elementParent.find('.sub-menu').removeAttr('style');
    };

    /**
     * Wrap all highlighted elements in container
     *
     * @param {(string|Object)} elements selector or elements
     * @returns {void}
     */
    const wrapHighlightedElements = (elements) => {
        elements = $(elements);

        let i, highlightedHeader;

        for (i = 0; i < elements.length; i++) {
            highlightedHeader = elements.eq(i);

            highlightedHeader.wrap('<div style="display: block;"></div>');
        }
    };

    /**
     * Buy in one click
     *
     * @example
     * buyOneClick('.one-click', '[data-field-id="field7"]', 'h1.page-name');
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @param {(string|Object)} button - The selected button when clicking on which the form of purchase pops up
     * @param {(string|Object)} field - The selected field for writing the value (disabled field)
     * @param {(string|Object)} headline - The element from which we get the value to write to the field
     * @returns {void}
     */
    const buyOneClick = (button, field, headline) => {
        const btn = $(button);

        if (btn.length) {
            btn.on('click', () => {
                $(field).prop('disabled', true).val($(headline).text());
            });
        }
    };

    /**
     * Scroll Top
     *
     * @example
     * scrollTop('.js-scroll-top');
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @param {(string|Object)} element - Selected element
     * @returns {void}
     */
    const scrollTop = (element) => {
        const el = $(element);

        el.on('click touchend', () => {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });

        let scrollPosition;

        $(window).on('scroll', function () {
            scrollPosition = $(this).scrollTop();

            if (scrollPosition > 200) {
                if (!el.hasClass('is-visible')) {
                    el.addClass('is-visible');
                }
            } else {
                el.removeClass('is-visible');
            }
        });
    };

    /**
     * Adding link to the site resource at copying
     *
     * @example
     * document.oncopy = addLink; or $(document).on('copy', addLink);
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @returns {void}
     */
    const addLink = () => {
        const body = document.body || document.getElementsByTagName('body')[0];
        const selection = window.getSelection();
        const page_link = '\n Источник: ' + document.location.href;
        const copy_text = selection + page_link;
        const div = document.createElement('div');

        div.style.position = 'absolute';
        div.style.left = '-9999px';

        body.appendChild(div);
        div.innerText = copy_text;

        selection.selectAllChildren(div);

        window.setTimeout(() => {
            body.removeChild(div);
        }, 0);
    };


    /**
     * Function to add scroll handler for all links with hash as first symbol of href
     *
     * @param {number} [animationSpeed=400] speed of animation
     * @returns {void}
     */
    const scrollToElement = (animationSpeed = 400) => {
        const links = $('a');

        links.each((index, element) => {
            const $element = $(element), href = $element.attr('href');
            if (href) {
                if (href[0] === '#' || href.slice(0, 2) === '/#' && !(href.slice(1, 3) === '__')) {
                    $element.on('click', (e) => {
                        e.preventDefault();
                        const target = $(href[0] === '#' ? href : href.slice(1));
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, animationSpeed);
                        } else if (href[0] === '/') {
                            location.href = href;
                        }
                    });
                }
            }
        });
    };

    /**
     * Sidebar Accordion
     *
     * @example
     * sidebarAccordion();
     *
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     *
     * @returns {void}
     */
    const sidebarAccordion = () => {
        const sidebarMenu = $('.sidebar .widget_nav_menu');
        const items = sidebarMenu.find('li');
        const subMenu = items.find('.sub-menu');

        if (subMenu.length) {
            subMenu.each(function (index, value) {
                $(value).parent().first().append('<i class="trigger"></i>');
            });
        }

        const classAction = 'is-opened';
        const trigger = items.find('.trigger');

        trigger.on('click', function () {
            const el = $(this), parent = el.parent();

            if (parent.hasClass(classAction)) {
                parent.removeClass(classAction);
            } else {
                parent.addClass(classAction);
            }
        });
    };

    /**
     * Ajax Load More Posts Handler
     *
     * @example
     * ajaxLoadMorePosts('.js-load-more', '.js-ajax-posts');
     * @author Fedor Kudinov <brothersrabbits@mail.ru>
     * @param {string} selector - Element for event handler (send ajax)
     * @param {string} container - The container to which the html markup will be added
     * @returns {void}
     */
    const ajaxLoadMorePosts = (selector, container) => {
        const btn = $(selector);
        const storage = $(container);

        if (!btn.length && !storage.length) return;

        let data, ajaxStart;

        data = {
            'action': ajax.action,
            'nonce': ajax.nonce,
            'paged': 1,
        };

        btn.on('click', () => {
            if (ajaxStart) return;

            ajaxStart = true;

            btn.addClass('is-loading');

            $.ajax({
                'url': ajax.url,
                'method': 'POST',
                'dataType': 'json',
                'data': data,
            })
                .done((response) => {
                    const posts = response.data;
                    storage.append(response.data);

                    data.paged += 1;

                    ajaxStart = false;

                    btn.removeClass('is-loading');

                    if (posts === '') {
                        btn.remove();
                    }
                })
                .fail((jqXHR, textStatus, errorThrown) => {
                    ajaxStart = false;
                    throw new Error(`Handling Ajax request loading posts has caused an ${textStatus} - ${errorThrown}`);
                });

        });
    };

    //disabled page scroll
    $('.js-hamburger').on('click', function () {
        $('body').addClass('body-overflow');
    });

    $('.js-menu-close, .menu-link').on('click', function () {
        $('body').removeClass('body-overflow');
    });

    $('.js-footer-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active');
    });

    (function () {

        $('.js-top-slider .menu-link').on('click', function (event) {
            event.preventDefault();
        });

        $('.js-top-slider').slick({
            slidesToShow: 6,
            arrows: false,
            autoplay: false,
            speed: 700,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            asNavFor: '.js-bottom-slider',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('#gallery .js-bottom-slider').slick({
            infinite: true,
            speed: 700,
            dots: false,
            asNavFor: '.js-top-slider',
            arrows: true,
            nextArrow: '<div class="slick-next"><svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg></div>',
            prevArrow: '<div class="slick-prev"><svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg></div>',
            focusOnSelect: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '260px',
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        centerPadding: '120px',
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '100px',
                    }
                },

                {
                    breakpoint: 600,
                    settings: {
                        centerMode: false,
                        centerPadding: '0',
                    }
                }
            ]
        });

        $('.js-client-slider').slick({
            slidesToShow: 4,
            arrows: true,
            nextArrow: '<div class="slick-next"><svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg></div>',
            prevArrow: '<div class="slick-prev"><svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg></div>',
            autoplay: false,
            speed: 600,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    })();


    /**
     * Animate Value
     * @example
     * animateValue('.js-count', 0, 2000);
     * @param {string} selector must be with data-value attribute
     * @param {number} start value (default = 0)
     * @param {number} duration speed for update, 1s = 1000
     * @returns {void}
     */
    const animateValue = (selector, start, duration) => {
        $(selector).each(function () {

            let countItem = $(this),
                endValue = parseInt(countItem.attr('data-value')),
                startValue = start,
                increment = 0,
                stepTime = Math.abs(duration / endValue);

            const timer = setInterval(function () {

                countItem.animate({opacity: 1}, duration / 2);
                increment += 20;
                startValue = increment;
                countItem.text(startValue);

                if (startValue >= endValue) {
                    clearInterval(timer);
                    countItem.siblings().animate({opacity: 1}, duration / 2);
                }

            }, stepTime);
        });
    };

    (function () {
        let contentBlock = $('#car-content');

        if (contentBlock.length > 0) {
            let blockOffset = contentBlock.offset().top,
                blockPosition = $(window).height() - contentBlock.outerHeight() / 2,
                scrollPosition = $(window).scrollTop();

            blockPosition -= blockOffset;

            if (scrollPosition >= blockPosition * -1) {
                animateValue('.js-count', 0, 2000);
            } else {
                $(window).on('scroll', function () {

                    if ($(window).scrollTop() >= blockPosition * -1) {
                        animateValue('.js-count', 0, 2000);
                        $(window).off('scroll');
                    }
                });
            }
        }

    })();

})(window, document, jQuery, window.jpAjax);
