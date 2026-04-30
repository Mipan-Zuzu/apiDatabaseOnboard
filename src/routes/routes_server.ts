import express from "express"
import type {Response, Request, NextFunction} from "express"
import onboard from "../model/model.js"
import mongoose, { mongo } from "mongoose"
import secret from "../model/model-secret.js"

export const On_boarding = async (req: Request, res: Response): Promise<void> => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; img-src 'self' https: data:;"
    )
    const findOnboard = await onboard.find()
    if(!findOnboard) {
        res.status(404).json({data: "data kosong", status: 404})
        return
    }
    res.send(findOnboard)
}

export const Aploud_onboarding = async (req: Request, res: Response): Promise<void> => {
    const {name, description, flor, img, location} = req.body
    console.log(req.body)
    const savedb = new onboard({name, description, flor, img, location})
    await savedb.save()
    res.status(201).json({savedb})
}

export const secretApi = async (req: Request, res: Response): Promise<void> => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; img-src 'self' https: data:;"
    )
    try {
        const get = await secret.find()
        if(!get) {
            res.status(404).json({
                data : "invalid data not found",
                status: 404
            })
            return
        }
        res.status(200).json(get)
        return
    }catch (error) {
        if(error instanceof Error) {
            res.status(500).json(error.message)
            return
        }
    }
}

export const secretCrete = async (req: Request, res: Response): Promise<void> => {
     try {
        const {name, description, flor, img, location, isSecret, isUnlocked } = req.body
        if(!req.body) {
            res.status(403).json({
                data : "invalid request header check your header request missing something",
                status: 403
            })
            return
        }
        const savadb = new secret({name, description, flor, img, location, isSecret, isUnlocked})

        if(!savadb) {
            res.status(404).json({
                data : "failed to save to database",
                status : 404
            })
            return
        }
        await savadb.save()

        res.status(200).json({
        data : "succsesfully added to database",
        fill : savadb
     })
     } catch (error) {
        if(error instanceof Error) {
            res.status(500).json(error.message)
            return
        }
     }
}