"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Gabriel Hernandez
   Date:  2/28/19
   
   Filename: hg_report.js
	
*/

//information about the game displayed on the webpage
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr> </table> " + itemSummary;

// displaying the information
document.getElementsByTagName('article')[0].innerHTML = gameReport;
//calculate the average customer rating
var ratingSum = 0;
var ratingCount = ratings.length;

for (var i = 0; i < ratings.length ; i = ratings + ratingSum){
    var ratingsAvg = ratingSum[i] / ratingCount[i];
    var ratingReport = " <h1>Customer Reviews</h1> <h2>" + ratingsAvg + "out of 5 stars (" + ratingCount + " reviews)</h2>";
}

// displays first three customer review
for (var i = 0; i <= 2; i++) {
    ratingReport += "div class='review'> <h1>" + itemTitle[i] + "</h1> <table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    for(var j = 1; j <= 4; j++) {
        ratingReport += "<img src=”hg_star.png” />";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries + " </div>";
}

document.getElementsByTagName('aside')[0].innerHTML = ratingReport;