import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Factura from 'App/Models/Factura'

export default class FacturasController {
  async create({ request }: HttpContextContract) {
    const { id_cliente, produtos, valor_total } = request.only(['id_cliente', 'produtos', 'valor_total'])
    await Factura.create({ 
      id_cliente,
      valor_total,
      produtos
    })
    return await this.list()
  }

  public async list () {
    return await Database
    .from('facturas')
    .select(['facturas.id', 'clientes.nome', 'facturas.valor_total', 'facturas.created_at'])
    .innerJoin('clientes', 'facturas.id_cliente', 'clientes.id')
  }
}
