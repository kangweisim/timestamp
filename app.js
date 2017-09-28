var express = require('express');
var app = express();

app.get('/:date', (req, res) => {
	var param = req.params.date;
	var date = new Date(param);
	if(date) {
		var natural = date.toDateString();
		var regExp = /^\w{3}\s(\w+)\s(\d+)\s(\d{4})$/
		var data = {
			unix: date.getTime() / 1000 + date.getTimezoneOffset() * 60,
			natural: natural.replace(regExp, "$1 $2 $3")
		}
		res.end(JSON.stringify(data));
	}
});

app.listen(3000);