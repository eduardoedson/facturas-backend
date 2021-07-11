import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutoController {
  public async create ({ request }: HttpContextContract) {
    const { valor, nome } = request.only(['valor', 'nome'])
    const produto = await Produto.create({ valor, nome })
    return produto
  }

  public async list () {
    return await Produto.all()
  }

  public async get ({ request }: HttpContextContract) {
    const { id } = request.params()
    return await Produto.find(id)
  }

  public async update ({ request }: HttpContextContract) {
    const { id } = request.params()
    const { valor, nome } = request.only(['valor', 'nome'])

    const produto = await Produto.find(id)
    produto?.merge({ valor, nome })
    produto?.save()
    
    return produto
  }

  public async delete ({ request }: HttpContextContract) {
    const { id } = request.params()
    const produto = await Produto.find(id)
    await produto?.delete()

    return true
  }
}
