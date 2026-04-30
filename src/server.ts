import express from "express"
import mongoose, { mongo } from "mongoose"
import { type Request, type Response, type NextFunction, Router } from "express"
import { Aploud_onboarding, On_boarding, secretApi, secretCrete } from "./routes/routes_server.js"
import dotenv from "dotenv"

const app = express()
app.use(express.json())
const route: Router = express.Router()
const log = console.log
dotenv.config()

const PASSWORD_DB = process.env.PASSWORD

const databaseConnection = async (): Promise<void> => {
    try {
    await   mongoose.connect(`mongodb+srv://${PASSWORD_DB}:${PASSWORD_DB}@cluster0.kvl3gwe.mongodb.net/onboard`)
    log("succses connection")
}catch (error) {
    if(error instanceof Error) {
        log(error.message)
    }
}
}

databaseConnection() 

app.get("/api/onboarding", async (req: Request, res: Response,): Promise<void> => On_boarding(req, res))
app.post("/api/onboarding/api", async (req: Request, res: Response): Promise<void> => Aploud_onboarding(req, res))
app.get("/api/secret/api", async (req: Request, res: Response): Promise<void> => secretApi(req, res))
app.post("/api/secret/api", async (req: Request, res: Response): Promise<void> => secretCrete(req, res))


app.listen(3000, () => log("listen app on port 3000"))