var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://127.0.0.1:8800');

var qtt = {
	aa:'aaaaaa',
	bb:'地方',
	num: 0
};

setInterval(function(){
	qtt.num++;
	client.publish('test', JSON.stringify(qtt), {qos:1, retain: true});
}, 1000*2);