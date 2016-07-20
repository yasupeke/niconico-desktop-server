import * as Express from 'express';

const router = Express.Router();

/* GET home page. */
router.get('/', (req: Express.Request, res: Express.Response, next: Function) => {
    res.render('index', { });
});

export default router;
