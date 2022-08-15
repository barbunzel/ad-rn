const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// add a comment

app.use(cors('*'));

app.get('/api/topics', (req, res) => {
	// get topics from DB

	res.send({
		data: [
			{ id: 1, title: 'title 1', content: 'content 1' },
			{ id: 2, title: 'title 2', content: 'content 2' },
			{ id: 3, title: 'title 3', content: 'content 3' },
			{ id: 4, title: 'title 4', content: 'content 4' },
		],
		total: 300,
		page: 1,
		limit: 10,
	});
});

app.get('/api/topics/:id', (req, res) => {
	// get specific topic from DB
	const id = req.params.id;

	res.send({
		data: {
			title: `title ${id}`,
			content: `content ${id}`,
		},
	});
});

app.get('/api/topics/:id/articles', (req, res) => {
	// get articles for specific topic from DB
	res.send({
		data: [
			{ id: 1, title: 'title 1', content: 'content 1' },
			{ id: 2, title: 'title 2', content: 'content 2' },
			{ id: 3, title: 'title 3', content: 'content 3' },
			{ id: 4, title: 'title 4', content: 'content 4' },
		],
		total: 300,
		page: 1,
		limit: 10,
	});
});

app.get('/api/topics/:topicId/articles/:articleId', (req, res) => {
	const { topicId, articleId } = req.params;

	res.send({
		data: {
			id: articleId,
			topicId: topicId,
			title: `title ${articleId}`,
			content: `content ${topicId}`,
		},
	});
});


// app.use('/api/', apiRoutes);

app.use(express.static(path.resolve('../frontend/build/')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve('../frontend/build/index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



// /topics
// /topics/2/articles - list of articles
// /topics/2/articles/1
