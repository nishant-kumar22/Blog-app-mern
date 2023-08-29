import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const connectionString = process.env.ATLAS_URI || ""

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect()
    console.log("Succesfully connected to database")
} catch (error) {
    console.log(error)
}

let db = conn.db("blogs")

export default db;