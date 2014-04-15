

var date = "2014-04-12";
var fromHour = "10"
var toHour = "16"
var username = "Shruthi Sudhanva";

draw(username, date, fromHour, toHour);


$('#from')
.datetimepicker()
.on('changeDate', function(ev){
	var month = parseInt(ev.date.getUTCMonth())+1;
	if(month<10)
	{
		month = "0" + month.toString();
	}
	date = ev.date.getFullYear() + "-" + month + "-" + ev.date.getUTCDate();
	fromHour = ev.date.getHours()+ev.date.getTimezoneOffset()/60;
});

$('#to')
.datetimepicker()
.on('changeDate', function(ev){
	//date = ev.date.getFullYear() + "-" + (parseInt(ev.date.getUTCMonth())+1).toString() + "-" + ev.date.getUTCDate();
	toHour = ev.date.getHours()+ev.date.getTimezoneOffset()/60;
});

$('.submit').click(function() {
	draw(username, date, fromHour, toHour);
	});