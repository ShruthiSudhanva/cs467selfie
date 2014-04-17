

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
	var day = parseInt(ev.date.getUTCDate());
	if(day<10)
	{
		day = "0" + day.toString();
	}
	toDate = ev.date.getFullYear() + "-" + month + "-" + day;
	fromHour = (ev.date.getHours()+ev.date.getTimezoneOffset()/60)%24;
	//alert(fromHour);
});

$('#to')
.datetimepicker()
.on('changeDate', function(ev){
	var month = parseInt(ev.date.getUTCMonth())+1;
	if(month<10)
	{
		month = "0" + month.toString();
	}
	var day = parseInt(ev.date.getUTCDate());
	if(day<10)
	{
		day = "0" + day.toString();
	}
	fromDate = ev.date.getFullYear() + "-" + month + "-" + day;
	if(toDate!=fromDate)
		$("#alert").show();
	else
		$("#alert").hide();
	toHour = (ev.date.getHours()+ev.date.getTimezoneOffset()/60)%24;
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
	draw(username, fromDate, fromHour, toHour);
	});

$('.back').click(function(){
	drawInitial();
	drawCircles();
});