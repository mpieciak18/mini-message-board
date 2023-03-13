import e from 'express';
const router = e.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		date: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
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

export default router;
