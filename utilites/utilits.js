import bcript from 'bcryptjs'

//функция хеширования пароля + salt(доп.защита)
 const hashPassword = password => {
    const salt = bcript.genSaltSync();   // минимум 4 , по умолчанию 10 символов
    return bcript.hashSync(password, salt);
    
}

const comparePassword = (password,hashPassword) => bcript.compareSync(password,hashPassword)
//возвращается true,false в зависимости совпали пароли или нет

export {hashPassword,comparePassword}