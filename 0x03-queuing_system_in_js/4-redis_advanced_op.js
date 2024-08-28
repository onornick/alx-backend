const redis = require('redis');
const client = redis.createClient();

const schools = {
    Portland: 50,
    Seattle: 80,
    'New York': 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2
};

for(const [key, value] of Object.entries(schools)){
	client.hset('HolbertonSchools', key, value);
}

client.hgetall('HolbertonSchools', (err, reply) => {
	console.log(JSON.stringify(reply, null, 2));
});
