'use strict'

const Empleo = use('App/Models/Empleo')

class EmpleoController {
    async home({view}) {

        // recibir todoslos registros
        const empleos = await Empleo.all();
        return view.render('index', { empleos: empleos.toJSON() })
    }
}

module.exports = EmpleoController
