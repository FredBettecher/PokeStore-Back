import { ObjectId } from "mongodb";
import { saleoff } from "../database/db.js";

export default async function product(req, res) {
    const { name } = req.body;
    console.log(name);

    try {
        await saleoff.findOne({ name: name }).toArray().then(productList => {
            return res.status(201).send(productList);
        });
    
        } catch(err) {
            return res.status(500).send(err);
        }
}