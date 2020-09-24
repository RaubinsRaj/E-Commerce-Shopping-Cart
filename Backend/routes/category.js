const express = require('express');
const router = express.Router();

const { create, categoryById, read, update, remove, list } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

/**
* @swagger
* /api/category/5f46030d4a901733540ebd36:
*    get:
*       tags:
*       summary: Reads the single category.
*       description: This is where you can read the single category based on category id
*       responses: 
*            200:
*               description: Received the single category.
*/
router.get('/category/:categoryId', read);

/**
* @swagger
* /api/category/create/5f3eb9c6a4fcae2d002ef0f7:
*    post:
*       tags:
*       summary: Creates the category.
*       description: This is where you can create the category
*       responses: 
*            200:
*               description: Category is created.
*/
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

/**
* @swagger
* /api/category/5f46030d4a901733540ebd36/5f3eb9c6a4fcae2d002ef0f7:
*    put:
*       tags:
*       summary: Updation of category.
*       description: This is where you can update the categort
*       responses: 
*            200:
*               description: Updateion of category is done.
*/
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);

/**
* @swagger
* /api/category/5f46030d4a901733540ebd36/5f3eb9c6a4fcae2d002ef0f7:
*    delete:
*       tags:
*       summary: Deletion of categories.
*       description: This is where admin can delete the category
*       responses: 
*            200:
*               description: Category is deleted.
*/
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);

/**
* @swagger
* /api/categories:
*    get:
*       tags:
*       summary: Reads the list of category.
*       description: This is where you can get the list of categories
*       responses: 
*            200:
*               description: Received the list of categories.
*/
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;