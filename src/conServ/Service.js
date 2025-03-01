import $api from "./indexServ"

export default class serviceAuth {
    static async login( username, password){
        return $api.post('/login ', {username,password}) 
    }

    static async register( username, password, email){
        return $api.post('/registration ', {username,password, email}) 
    }

    static async sendletter(From,To, text){
        return $api.post('/sendletter ', {From,To, text}) 
    }
    static async getletter(From,To, text){
        return $api.post('/sendletter ', {From,To, text}) 
    }
    static async getcontact(User){
        const body = {
            user: User,
        };
        console.log(body)
        return $api.get('/getcontact', body )
    
    }


}