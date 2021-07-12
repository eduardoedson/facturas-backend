"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Cliente"));
class ClienteController {
    async create({ request }) {
        const { codigo, nome } = request.only(['codigo', 'nome']);
        const cliente = await Cliente_1.default.create({ codigo, nome });
        return cliente;
    }
    async list() {
        return await Cliente_1.default.all();
    }
    async get({ request }) {
        const { id } = request.params();
        return await Cliente_1.default.find(id);
    }
    async update({ request }) {
        const { id } = request.params();
        const { codigo, nome } = request.only(['codigo', 'nome']);
        const cliente = await Cliente_1.default.find(id);
        cliente?.merge({ codigo, nome });
        cliente?.save();
        return cliente;
    }
    async delete({ request }) {
        const { id } = request.params();
        const cliente = await Cliente_1.default.find(id);
        await cliente?.delete();
        return true;
    }
}
exports.default = ClienteController;
//# sourceMappingURL=ClienteController.js.map