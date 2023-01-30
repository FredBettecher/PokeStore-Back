import { pokeballs, pokedexes, berries, stones, potions } from "../database/db.js";

export async function products(req, res) {
    const { collection } = req.query;

    try {
        if(collection === 'pokeballs') {
            await pokeballs.find({}).toArray().then(productList => {
                return res.status(201).send(productList);
        }).catch(err => console.log("Erro: ", err));
        } else if(collection === 'pokedexes') {
            await pokedexes.find({}).toArray().then(productList => {
                return res.status(201).send(productList);
        }).catch(err => console.log("Erro: ", err));
        } else if(collection === 'berries') {
            await berries.find({}).toArray().then(productList => {
                return res.status(201).send(productList);
        }).catch(err => console.log("Erro: ", err));
        } else if(collection === 'stones') {
            await stones.find({}).toArray().then(productList => {
                return res.status(201).send(productList);
        }).catch(err => console.log("Erro: ", err));
        } else if(collection === 'potions') {
            await potions.find({}).toArray().then(productList => {
                return res.status(201).send(productList);
        }).catch(err => console.log("Erro: ", err));
        }
        
    } catch(err) {
        return res.status(500).send(err);
    }
}