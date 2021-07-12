"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Produto"));
class ProdutoController {
    async create({ request }) {
        const { valor, nome } = request.only(['valor', 'nome']);
        const produto = await Produto_1.default.create({ valor, nome });
        return produto;
    }
    async list() {
        return await Produto_1.default.all();
    }
    async get({ request }) {
        const { id } = request.params();
        return await Produto_1.default.find(id);
    }
    async update({ request }) {
        const { id } = request.params();
        const { valor, nome } = request.only(['valor', 'nome']);
        const produto = await Produto_1.default.find(id);
        produto?.merge({ valor, nome });
        produto?.save();
        return produto;
    }
    async delete({ request }) {
        const { id } = request.params();
        const produto = await Produto_1.default.find(id);
        await produto?.delete();
        return true;
    }
}
exports.default = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map