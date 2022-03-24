//Took heavy inspiration from the redis demo
const express = require('express');
const app = express();
const redisClient = require('./redis-client');

app.get('/store/:key', async (req, res) => {
	const { key } = req.params;
	const value = req.query;
	await redisClient.setAsync(key, JSON.stringify(value));
	return res.send('success');
});

app.get('/:key', async (req, res) => {
	const { key } = req.params;
	const rawData = await redisClient.getAsync(key);
	return res.json(JSON.parse(rawData));
});

app.get('/', async (req, res) => {
	return res.send('hello world');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
});
