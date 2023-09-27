/*Ishmael Sutton*/
var intervalID = 0;
var change =100;

function Picturestart()
{
    /*line 8 is the variable i set equal to 0*/
var i = 0;
/*line 10 is the image id being linked through javascript from the id of the html file*/
var image = document.getElementById("sourceofimge");
/*line 12 is the interval being set of the function*/
intervalID = setInterval(function() 
{
    /*line 15 is style left or right of the image being set to the pixel amount to move left or right*/
 image.style.left= change+"px";
 document.getElementById("message").innerHTML = " X =" + image.style.left;
 /*lines 18 and 19 set the amount of spaces for the image to be moved when the start button is pressed*/
 change +=15;
},2000);
}
/* line 22 is the function for the stop button to stop the image from moving*/
function Picturestop()
{
    clearInterval(intervalID);
}