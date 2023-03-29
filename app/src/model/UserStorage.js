"use strict";

class UserStorage{
    static #users = {
        id : ["kkh1837","김기훈","도커"],
        password : ["1234","1234","123456"],
        cnt: ["1","2","3"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});

        return newUsers;
    }
}

module.exports = UserStorage;
