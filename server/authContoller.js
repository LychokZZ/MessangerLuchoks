const User = require('./User')
const Message = require('./Message')

class authController{ 

    async registation(req, res){
        try{
            const {username , password, email} = req.body
            console.log(username , password, email)
            const candidat = await User.findOne({username})
            if(candidat){
                return res.status(400).json({message: "Імя зайняте"})
            }
            const emails = await User.findOne({email})
            if(emails){
                return res.status(400).json({message: "Пошта зайнята"})
            }
            const user = new User({username, password, email})
            await user.save() 
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
            res.status(400).json({message: "Registration error"})
        }
    }

    async sendLetter(req, res){
        try{
            const {sender , receiver , text } = req.body
            console.log(sender , receiver , text )
            const message = new Message({sender , receiver , text })
            await message.save() 
            return res.json({message: "Sucessful"}) 
        }catch(e){
            console.log(e)
            res.status(400).json({message: "Login error"})
        }
    }

    async getLetter(req, res){
        try{
            const {username , password} = req.body

        }catch(e){
            console.log(e)
            res.status(400).json({message: "Login error"})
        }
    }
    

}

module.exports = new authController()