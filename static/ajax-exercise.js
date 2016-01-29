"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", function(results){
            var fortune = results;
            $("#fortune-text").html(fortune);
        });
    
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(results){
        var weather = results;
        $("#weather-info").html("The forecast is: " + weather["forecast"]);

    });

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    var formInputs = {
        "melon_type": $('#melon-type-field').val(),
        "qty": $('#qty-field').val()
    };

    $.post("/order-melons.json", formInputs, function(results) {
        $('#order-status').html(results.msg);
        if (results.code === "ERROR") {
            $('#order-code').addClass('order-error');
        } else {
            $('#order-code').removeClass('order-error');
        }
        $('#order-code-label').removeClass('appear');
        $('#order-code').html(results.code);
    });

}

$("#order-form").on('submit', orderMelons);


