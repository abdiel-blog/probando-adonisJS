'use strict'

const User = use('App/Models/User')

class UserController {
    async create({response, request, auth}){
        //crea un nuevo usuario con los campos del request
        const user = await User.create(request.only(['username','email','password']))

        await auth.login(user)  //inicia sesion usando los datos del nuevo usuario
        return response.redirect('/');
    }

    async login({response, request, auth, session}){
        const {email, password } = request.all()    //todos los valores del request

        try {
            await auth.attempt(email,password)
            return response.redirect('/')   //login Correcto
        } catch (error) {
            session.flash({loginError: 'Estas credenciales no funcionan.'})
            return response.redirect('/login')
        }
    }
}

module.exports = UserController
