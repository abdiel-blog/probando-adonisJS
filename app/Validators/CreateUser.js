'use strict'

class CreateUser {
  get rules () {
    return {
      username: 'required|unique:users',    //unico en la tabla Users
      email   : 'required|unique:users', 
      password: 'required', 
    }
  }

  get messages(){
    return {
      required: 'Ups {{field}} es requerido.',  //con {{field}} se accedo al compo que incumple esta regla
      unique:'Un segundo este {{field}} ya existe'
    }
  }

  async fails(error) {
    this.ctx.session.withErrors(error)  //envia el msg de error a la sesion en curso
      .flashAll();
    
    return this.ctx.response.redirect('back'); //regresa a la pagina que realizo el post
  }
}

module.exports = CreateUser
