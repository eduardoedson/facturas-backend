import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/list', 'ClienteController.list')
  Route.get('/get/:id', 'ClienteController.get')
  Route.post('/create', 'ClienteController.create')
  Route.put('/update/:id', 'ClienteController.update')
  Route.delete('/delete/:id', 'ClienteController.delete')
}).prefix('/cliente')