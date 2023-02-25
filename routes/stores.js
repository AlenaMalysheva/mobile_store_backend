import { Router } from "express";
import { storesList } from "../data/storesList.js";

const router = Router();

router.get(
    '/',
    (req, resp, next) => {
        console.log('before getting storeList')
        next() // для создания нескольких мидлвеар
    },
     (req, resp) => {
    console.log('getting storeList')
    const { distance} = req.query;
    const parsedDistance = parseInt(distance)
    if(!isNaN(parsedDistance)){
        const filteredStoresList = storesList.filter(el => el.distance >= parsedDistance);
        resp.send(filteredStoresList)
    } else {
        resp.send(storesList)
    }
})

router.get('/:id', (req,resp) => {
    const { id } = req.params;
    const storeItem = storesList.find(storeItem => storeItem.id === +id);
    resp.send(storeItem);
});


router.post('/', (req, resp) => {
    storesList.push(req.body)
    resp.send(201)
})


export default router;