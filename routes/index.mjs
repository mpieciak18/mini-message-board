import e from 'express';
const router = e.Router();

const messages = [
	{
		message: 'Hi there!',
		name: 'Amando',
		date: new Date(),
	},
	{
		message: 'Hello World!',
		name: 'Charles',
		date: new Date(),
	},
];

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { messages: messages });
});

router.get('/new', (req, res, next) => {
	res.render('form');
});

router.post('/new', (req, res, next) => {
	messages.unshift({
		message: req.body.message,
		name: req.body.name,
		date: new Date(),
	});
	res.redirect('/');
});

export default router;
