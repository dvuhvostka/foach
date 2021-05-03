const { Users } = require('./users.js');
const USERS = new Users();

const Query = {
    getAllUsers: async () => await USERS.getAllUsers(),
    findUser: async (_, { email }) => USERS.findUser(email)
}

module.exports = { Query }