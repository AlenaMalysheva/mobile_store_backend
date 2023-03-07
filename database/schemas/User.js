// // схема показывает как будет выглядеть данные
import mongoose from "mongoose";

const UserSchemas = new mongoose.Schema({ // конструктор монгус,с его помощью  создаем экзепляр класса
    email : {
        type: String,
        required: true, // обязательное для заполения
        unique: true  // должно быть уникальным
    },
    password: {
        type: String,
        required: true
    },
    createAt : { // время создания
        type: Date,
        default: new Date()
    }
})  
 
// // module.exports = mongoose.model('users',UserSchemas)

// конвертировать схему в модель
const User =  mongoose.model('users', UserSchemas) // 'users' имя схемы(колекции) которая будет создаватся и далее сама схема UserSchemas
export default User;