$(document).ready(function() {

    alert('The page has successfully loaded. The page is ready for processing.');

    var teamsArray = ["Arizona Cardinals", "Baltimore Ravens", "Carolina Panthers", "Cincinnati Bengals", "Dallas Cowboys", "Detroit Lions", "Houston Texans", "Jacksonville Jaguars", "Miami Dolphins", "New England Patriots", "New York Giants", "Oakland Raiders", "Pittsburgh Steelers", "San Francisco 49ers", "St Louis Rams", "Tennessee Titans", "Atlanta Falcons", "Buffalo Bills", "Chicago Bears", "Cleveland Browns", "Denver Broncos", "Green Bay Packers", "Indianapolis Colts", "Kansas City Chiefs", "Minnesota Vikings", "New Orleans Saints", "New York Jets", "Philadelphia Eagles", "San Diego Chargers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Washington Redskins"];


    function searchOpenWeatherMap(city) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a76a5d02e8ccf94ea0744bc153ba9845";
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {

            console.log(response);


            var cityName = $("#weather").text(response.name);
            var tempMain = $("<p>").text(response.main.temp);




            $("#weather").empty();
            $("#weather").text(response.name).append("  Current Temperature").append(tempMain);

        })
    }
    $("#btn1").on("click", function() {

        var teamOne = $('#teamName1').val();
        var teamTwo = $('#teamName2').val();

        var isTeam1Found = false;
        var isTeam2Found = false;

        for (var i in teamsArray) {
            if (teamOne == teamsArray[i]) {
                isTeam1Found = true;
            }

            if (teamTwo == teamsArray[i]) {
                isTeam2Found = true;
            }

        }

        if (isTeam1Found == false || isTeam2Found == false) {
            console.log('inside if condition');

            if (isTeam1Found == false) {
                alert('Team 1: ' + teamOne + ' is invalid.');
            }
            if (isTeam2Found == false) {
                alert('Team 2: ' + teamTwo + ' is invalid.');
            }

        }
        if (isTeam1Found == true || isTeam2Found == true) {
            console.log('inside else condition');
            alert('Check Projected Score');

            var search1 = 0;
            var search2 = 0;

            do {
                search1 = Math.floor(Math.random() * 42) + 2;
            } while (search1 === search2);


            do {
                search2 = Math.floor(Math.random() * 42) + 2;
            } while (search2 === search1);

            console.log('search oneeeeeeee', search1);
            console.log(search2);

            $("#result").html(search1).append("<br><hr>" + search2);

            var database = "http://api.giphy.com/v1/gifs/search?q=teams+" + teamOne + "&limit=1&api_key=gSxQRfvANurK8E9AZ6d5zPqB6inrcqZt";
            $.ajax({ url: database, method: 'GET' }).done(function(giphy) {

                gif = giphy.data[0];
                console.log('some dataaaaaaaaaaaaaa', gif);
                var imageSpace = $('<img>').attr('src', gif.images.original_still.url)
                $("#giphy-image").html(imageSpace);
            });
        }

        searchOpenWeatherMap(teamOne);
    })

});