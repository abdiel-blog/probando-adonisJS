'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpleoSchema extends Schema {
  up () {
    this.create('empleos', (table) => {
      table.increments()
      table.string('titulo')
      table.string('link')
      table.string('descripcion')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('empleos')
  }
}

module.exports = EmpleoSchema
