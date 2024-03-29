"use strict";

(function(w, d, $, ajax) {
    $(function() {
        console.log("%cThe website developed by BRAIN WORKS — https://brainworks.pro/", "color: blue");
        console.log("%cСайт разработан в BRAIN WORKS — https://brainworks.pro/", "color: blue");
        var $w = $(w);
        var $d = $(d);
        var html = $("html");
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            html.addClass("is-mobile");
        }
        html.removeClass("no-js").addClass("js");
        dropdownPhone();
        scrollToElement();
        sidebarAccordion();
        reviews(".js-reviews");
        scrollTop(".js-scroll-top");
        wrapHighlightedElements(".highlighted");
        if (ajax) {
            ajaxLoadMorePosts(".js-load-more", ".js-ajax-posts");
        }
        stickFooter(".js-footer", ".js-container");
        anotherHamburgerMenu(".js-menu", ".js-hamburger", ".js-menu-close");
        buyOneClick(".one-click-ru", '[data-field-id="field11"]', "h1");
        $d.on("copy", addLink);
        $w.on("resize", function() {
            if ($w.innerWidth() >= 630) {
                removeAllStyles($(".js-menu"));
            }
        });
    });
    var dropdownPhone = function dropdownPhone() {
        var dropDownBtn = $(".js-dropdown");
        var dropDownList = $(".js-phone-list");
        dropDownBtn.on("click", function() {
            $(this).toggleClass("active").siblings(".js-phone-list").fadeToggle(300);
        });
        $(document).on("click", function(event) {
            if ($(event.target).closest(".js-dropdown, .js-phone-list").length) return;
            dropDownList.fadeOut(300);
            dropDownBtn.removeClass("active");
        });
    };
    var stickFooter = function stickFooter(footer, container) {
        var previousHeight, currentHeight;
        var offset = 0;
        var $footer = $(footer);
        var $container = $(container);
        currentHeight = $footer.outerHeight() + offset + "px";
        previousHeight = currentHeight;
        $container.css("paddingBottom", currentHeight);
        $(window).on("resize", function() {
            currentHeight = $footer.outerHeight() + offset + "px";
            if (previousHeight !== currentHeight) {
                $container.css("paddingBottom", currentHeight);
            }
        });
    };
    var reviews = function reviews(container) {
        var element = $(container);
        if (element.children().length > 2 && typeof $.fn.slick === "function") {
            element.slick({
                adaptiveHeight: false,
                autoplay: false,
                autoplaySpeed: 3e3,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg></button>',
                dots: true,
                dotsClass: "slick-dots",
                draggable: true,
                fade: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
                swipe: true,
                zIndex: 10,
                responsive: [ {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                } ]
            });
        }
    };
    var anotherHamburgerMenu = function anotherHamburgerMenu(menuElement, hamburgerElement, closeTrigger) {
        var Elements = {
            menu: $(menuElement),
            button: $(hamburgerElement),
            close: $(closeTrigger)
        };
        Elements.button.add(Elements.close).on("click", function() {
            Elements.menu.toggleClass("is-active");
        });
        Elements.menu.find("a").on("click", function() {
            Elements.menu.removeClass("is-active");
        });
        var arrowOpener = function arrowOpener(parent) {
            var activeArrowClass = "menu-item-has-children-arrow-active";
            return $("<button />").addClass("menu-item-has-children-arrow").on("click", function() {
                parent.children(".sub-menu").eq(0).slideToggle(300);
                if ($(this).hasClass(activeArrowClass)) {
                    $(this).removeClass(activeArrowClass);
                } else {
                    $(this).addClass(activeArrowClass);
                }
            });
        };
        var items = Elements.menu.find(".menu-item-has-children, .sub-menu-item-has-children");
        for (var i = 0; i < items.length; i++) {
            items.eq(i).append(arrowOpener(items.eq(i)));
        }
    };
    var removeAllStyles = function removeAllStyles(elementParent) {
        elementParent.find(".sub-menu").removeAttr("style");
    };
    var wrapHighlightedElements = function wrapHighlightedElements(elements) {
        elements = $(elements);
        var i, highlightedHeader;
        for (i = 0; i < elements.length; i++) {
            highlightedHeader = elements.eq(i);
            highlightedHeader.wrap('<div style="display: block;"></div>');
        }
    };
    var buyOneClick = function buyOneClick(button, field, headline) {
        var btn = $(button);
        if (btn.length) {
            btn.on("click", function() {
                $(field).prop("disabled", true).val($(headline).text());
            });
        }
    };
    var scrollTop = function scrollTop(element) {
        var el = $(element);
        el.on("click touchend", function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        var scrollPosition;
        $(window).on("scroll", function() {
            scrollPosition = $(this).scrollTop();
            if (scrollPosition > 200) {
                if (!el.hasClass("is-visible")) {
                    el.addClass("is-visible");
                }
            } else {
                el.removeClass("is-visible");
            }
        });
    };
    var addLink = function addLink() {
        var body = document.body || document.getElementsByTagName("body")[0];
        var selection = window.getSelection();
        var page_link = "\n Источник: " + document.location.href;
        var copy_text = selection + page_link;
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = "-9999px";
        body.appendChild(div);
        div.innerText = copy_text;
        selection.selectAllChildren(div);
        window.setTimeout(function() {
            body.removeChild(div);
        }, 0);
    };
    var scrollToElement = function scrollToElement() {
        var animationSpeed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;
        var links = $("a");
        links.each(function(index, element) {
            var $element = $(element), href = $element.attr("href");
            if (href) {
                if (href[0] === "#" || href.slice(0, 2) === "/#" && !(href.slice(1, 3) === "__")) {
                    $element.on("click", function(e) {
                        e.preventDefault();
                        var target = $(href[0] === "#" ? href : href.slice(1));
                        if (target.length) {
                            $("html, body").animate({
                                scrollTop: target.offset().top
                            }, animationSpeed);
                        } else if (href[0] === "/") {
                            location.href = href;
                        }
                    });
                }
            }
        });
    };
    var sidebarAccordion = function sidebarAccordion() {
        var sidebarMenu = $(".sidebar .widget_nav_menu");
        var items = sidebarMenu.find("li");
        var subMenu = items.find(".sub-menu");
        if (subMenu.length) {
            subMenu.each(function(index, value) {
                $(value).parent().first().append('<i class="trigger"></i>');
            });
        }
        var classAction = "is-opened";
        var trigger = items.find(".trigger");
        trigger.on("click", function() {
            var el = $(this), parent = el.parent();
            if (parent.hasClass(classAction)) {
                parent.removeClass(classAction);
            } else {
                parent.addClass(classAction);
            }
        });
    };
    var ajaxLoadMorePosts = function ajaxLoadMorePosts(selector, container) {
        var btn = $(selector);
        var storage = $(container);
        if (!btn.length && !storage.length) return;
        var data, ajaxStart;
        data = {
            action: ajax.action,
            nonce: ajax.nonce,
            paged: 1
        };
        btn.on("click", function() {
            if (ajaxStart) return;
            ajaxStart = true;
            btn.addClass("is-loading");
            $.ajax({
                url: ajax.url,
                method: "POST",
                dataType: "json",
                data: data
            }).done(function(response) {
                var posts = response.data;
                storage.append(response.data);
                data.paged += 1;
                ajaxStart = false;
                btn.removeClass("is-loading");
                if (posts === "") {
                    btn.remove();
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                ajaxStart = false;
                throw new Error("Handling Ajax request loading posts has caused an ".concat(textStatus, " - ").concat(errorThrown));
            });
        });
    };
    $(".js-hamburger").on("click", function() {
        $("body").addClass("body-overflow");
    });
    $(".js-menu-close, .menu-link").on("click", function() {
        $("body").removeClass("body-overflow");
    });
    $(".js-footer-toggle").on("click", function() {
        $(this).toggleClass("active");
        $(this).siblings().toggleClass("active");
    });
    (function() {
        $(".js-top-slider .menu-link").on("click", function(event) {
            event.preventDefault();
        });
        $(".js-top-slider").slick({
            slidesToShow: 6,
            arrows: false,
            autoplay: false,
            speed: 700,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            asNavFor: ".js-bottom-slider",
            responsive: [ {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            } ]
        });
        $("#gallery .js-bottom-slider").slick({
            infinite: true,
            speed: 700,
            dots: false,
            asNavFor: ".js-top-slider",
            arrows: true,
            nextArrow: '<div class="slick-next"><svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg></div>',
            prevArrow: '<div class="slick-prev"><svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg></div>',
            focusOnSelect: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "260px",
            responsive: [ {
                breakpoint: 1023,
                settings: {
                    centerPadding: "120px"
                }
            }, {
                breakpoint: 767,
                settings: {
                    centerPadding: "100px"
                }
            }, {
                breakpoint: 600,
                settings: {
                    centerMode: false,
                    centerPadding: "0"
                }
            } ]
        });
        $(".js-client-slider").slick({
            slidesToShow: 4,
            arrows: true,
            nextArrow: '<div class="slick-next"><svg class="slider-icon"><use xlink:href="#arrow-right"></use></svg></div>',
            prevArrow: '<div class="slick-prev"><svg class="slider-icon"><use xlink:href="#arrow-left"></use></svg></div>',
            autoplay: false,
            speed: 600,
            dots: false,
            infinite: true,
            focusOnSelect: true,
            responsive: [ {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1
                }
            } ]
        });
    })();
    var animateValue = function animateValue(selector, start, duration) {
        $(selector).each(function() {
            var countItem = $(this), endValue = parseInt(countItem.attr("data-value")), startValue = start, increment = 0, stepTime = Math.abs(duration / endValue);
            var timer = setInterval(function() {
                countItem.animate({
                    opacity: 1
                }, duration / 2);
                increment += 20;
                startValue = increment;
                countItem.text(startValue);
                if (startValue >= endValue) {
                    clearInterval(timer);
                    countItem.siblings().animate({
                        opacity: 1
                    }, duration / 2);
                }
            }, stepTime);
        });
    };
    (function() {
        var contentBlock = $("#car-content");
        if (contentBlock.length > 0) {
            var blockOffset = contentBlock.offset().top, blockPosition = $(window).height() - contentBlock.outerHeight() / 2, scrollPosition = $(window).scrollTop();
            blockPosition -= blockOffset;
            if (scrollPosition >= blockPosition * -1) {
                animateValue(".js-count", 0, 2e3);
            } else {
                $(window).on("scroll", function() {
                    if ($(window).scrollTop() >= blockPosition * -1) {
                        animateValue(".js-count", 0, 2e3);
                        $(window).off("scroll");
                    }
                });
            }
        }
    })();
})(window, document, jQuery, window.jpAjax);