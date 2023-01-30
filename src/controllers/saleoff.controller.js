import { saleoff } from "../database/db.js";

export async function saleOff(req, res) {
        try {
        await saleoff.find().toArray().then(saleOffList => {
            return res.status(201).send(saleOffList);
        });

    } catch(err) {
        return res.status(500).send("Algo de errado não está certo.");
    }
}