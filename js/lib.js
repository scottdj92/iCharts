"use strict";


$(document).ready(function(){
	doStuff();
});


function doStuff()
{
	$('.calcAdd').click(function(){
		$(this).val('Added!');
	});
}