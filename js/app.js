$(document).ready(function () {
    $(".details").hide();
    var apikey = "6f4aeb826dd65c7e1f151c1f64fa8992";
    $("#city").on('change', function () {
        var id = $("#city").val();
        $(".details").hide('100');
        $.ajax({
            type: "get",
            url: "https://api.openweathermap.org/data/2.5/weather?id=" + id + "&appid=" + apikey,
            success: function (data) {
                $("#wicon").attr('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
                $("#temp").html(Math.floor(Math.floor(data.main.temp) - 273.15) + "&deg; C" + "<sub>("+data.weather[0].main+")</sub>");
                $("#name").html(data.name);
                $("#name").html(data.name);
                $("#high").html(Math.floor(Math.floor(data.main.temp_max) - 273.15));
                $("#low").html(Math.floor(Math.floor(data.main.temp_min) - 273.15));
                $("#wind").html("Wind: <strong>"+data.wind.speed+ "KM </strong>/<strong>"+data.wind.deg+"&deg;deg  </strong>");

                const unixTimestamp_sunrise = data.sys.sunrise;
                const milliseconds_sunrise = unixTimestamp_sunrise * 1000 
                const dateObject_sunrise = new Date(milliseconds_sunrise)
                const humanDateFormat_sunrise = dateObject_sunrise.toLocaleString()
                $("#sunrise").html("Sunrise: <strong>"+dateObject_sunrise.toLocaleString("en-US", { hour: "numeric",minute: "numeric" })+"</strong>");

                const unixTimestamp_sunset = data.sys.sunset;
                const milliseconds_sunset = unixTimestamp_sunset * 1000 
                const dateObject_sunset = new Date(milliseconds_sunset)
                const humanDateFormat_sunset = dateObject_sunset.toLocaleString()
                $("#sunset").html("Sunset: <strong>"+dateObject_sunset.toLocaleString("en-US", { hour: "numeric",minute: "numeric" })+"</strong>");

                
                 $(".details").show('100');
            }
        });
    });
});