"use strict";

console.log(process.env.NODE_ENV);

const bodyParser = require('body-parser');
import axios from 'axios';

import express, { Request, Response } from 'express';

const {
    SitemapStream,
    streamToPromise
} = require('sitemap');
const {
    createGzip
} = require('zlib');
let quasarMiddleware;
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

    /**
     * POST /api/lead
     * Create a new lead
     * @return {Object} API Response
     * */
    app.post('/api/lead', async (req: Request, res: Response) => {
        // Assuming that the request body has an 'email' property
        const email = req.body.email;
        if (email) {
            // regex for email validation
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(email)) {
                try {
                    // Replace with your settings
                    const appScriptUrl = 'https://script.google.com/macros/s/AKfycbya9mJ48nmVrhsRf3O_kYFoOttDPnqJsoXoqfhbKXgC7XyISrkeBnz8_mq9f6hIrnxB6Q/exec';
                    const apiKey = 'AKUALIS4EVER_hRO0TboKrXUeUbNhlPIj';

                    const response = await axios.post(appScriptUrl, {
                        email: email,
                        apiKey: apiKey  // Send API key with the request
                    });

                    console.log(response.data);

                    if (response.data.status === 'error') {
                        return res.status(400).json({
                            error: response.data.message
                        });
                    } else {
                        return res.status(200).json(response.data);
                    }
                } catch (error) {
                    console.error('Error posting to App Script:', error);

                    return res.status(500).json({
                        error: "Error occurred while storing the email"
                    });
                }
            } else {
                return res.status(400).json({
                    error: "Email invalid"
                });
            }
        } else {
            return res.status(400).json({
                error: "Email is missing from request body"
            });
        }
    });

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
                hostname: 'https://akualis.com/'
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
