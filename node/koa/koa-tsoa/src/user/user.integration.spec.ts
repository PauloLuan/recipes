import request from 'supertest'
import User from './user.model'

let app = require('../../src/server')
let newUser

describe('User API:', () => {
  before(async () => {
    await User.remove({})
  })

  describe('GET /api/users', () => {
    let users

    beforeEach(async () => {
      const result = await request(app)
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /json/)
      users = result.body
    })

    it('should respond with JSON array', () => {
      console.log('==============')
      console.log('users :>> ', JSON.stringify(users))
      console.log('==============')
      expect(users).to.be.instanceOf(Array)
    })
  })

  // describe('POST /api/users', () => {
  //   beforeEach(() => {
  //     const result = await request(app)
  //       .post('/api/users')
  //       .send({
  //         name: 'User Test'
  //       })
  //       .expect(201)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         newUser = result.body
  //       })
  //   })

  //   it('should respond with the newly created user', () => {
  //     expect(newUser).to.be.instanceOf(Object)
  //     expect(newUser).ownProperty('_id')
  //     expect(newUser._id).to.not.be.undefined
  //     expect(newUser._id).to.not.be.null
  //     expect(newUser).ownProperty('name')
  //     expect(newUser.name).to.equal('User Test')
  //     expect(newUser).ownProperty('createdAt')
  //     expect(newUser.createdAt).to.not.be.undefined
  //     expect(newUser.createdAt).to.not.be.null
  //   })
  // })

  // describe('GET /api/users/:id', () => {
  //   let user

  //   beforeEach(() => {
  //     const result = await request(app)
  //       .get('/api/users/' + newUser._id)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         user = result.body
  //       })
  //   })

  //   afterEach(() => {
  //     user = {}
  //   })

  //   it('should respond with the requested user', () => {
  //     expect(user).to.be.instanceOf(Object)
  //     expect(user).ownProperty('_id')
  //     expect(user._id).to.not.be.undefined
  //     expect(user._id).to.not.be.null
  //     expect(user).ownProperty('name')
  //     expect(user.name).to.equal('User Test')
  //     expect(user).ownProperty('createdAt')
  //     expect(user.createdAt).to.not.be.undefined
  //     expect(user.createdAt).to.not.be.null
  //   })
  // })

  // describe('PUT /api/users/:id', () => {
  //   let updatedUser

  //   beforeEach(() => {
  //     const result = await request(app)
  //       .put('/api/users/' + newUser._id)
  //       .send({
  //         _id: newUser._id,
  //         name: 'Updated User'
  //       })
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         updatedUser = result.body
  //       })
  //   })

  //   afterEach(() => {
  //     updatedUser = {}
  //   })

  //   it('should respond with the updated user', () => {
  //     expect(updatedUser).to.be.instanceOf(Object)
  //     expect(updatedUser).ownProperty('_id')
  //     expect(updatedUser._id).to.not.be.undefined
  //     expect(updatedUser._id).to.not.be.null
  //     expect(updatedUser).ownProperty('name')
  //     expect(updatedUser.name).to.equal('Updated User')
  //     expect(updatedUser).ownProperty('createdAt')
  //     expect(updatedUser.createdAt).to.not.be.undefined
  //     expect(updatedUser.createdAt).to.not.be.null
  //     // expect(updatedUser).ownProperty('updatedAt');
  //     // expect(updatedUser.updatedAt).to.not.be.undefined;
  //     // expect(updatedUser.updatedAt).to.not.be.null;
  //   })
  // })

  // describe('PATCH /api/users/:id', () => {
  //   let patchedUser

  //   beforeEach(() => {
  //     const result = await request(app)
  //       .put('/api/users/' + newUser._id)
  //       .send({
  //         _id: newUser._id,
  //         name: 'Patched User'
  //       })
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         patchedUser = result.body
  //       })
  //   })

  //   afterEach(() => {
  //     patchedUser = {}
  //   })

  //   it('should respond with the updated user', () => {
  //     expect(patchedUser).to.be.instanceOf(Object)
  //     expect(patchedUser).ownProperty('_id')
  //     expect(patchedUser._id).to.not.be.undefined
  //     expect(patchedUser._id).to.not.be.null
  //     expect(patchedUser).ownProperty('name')
  //     expect(patchedUser.name).to.equal('Patched User')
  //     expect(patchedUser).ownProperty('createdAt')
  //     expect(patchedUser.createdAt).to.not.be.undefined
  //     expect(patchedUser.createdAt).to.not.be.null
  //     // expect(patchedUser).ownProperty('updatedAt');
  //     // expect(patchedUser.updatedAt).to.not.be.undefined;
  //     // expect(patchedUser.updatedAt).to.not.be.null;
  //   })
  // })

  // describe('DELETE /api/users/:id', () => {
  //   it('should respond with 204 on successful removal', () => {
  //     const result = await request(app)
  //       .delete('/api/users/' + newUser._id)
  //       .expect(204)
  //   })

  //   it('should respond with 404 when user does not exist', () => {
  //     const result = await request(app)
  //       .delete('/api/users/' + newUser._id)
  //       .expect(404)
  //   })
  // })
})
