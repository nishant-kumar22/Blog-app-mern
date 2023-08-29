import express from "express";
import { Router } from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get('/', async (req,res) =>{
    let collection = await db.collection("records")
    let result = await collection.find({}).toArray()
    res.send(result).status(200)
})

router.post('/', async (req,res) =>{
    let newDoc = {
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    }
    let collection = await db.collection("records")
    let result = await collection.insertOne(newDoc)
    res.send(result).status(200);
})

router.delete('/:id', async (req,res) =>{
    const query = {_id: new ObjectId(req.params.id)}
    let collection = await db.collection("records")
    let result = await collection.deleteOne(query)
    res.send(result).status(200)
})

export default router;
