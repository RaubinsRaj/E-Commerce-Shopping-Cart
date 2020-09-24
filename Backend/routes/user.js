const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update, purchaseHistory } = require('../controllers/user');

router.get('/secret', requireSignin, (req, res) => {
    res.json({
        user: 'got here yay'
    });
});

/**
* @swagger
* /api/user/5f3f5e126d4e0c3398fa7d85:
*    get:
*       tags:
*       summary: Reads the user.
*       description: This is where details of user is displayed
*       responses: 
*            200:
*               description: Received the details of user.
*/
router.get('/user/:userId', requireSignin, isAuth, read);

/**
* @swagger
* /api/user/5f3f5e126d4e0c3398fa7d85:
*    put:
*       tags:
*       summary: Updates the user.
*       description: This is where user can update its details
*       responses: 
*            200:
*               description: Updation is done.
*/
router.put('/user/:userId', requireSignin, isAuth, update);

/**
* @swagger
* /api/orders/by/user/5f3f5e126d4e0c3398fa7d85:
*    get:
*       tags:
*       summary: Displays the purchase history of the user.
*       description: This is where you can see the purchase history of user
*       responses: 
*            200:
*               description: Purchase History is displayed.
*/
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;