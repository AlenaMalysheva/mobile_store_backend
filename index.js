// const express = require('express')  - обычный вариант импорта

import express from 'express' // модульный вариант импорта ("type": "module")
import mobilesRouter from './routes/mobiles.js'
import storesRouter from './routes/stores.js'
import cartRouter from './routes/cart.js'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser';
import session from 'express-session';

import './database/index.js' // подкючить файл database

const app = express(); // экземпляр приложения

const PORT = '3333';

app.use(express.json()) // регистрация мидлвеар
app.use(express.urlencoded())
app.use(cookieParser())
app.use(session({
    secret: 'DFTGH',      // шифрование куки
    resave: false,
    saveUninitialized: false
}))

app.use('/stores', storesRouter)  // если прописать здесь '/stores' , то в роутах можно указывать только '/' вместо всего пути
app.use('/mobiles', mobilesRouter) //регистрация роута (mobileRouter - произвольное название)
app.use('/cart', cartRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => console.log(`started on the ${PORT} port...`));





