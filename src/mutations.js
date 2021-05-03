const { Users } = require('./users.js');
const USERS = new Users();

const Mutation = {
    createUser: async (_, { input }) => {
        const user = await USERS.findUser(input.email);
        if(!user){
            return USERS.createUser(input);
        }
        else{
            return "Error. User already exists."
        }
    },

    changeUserVacation: async (_, { email }) => {
        const user = await USERS.findUser(email);
        if(user){
            const currentVacation = user.vacation;
            const id = user.id;
            return USERS.changeUserVacation(id, !currentVacation)
        }
    }
}

module.exports = {Mutation}