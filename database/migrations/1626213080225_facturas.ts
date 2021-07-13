import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Facturas extends BaseSchema {
  protected tableName = 'facturas'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropUnique(['produtos'])
    })
  }

  public async down () {
  }
}
