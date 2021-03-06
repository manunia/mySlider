/**
 * Created by Admin on 18.02.2019.
 */

$(document).ready(function () {

    var limit = 183 * 24 * 3600 * 1000; // полгода
    var localStorageInitTime = localStorage.getItem('localStorageInitTime');
    if (localStorageInitTime === null) {
        localStorage.setItem('localStorageInitTime', +new Date());
    } else if(+new Date() - localStorageInitTime > limit) {
        localStorage.clear();
        localStorage.setItem('localStorageInitTime', +new Date());
    }

    $('.hide').css("display", localStorage.getItem("hide"));
    $('#carusel-container').css("display", localStorage.getItem("carusel"));
    $('.description-bold').css("text-align", localStorage.getItem("description-head"));
    $('.description-head').css("text-align", localStorage.getItem("description-head"));


    $(".smallPic").each(function (index, element) {
        $(element).click(show);
        $(element).click(changePic);
    });

    function changePic(event) {
        var appDiv = $("#bigPicture"),
            eventElement = event.target,
            imageNameParts = eventElement.id.split('_'),
            src = 'images/big/img_'+imageNameParts[1]+'.jpg',
            oldElem = $('#1'),
            imageDomElement = $('<img/>').attr('src',src);

        $(oldElem).replaceWith(imageDomElement);
        imageDomElement.attr('id',1);

        //замена описания
        $('.description').each(function (index, element) {
            if ((index + 1) != imageNameParts[1]) {
                $(element).css("display","none");
            } else {
                $(element).css("display","block");
            }
        });
    }

    function hidePopup() {
        $('.hide').each(function (index, element) {
            if ($(element).css('display') !== 'none') {
                $(element).css("display","none");
                $('.description-bold').css("text-align", "center");
                $('.description-head').css("text-align", "center");
                $('#carusel-container').css("display","block");

                localStorage.setItem("description-head", "center");
                localStorage.setItem("hide", "none");
                localStorage.setItem("carusel", "block");
            }
        });
    }

    function show() {
        $('.hide').each(function (index, element) {
            if ($(element).css('display') !== 'block') {
                $(element).css("display","block");
                $('.description-bold').css("text-align", "left");
                $('.description-head').css("text-align", "left");
                $('#carusel-container').css("display","none");

                localStorage.setItem("description-head", "left");
                localStorage.setItem("hide", "block");
                localStorage.setItem("carusel", "none");
            }
        });
    }
    
    $('#x').click(hidePopup);
    $('#popup').click(show);
    
})