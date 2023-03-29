"use strict";

const UserStorage = require("./UserStorage");

class User  {

    

    constructor(body){
        this.body = body;
    }

    login(){
        const { id, password } = UserStorage.getUserInfo(this.body.id);
        if (id) {
            if (id === this.body.id && password === this.body.password) {
                return { success : true };
            }
            return { success : false , msg : "비밀번호가 틀렸어요."};
        }
        return { success : false , msg : "아이디가 존재하지 않습니다."};
    }
}

module.exports = User;