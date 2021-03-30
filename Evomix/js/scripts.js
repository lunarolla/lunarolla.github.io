jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() >= 50) {
            jQuery('#return-to-top').fadeIn(200);
        } else {
            jQuery('#return-to-top').fadeOut(200);
        }
    });
    jQuery('#return-to-top').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});

jQuery(document).ready(function () {
    jQuery(".input-phone").mask("+7 (999) 99-99-999");

    jQuery('.region').on('keypress', function () {
        let that = this;
        setTimeout(function () {
            let res = /[^а-яА-Я\-,. ]/g.exec(that.value);
            that.value = that.value.replace(res, '');
        }, 0);
    });

    jQuery('#main-menu > li').addClass('nav-item');

    jQuery('#main-menu > li >').addClass('nav-link');

    jQuery('.navbar-brand img').removeAttr('width').removeAttr('height');
    jQuery('.footer-logo img').removeAttr('width').removeAttr('height');

    jQuery('.wpcf7-form').submit(function () {
        ym(57125710, 'reachGoal', 'contactform');
        return true;
    });


    jQuery(".navbar-toggler").click(function (e) {

        let navbar = jQuery("#navbar-home");
        if (navbar.hasClass("navbar-dark")) {
            setTimeout(function () {
                navbar.removeClass("navbar-dark");
            }, 300);
        } else {
            navbar.addClass("navbar-dark");
        }
    });


    let accordions = jQuery(".accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function () {
            this.classList.toggle('is-open');

            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }


    jQuery(".our-production-btn").click(function (event) {

        let firstText = "krupnyj-i-melkij-rogatyj-skot-text";
        let secondText = "svinovodstvo-text";
        let thirdText = "pticevodstvo-text";
        let fourthText = "rybovodstvo-text";
        let fifthText = "drugie-zhivotnye-text";

        let sections = [firstText, secondText, thirdText, fourthText, fifthText];

        let accordionID = '#' + event.target.id + '-text';
        let accordionSection = jQuery(accordionID);

        if (accordionSection.css('display') === 'none') {
            for (let i = 0; i < sections.length; i++) {
                let cur = jQuery('#' + sections[i]);
                if (sections[i].toString() === accordionSection.text()) {
                    cur.fadeIn();
                } else {
                    cur.css('display', 'none');
                }
            }
            accordionSection.fadeIn();
        } else {
            accordionSection.fadeOut();
        }
    });

});

jQuery(document).ready(function () {
    let educationText = jQuery("#education-text");
    let responsibilityText = jQuery("#responsibility-text");
    let sociabilityText = jQuery("#sociability-text");

    let educationBtn = jQuery("#btn-education");
    let responsibilityBtn = jQuery("#btn-responsibility");
    let sociabilityBtn = jQuery("#btn-sociability");

    educationBtn.click(function (e) {
        if (educationText.css('display') === 'none') {
            educationBtn.addClass('btn-group-active');
            educationBtn.removeClass('green-button');

            responsibilityBtn.removeClass('btn-group-active');
            responsibilityBtn.addClass('green-button');
            sociabilityBtn.removeClass('btn-group-active');
            sociabilityBtn.addClass('green-button');

            educationText.fadeIn();
            responsibilityText.css('display', 'none');
            sociabilityText.css('display', 'none');
        } else {
            educationText.fadeOut();
            educationBtn.addClass('green-button');
            educationBtn.removeClass('btn-group-active');
        }
    });

    responsibilityBtn.click(function (e) {
        if (responsibilityText.css('display') === 'none') {
            responsibilityBtn.addClass('btn-group-active');
            responsibilityBtn.removeClass('green-button');

            sociabilityBtn.removeClass('btn-group-active');
            sociabilityBtn.addClass('green-button');
            educationBtn.removeClass('btn-group-active');
            educationBtn.addClass('green-button');

            responsibilityText.fadeIn();
            educationText.css('display', 'none');
            sociabilityText.css('display', 'none');
        } else {
            responsibilityText.fadeOut();
            responsibilityBtn.addClass('green-button');
            responsibilityBtn.removeClass('btn-group-active');
        }
    });

    sociabilityBtn.click(function (e) {
        if (sociabilityText.css('display') === 'none') {
            sociabilityBtn.addClass('btn-group-active');
            sociabilityBtn.removeClass('green-button');

            responsibilityBtn.removeClass('btn-group-active');
            responsibilityBtn.addClass('green-button');
            educationBtn.removeClass('btn-group-active');
            educationBtn.addClass('green-button');

            sociabilityText.fadeIn();
            educationText.css('display', 'none');
            responsibilityText.css('display', 'none');
        } else {
            sociabilityText.fadeOut();
            sociabilityBtn.addClass('green-button');
            sociabilityBtn.removeClass('btn-group-active');
        }
    });
});

jQuery(document).ready(function () {
    let buttons = jQuery('.responsibility-member-buttons');
    let alterClass = function () {
        let clientWidth = document.body.clientWidth;
        if (clientWidth < 767) {
            buttons.removeClass('container');
            buttons.addClass('mr-3');
            buttons.addClass('ml-3');
        } else if (clientWidth >= 767) {
            buttons.addClass('container');
            buttons.removeClass('mr-3');
            buttons.removeClass('ml-3');
        }

        if (clientWidth < 612) {
            jQuery("#btn-group").addClass('btn-group-vertical');
        } else if (clientWidth >= 612) {
            jQuery("#btn-group").removeClass('btn-group-vertical');
        }
    };
    jQuery(window).resize(function () {
        alterClass();
    });
    alterClass();
});

jQuery(function () {
    jQuery(' a[href="#our-achievements"]').on('click', function (e) {
        e.preventDefault();
        jQuery('html, body').animate({scrollTop: jQuery(jQuery(this).attr('href')).offset().top}, 500, 'linear');
    });
});

jQuery(document).ready(function () {
    let element = jQuery("#our-production");
    if (element.length > 0) {
        jQuery(window).scroll(scrollToSection);
        let viewed = false;

        function isScrolledIntoView(elem) {
            let docViewTop = jQuery(window).scrollTop();
            let docViewBottom = docViewTop + jQuery(window).height();

            let elemTop = jQuery(elem).offset().top;
            let elemBottom = elemTop + jQuery(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function scrollToSection() {
            if (isScrolledIntoView(element) && !viewed) {
                viewed = true;
                jQuery('.value').each(function () {
                    jQuery(this).prop('Counter', 0).animate({
                        Counter: jQuery(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            jQuery(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        }
    }
});

jQuery(function () {
    jQuery("#farm-task-select").change(function () {
        let val = jQuery(this).val();
        if (val === "Другое") {
            jQuery("#farm-task-textarea").show();
        } else {
            jQuery("#farm-task-textarea").hide();
        }
    });
});


jQuery(document).ready(function () {
    jQuery("#premix-first-window-next").click(function (event) {
        event.preventDefault();
        if (jQuery("#order-premix-second-window").css('display') === 'none') {
            jQuery("#order-premix-second-window").fadeIn();
            jQuery("#order-premix-first-window").hide();
        }
    });

    jQuery("#premix-first-window-back").click(function (event) {
        event.preventDefault();
        if (jQuery("#order-premix-first-window").css('display') === 'none') {
            jQuery("#order-premix-first-window").fadeIn();
            jQuery("#order-premix-second-window").hide();
        }
    });
});


// jQuery(document).ready(function () {
//     let section = jQuery("#consultation-of-technologist");
//     if (section.length > 0) {
//         let offset = section.offset();
//         let offsetTop = offset.top;
//         let offsetBottom = offsetTop + section.outerHeight();
//         let counter = 0;
//
//         jQuery(window).scroll(function () {
//             if (jQuery(window).scrollTop() > offsetTop) {
//                 if (jQuery(window).scrollTop() < offsetBottom) {
//                     counter++;
//                     if (counter === 1) {
//                         jQuery('#order-premix').modal('show');
//                     }
//                 }
//
//             }
//         });
//     }
// });

ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [55.75399400, 37.62209300],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 4,
        behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
    });

    // myMap.behaviors.disable([
    //     'drag',
    //     'scrollZoom',
    // ]);

    let firstPlacemark = new ymaps.Placemark([59.213735, 39.852069], {
        balloonContentHeader: 'ООО «Агроакадемия — СЗ»',
        balloonContentBody: 'Телефон: 8 (921) 713-30-72 <br> Email: orion-market35@mail.ru',
        balloonContentFooter: 'Вологодская обл. Вологда г. Ленинградская ул. дом 76а',
        hintContent: 'ООО «Агроакадемия — СЗ»'
    });

    let secondPlacemark = new ymaps.Placemark([59.869065, 30.368563], {
        balloonContentHeader: 'ООО «Соломон»',
        balloonContentBody: 'Телефон: 8 (812)748-10-20 <br> Email: ooosolomon2016@mail.ru',
        balloonContentFooter: '192242. Санкт-Петербург г. Будапештская ул. дом 11. литер А. помещение 10Н, офис 3/1',
        hintContent: 'ООО «Соломон»'
    });

    let thirdPlacemark = new ymaps.Placemark([45.122195, 38.987099], {
        balloonContentHeader: 'ООО «Агороакадемия — Юг»',
        balloonContentBody: 'Телефон: 8 (918) 577-62-07 <br> Email: igolnikov@agroakademia.ru',
        balloonContentFooter: '350900. Краснодарский край. г. Краснодар, им Скобелева М.Д. ул, дом № 1. оф. 15',
        hintContent: 'ООО «Агороакадемия — Юг»'
    });

    let fourthPlacemark = new ymaps.Placemark([54.747117, 20.562922], {
        balloonContentHeader: 'ООО «АГРОКОРМ- БАЛТИЯ»',
        balloonContentBody: 'Телефон: 8 (909) 786-26-30 <br> Email: ksenia_13.09@mail.ru',
        balloonContentFooter: 'г. Калининград, ул.Орудийная, д. 105, офис 206. склад 1.4.',
        hintContent: 'ООО «АГРОКОРМ- БАЛТИЯ»'
    });

    let fifthPlacemark = new ymaps.Placemark([45.719401, 34.398010], {
        balloonContentHeader: 'ООО «Агроакадемия — Крым»',
        balloonContentBody: 'Телефон: 8 (978) 737-42-00 <br> Email: mara2503 84@mail.ru',
        balloonContentFooter: '296100. Республика Крым. Джанкой г, Свердлова ул, дом № 50',
        hintContent: 'ООО «Агроакадемия — Крым»'
    });

    let sixthPlacemark = new ymaps.Placemark([56.984034, 60.551041], {
        balloonContentHeader: 'ООО «Агрорешение»',
        balloonContentBody: 'Телефон: 8 (982) 735-47-50 <br> Email: agrotech2011@mail.ru',
        balloonContentFooter: 'Свердловская область, г. Верхняя Пышма. Машиностроителей, дом 6Б. квартира 120',
        hintContent: 'ООО «Агрорешение»'
    });

    let seventhPlacemark = new ymaps.Placemark([55.515691, 35.910432], {
        balloonContentHeader: 'ООО «ППМ-БИВ»',
        balloonContentBody: 'Телефон: 8 (900) 602-55-04 <br> Email: ppm-biv.buh@yandex.ru',
        balloonContentFooter: '143200, Московская обл. Можайский р-н. Бородинское поле п. Багратиона ул. дом № 5/2',
        hintContent: 'ООО «ППМ-БИВ»'
    });

    let eighthPlacemark = new ymaps.Placemark([50.403874, 36.912395], {
        balloonContentHeader: 'ООО «АГРОАКАДЕМИЯ»',
        balloonContentBody: 'Телефон: (47248) 5-46-56; (47248) 5-46-54 <br> Email: info@evomix.ru',
        balloonContentFooter: '309290,Белгородская область, г.Шебекино, ул. А. Матросова д.2А',
        hintContent: 'ООО «АГРОАКАДЕМИЯ»'
    });

    myMap.geoObjects.add(firstPlacemark);
    myMap.geoObjects.add(secondPlacemark);
    myMap.geoObjects.add(thirdPlacemark);
    myMap.geoObjects.add(fourthPlacemark);
    myMap.geoObjects.add(fifthPlacemark);
    myMap.geoObjects.add(sixthPlacemark);
    myMap.geoObjects.add(seventhPlacemark);
    myMap.geoObjects.add(eighthPlacemark);
}