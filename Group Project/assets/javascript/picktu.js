$(document).ready(function() {

var teamOne = "";
var teamTwo = "";
var teams = ["Arizona Cardinals", "Baltimore Ravens", "Carolina Panthers", "Cincinnati Bengals", "Dallas Cowboys", "Detroit Lions", "Houston Texans", "Jacksonville Jaguars", "Miami Dolphins", "New England Patriots", "New York Giants", "Oakland Raiders", "Pittsburgh Steelers", "San Francisco 49ers", "St Louis Rams", "Tennessee Titans", "Atlanta Falcons", "Buffalo Bills", "Chicago Bears", "Cleveland Browns", "Denver Broncos", "Green Bay Packers", "Indianapolis Colts", "Kansas City Chiefs", "Minnesota Vikings", "New Orleans Saints", "New York Jets", "Philadelphia Eagles", "San Diego Chargers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Washington Redskins"];


$("#btn1").on("click", function() {

event.preventDefault();

if ("#teamName" != teams) {
	alert('Not a Valid Selection');
} else{
	alert('Check Projected Score');
}

var search1 = 0;
var search2 = 0;

do {
search1 = Math.floor(Math.random() * 42) + 2;
} while (search1 === search2);

do {
search2 = Math.floor(Math.random() * 42) + 2;
} while (search2 === search1);

console.log(search1);
console.log(search2);

$("#result").html(search1).append("<br><hr>" + search2)

})

});