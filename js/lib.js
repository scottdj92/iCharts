"use strict";


var $json = [];
var html = '';

	$(document).ready(function()
	{
		$.ajax({
			url: 'info.json',
			dataType: 'jsonp',
			crossDomain: true,
			contentType: 'application/json',
			jsonpCallback: 'jsonCallBack',
			success: function(json)
			{
				$json = json;
				//console.log($json);
				generateList($json);
			},
			error: function()
			{
				console.log('XHR failed');
			}
		});
	});
	//script for dynamically loading listviews that match
function generateList(data)
{
	var $ul;
		$('#autocomplete').on('listviewbeforefilter', function(e, data)
		{
			$ul = $(this);
			$input = $(data.input);
			var value = $input.val();
			var html = '';
			console.log($json);

			$ul.html("");
			if (value && value.length > 2) {
				$ul.html("<li><div class = 'ui-loader'><span class = 'ui-icon ui-icon-loading' href = '#sub-detail'></span></div></li>");
				$ul.listview('refresh');
				$.each($json, function(k, val)
				{
					html += "<li><a href = '#sub-detail'>" + $json[k].CPT + ': ' + $json[k].DESCRIPTION + "</a></li>";
					//console.log(k + ': ' + val);
				});
				$ul.html(html);
				//console.log($ul.html());
				$ul.listview('refresh');
				$ul.trigger('updatelayout');
			}
			//endif
		});
}