'use strict'

class LoginUser {
  get rules () {
    return {
      email:'required',
      password:'required'
    }
  }

  get messages(){
    return {
      required:'Ups {{ field }} es requerido.'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)  //envia el msg de error a la sesion en curso
      .flashAll();
    
    return this.ctx.response.redirect('back'); //regresa a la pagina que realizo el post
  }
}

module.exports = LoginUser
