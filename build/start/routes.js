"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.get('/list', 'ClienteController.list');
    Route_1.default.get('/get/:id', 'ClienteController.get');
    Route_1.default.post('/create', 'ClienteController.create');
    Route_1.default.put('/update/:id', 'ClienteController.update');
    Route_1.default.delete('/delete/:id', 'ClienteController.delete');
}).prefix('/cliente');
Route_1.default.group(() => {
    Route_1.default.get('/list', 'ProdutoController.list');
    Route_1.default.get('/get/:id', 'ProdutoController.get');
    Route_1.default.post('/create', 'ProdutoController.create');
    Route_1.default.put('/update/:id', 'ProdutoController.update');
    Route_1.default.delete('/delete/:id', 'ProdutoController.delete');
}).prefix('/produto');
//# sourceMappingURL=routes.js.map