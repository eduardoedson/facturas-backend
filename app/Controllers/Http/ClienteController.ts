import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'

export default class ClienteController {
  public async create ({ request }: HttpContextContract) {
    const { codigo, nome } = request.only(['codigo', 'nome'])
    const cliente = await Cliente.create({ codigo, nome })
    return cliente
  }

  public async list () {
    return await Cliente.all()
  }

  public async get ({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Cliente.find(id)
  }

  public async update ({ request }: HttpContextContract) {
    const { id } = request.params()
    const { codigo, nome } = request.only(['codigo', 'nome'])

    const cliente = await Cliente.find(id)
    cliente?.merge({ codigo, nome })
    cliente?.save()
    
    return cliente
  }

  public async delete ({ request }: HttpContextContract) {
    const { id } = request.params()
    const cliente = await Cliente.find(id)
    await cliente?.delete()

    return true
  }
}
