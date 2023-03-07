import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Alia422:dream824016@cluster0.j5aji9e.mongodb.net/?retryWrites=true&w=majority&dbName=registartion')
    .then(() => console.log('connected to mongoDB')) // если подключение произошло, то вывести сообщение в терминал
    .catch(err => console.log(err))  // если произошла ошибка, то вывести в терминал ошибку