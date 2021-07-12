import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('codigo');
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.string('codigo');
    })
  }
}
