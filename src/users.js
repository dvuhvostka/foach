const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); 

// Класс для работы с юзерами
class Users {

    // Найти пользователя
    findUser = async (userEmail) => await prisma.user.findFirst({
        where: {email: userEmail}
    });

    // Создаем всех юзеров
    createUser = async (userInfo) => await prisma.user.create({ data: userInfo });

    // Получаем всех юзеров
    getAllUsers = async () => await prisma.user.findMany();

    // Смена статуса (в отпуске или нет)
    changeUserVacation = async (id, vacation) => await prisma.user.update({
        where: {
            id: id
        },
        data: {
            vacation: vacation
        }
    })
}

module.exports = { Users }