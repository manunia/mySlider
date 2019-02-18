/**
 * Created by Admin on 18.02.2019.
 */

$(document).ready(function () {
    $('.hide').css("display", localStorage.getItem("hide"));
    $('#carusel-container').css("display", localStorage.getItem("carusel"));


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
                $('.description-head').css("text-align", "center");
                $('#carusel-container').css("display","block");

                localStorage.setItem("hide", "none");
                localStorage.setItem("carusel", "block");
            }
        });

    }

    function show() {
        $('.hide').each(function (index, element) {
            if ($(element).css('display') !== 'block') {
                $(element).css("display","block");
                $('.description-head').css("text-align", "left");
                $('#carusel-container').css("display","none");

                localStorage.setItem("hide", "block");
                localStorage.setItem("carusel", "none");
            }
        });
    }


    $('#x').click(hidePopup);

    $('#popup').click(show);




})