import express from "express"
import type {Response, Request, NextFunction} from "express"
import onboard from "../model/model.js"
import mongoose, { mongo } from "mongoose"

export const On_boarding = async (req: Request, res: Response): Promise<void> => {
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