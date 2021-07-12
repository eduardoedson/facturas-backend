// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DashboardController {
  public async FacturasPorCliente() {
    return await Database
    .from('facturas')
    .select('clientes.nome')
    .count('facturas.id')
    .innerJoin('clientes', 'facturas.id_cliente', 'clientes.id')
    .groupBy('clientes.nome')
  }
}
