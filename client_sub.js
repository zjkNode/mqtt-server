var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://127.0.0.1:8800');
client.subscribe('test',{qos:1});
client.on('message', function(topic, message){
	console.log(message.toString());
});