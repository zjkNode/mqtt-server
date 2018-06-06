var mosca = require('mosca');
var mqttServer = new mosca.Server({
	port:8800
});

mqttServer.on('clientConnected', function(client){
	console.log('client connected', client.id);
});

// 监听MQTT主题消息
mqttServer.on('published', function(packet, client){
	var topic = packet.topic;
	switch(topic){
		case 'test':
			console.log('message publish', packet.payload.toString());
			// MQTT转发主题消息
			// mqttServer.publish({topic:'other', payload: 'sssssss'});
			break;
		case 'other':
			console.log('message-123', packet.payload.toString());
			break;
	}
});

mqttServer.on('ready', function(){
	console.log('mqtt is running...');
});