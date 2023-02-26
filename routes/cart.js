import { Router } from "express";

const router = Router();

router.get('/', (req,resp) => {
   const { cart } = req.session
    if(!cart){
        resp.send('you have no cart')
    } else{
        resp.send(cart)
    }
    // resp.send(200)
})

router.post('/item', (req, resp) => {
    const { id, mobile, color , quintity } = req.body; // деструктуризация из body пост запроса
    const cartItem = { id, mobile, color , quintity };
    const { cart } = req.session;
    if(cart) {
        req.session.cart.items.push(cartItem)
    } else {                         // произойдет один раз в случае,если корзины не существует
        req.session.cart = {
            items: [cartItem]
        }
    }
    resp.send(req.body)
})

export default router;