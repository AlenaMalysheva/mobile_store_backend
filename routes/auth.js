import { Router } from "express";
import User from '../database/schemas/User.js'
import { hashPassword ,comparePassword } from '../utilites/utilits.js'


const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
    if(!email || !password) return res.send(400) // если не введен пароль и емеил,то вывести ошибку
    
    const userDB = await User.findOne({ email }); // дождемся выполнения асинхронного запроса и если пользователь есть в базе,то запишется в переменную userDB
    if(!userDB) return res.send(401) // пользователь не существует в базе
  
    const isValid = comparePassword(password, userDB.password) // сверка пароля
    isValid ? res.send("you are logined") : res.send("wrong email or password")  //если совпали,то успех,иначе ошибка неавторизован
  });

router.post('/register', async (req, res) => {
  const { email } = req.body;
  const userDB = await User.findOne({ email });
  if(userDB) {
    // Юзер с таким мэйлом уже существует
    res.status(400).send({ message: 'User already exists' })
  } else {
    // Создать юзера
    const password = hashPassword(req.body.password);
    const newUser = await User.create({ email, password });
    res.status(201).send({ message: 'User created'});
  }
});

export default router;