//PostController
const { Post } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  create: async (req, res, next) => {
    try {
      const { post } = req.body
      
      //Create new post
      const newPost = await Post.create(post)

      //Send the response
      res.send({
        data: {
          post: newPost
        },
        status: {
          code: 200,
          message: 'Operation handle correctly',
          succeeded: true
        }
      })
    } catch(err) {
      //Send the error
      next(err)
    }
  },
  find: async (req, res, next) => {
    try {
      const { search='', searchBy='message', order='desc', orderBy='createdAt', page=1, limit=10 } = req.query;
      
      //Find, sort and paginate the Post
      const thePost = await Post.findAndCountAll({
        where: {
           [searchBy]: {
             [Op.like]: `%${search}%`
           }
        },
        order: [ [`${orderBy}`, `${order}`] ],
        offset: page*limit,
        limit: limit
     })

      //Send the response
      res.send({
        data: {
          post: thePost.rows,
          total: thePost.count
        },
        status: {
          code: 200,
          message: 'Operation handle correctly',
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      //Find a post by Id
      const thePost = await Post.findOne({
        where: {
          id
        }
      });

      //Send the response
      res.send({
        data: {
          post: thePost
        },
        status: {
          code: 200,
          message: 'Operation handle correctly',
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { post } = req.body;

      //Find a post by Id and update
      const thePost = await Post.update(post, {
        where: {
            id: id
        }
    });

      //Send the response
      res.send({
        data: {
          post: thePost
        },
        status: {
          code: 200,
          message: 'Operation handle correctly',
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  },
  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;

      //Find a post by id and remove it
      const thePost = await Post.destroy({
        where: {
            id: id
        }
      });

      //Send the response
      res.send({
        status: {
          code: 200,
          message: 'Operation handle correctly',
          succeeded: true
        }
      })
    } catch(err){
      //Send the error
      next(err)
    }
  }
}