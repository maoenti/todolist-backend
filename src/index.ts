import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
const path = require('path')

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
            try{
                const result = await (new (route.controller as any))[route.action](req, res, next)
                res.json(result)
            }
            catch(err){
                res.status(err.statusCode || 500).json({msg: err.message})
            }
        })
    })

    // setup express app here
    app.get('/index', (request, response) => {
        response.render('index', {
          subject: 'Homepage',
          name: 'our template',
          link: 'https://google.com'
        });
      });

    // start express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT)

    console.log(`Server is running on port ${PORT}...`)

}).catch(error => console.log(error))
