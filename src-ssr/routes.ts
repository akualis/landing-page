"use strict";

console.log(process.env.NODE_ENV);

const bodyParser = require('body-parser');

import express, { Request, Response } from 'express';

const {
    SitemapStream,
    streamToPromise
} = require('sitemap');
const {
    createGzip
} = require('zlib');
const app = express();

export default function attachRoutes(app: express.Application) {

    // Redirect www subdomain to the non-www subdomain
    app.use((req: Request, res: Response, next) => {
        if (req.get('host').startsWith('www.')) {
            const nonWwwUrl = 'https://' + req.get('host').slice(4) + req.originalUrl;
            res.redirect(301, nonWwwUrl);
        } else {
            next();
        }
    });

    // Body Parser Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    let sitemap; // For caching purpose
    app.get('/sitemap.xml', async function (req: Request, res: Response) {
        res.header('Content-Type', 'application/xml');
        res.header('Content-Encoding', 'gzip');
        // if we have a cached entry send it
        if (sitemap) {
            res.send(sitemap);
            return;
        }
        try {
            const smStream = new SitemapStream({
                hostname: 'https://else-app.com/'
            });
            const pipeline = smStream.pipe(createGzip());
            smStream.write({
                url: '/',
                lastmod: new Date(),
                changefreq: 'monthly',
                priority: 0.5
            });

            // cache the response
            streamToPromise(pipeline).then(sm => sitemap = sm);
            // make sure to attach a write stream such as streamToPromise before ending
            smStream.end();
            // stream write the response
            pipeline.pipe(res).on('error', e => {
                throw e;
            });
        } catch (e) {
            // Catch errors
            console.log(e);
        }
    });

}
