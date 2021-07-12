import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Factura extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_cliente: number

  @column()
  public produtos: string
  
  @column()
  public valor_total: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
