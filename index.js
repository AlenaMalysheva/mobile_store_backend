// const express = require('express')  - обычный вариант импорта

import express from 'express' // модульный вариант импорта ("type": "module")
import mobilesRouter from './routes/mobiles.js'
import storesRouter from './routes/stores.js'

const app = express(); // экземпляр приложения

const PORT = '7777';

app.use(express.json()) // регистрация мидлвеар
app.use(express.urlencoded())

app.use('/stores',storesRouter)  // если прописать здесь '/stores' , то в роутах можно указывать только '/' вместо всего пути
app.use('/mobiles', mobilesRouter) //регистрация роута (mobileRouter - произвольное название)

app.listen(PORT, () => console.log(`started on the ${PORT} port...`));





