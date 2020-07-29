import { Context } from 'koa'

class Controller {
  private _service

  constructor (service) {
    this._service = service
  }

  async index (context: Context) {
    // const result = await this._service.find()
    context.body = { message: 'hello user' }
  }
}

export default Controller
