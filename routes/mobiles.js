import { Router } from "express";
import { mobilesList } from "../data/mobilesList.js";

const router = Router();

router.get('/',(req, resp) => {
    const { id } = req.query;
    const parsedId = parseInt(id) // преобразовать к числу,если число в начале строки
    if(!isNaN(parsedId)){ // если есть параметр и он не nan
        const filteredMobilesList = mobilesList.filter(el => el.id >= parsedId)
        resp.send(filteredMobilesList)
    } else {
        resp.send(mobilesList)
    }
})

router.get('/:id', (req, resp) => {
   const {id} = req.params;
   const mobileItem = mobilesList.find(mobileItem => mobileItem.id === +id)
    resp.send(mobileItem)
})


router.post('/', (req, resp) => {
    mobilesList.push(req.body)
    resp.send(201)
})

export default router;