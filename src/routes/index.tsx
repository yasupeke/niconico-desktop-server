import * as Express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server'
import { renderStaticDocument } from '../util/renderer';
import Index from '../views/index';

const router = Express.Router();

/* GET home page. */
router.get('/', (req: Express.Request, res: Express.Response, next: Function) => {
    res.status(200).send(renderStaticDocument(<Index />));
});

export default router;
