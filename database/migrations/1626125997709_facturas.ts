import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Facturas extends BaseSchema {
  protected tableName = 'facturas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_cliente').notNullable().references('id').inTable('clientes').onDelete('cascade')
      table.string('produtos').unique().notNullable()
      table.float('valor_total').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
