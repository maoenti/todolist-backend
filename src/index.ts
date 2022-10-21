import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
const path = require('path')

AppDataSource.initialize().then(async () => {

    const app = express()
    app.use(bodyParser.json())

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

    const PORT = process.env.PORT || 3000;
    app.listen(PORT)

    console.log(`Server is running on port ${PORT}...`)

}).catch(error => console.log(error))
