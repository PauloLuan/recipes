import Router from 'koa-router'

import UserController from './user.controller'
// import UserService from './user.service'
// import UserRepository from './user.repository'

// const userRepository = new UserRepository()
// const userService = new UserService()
const userController = new UserController({})

const router = new Router({
  prefix: '/user'
})

router.get('/', userController.index)
// router.get('/:id', UserController.getById)
// router.post('/', UserController.create)
// router.put('/:id', UserController.update)
// router.patch('/:id', UserController.update)
// router.delete('/:id', UserController.destroy)

export default router
