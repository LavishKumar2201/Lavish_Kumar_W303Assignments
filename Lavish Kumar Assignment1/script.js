/*
	WEB 303 Assignment 1 - jQuery
	{Lavish Kumar}
*/
 

$(document).ready(function()
{
$("input").change(function() //changing the required fields(salary/percent)
{
 let salary= $("#yearly-salary").val();
 let percent= $("#percent").val();


 let result=((salary*percent)/100).toFixed(2); // to round of the numbers to remove extra decimals
 $("#amount").text("$"+result);

});
});

