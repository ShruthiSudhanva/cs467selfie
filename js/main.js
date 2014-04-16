

var date = "2014-04-12";
var fromHour = "10"
var toHour = "16"
var username = "User1";

draw(username, date, fromHour, toHour);
$("#alert").hide();

$('#from')
.datetimepicker()
.on('changeDate', function(ev){
	var month = parseInt(ev.date.getUTCMonth())+1;
	if(month<10)
	{
		month = "0" + month.toString();
	}
	toDate = ev.date.getFullYear() + "-" + month + "-" + ev.date.getUTCDate();
	fromHour = ev.date.getHours()+ev.date.getTimezoneOffset()/60;
});

$('#to')
.datetimepicker()
.on('changeDate', function(ev){
	var month = parseInt(ev.date.getUTCMonth())+1;
	if(month<10)
	{
		month = "0" + month.toString();
	}
	fromDate = ev.date.getFullYear() + "-" + month + "-" + ev.date.getUTCDate();
	if(toDate!=fromDate)
		$("#alert").show();
	else
		$("#alert").hide();
	toHour = ev.date.getHours()+ev.date.getTimezoneOffset()/60;
});

var onclick=function(){
		var value = $(this).attr('id');
		$('.userSelected').text(value);
		username = value;
	};

	$('#User1').click(onclick);
	$('#User2').click(onclick);
	$('#User3').click(onclick);

$('.submit').click(function() {
	draw(username, date, fromHour, toHour);
	});

$('.back').click(function(){
	drawInitial();
	drawCircles();
});