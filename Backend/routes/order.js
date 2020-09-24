const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const {
    create,
    listOrders,
   getStatusValues,
    orderById,
    updateOrderStatus
} = require("../controllers/order");
const { decreaseQuantity } = require("../controllers/product");

/**
* @swagger
* /api/order/create/5f3f5e126d4e0c3398fa7d85:
*    post:
*       tags:
*       summary: Create the order.
*       description: This is where user can create the order
*       responses: 
*            200:
*               description: Order is created.
*/
router.post(
   "/order/create/:userId",
    requireSignin,
    isAuth,
   addOrderToUserHistory,
    decreaseQuantity,
    create
);

/**
* @swagger
* /api/order/list/5f3f5e126d4e0c3398fa7d85:
*    get:
*       tags:
*       summary: List of orders.
*       description: This is where user can see the list of orders
*       responses: 
*            200:
*               description: Order List is displayed.
*/
router.get("/order/list/:userId", requireSignin, isAuth, isAdmin, listOrders);

/**
* @swagger
* /api/order/status-values/5f3f5e126d4e0c3398fa7d85:
*    get:
*       tags:
*       summary: Status value is seen.
*       description: This is where user can track the order shipment
*       responses: 
*            200:
*               description: Tracking is done.
*/
router.get(
   "/order/status-values/:userId",
   requireSignin,
   isAuth,
   isAdmin,
   getStatusValues
);

/**
* @swagger
* /api/order/5f4b47acb840be2314758de2/status/5f3f5e126d4e0c3398fa7d85:
*    put:
*       tags:
*       summary: Status of placed order.
*       description: This is where user can see status of placed order
*       responses: 
*            200:
*               description: status is seen.
*/
router.put(
   "/order/:orderId/status/:userId",
   requireSignin,
   isAuth,
   isAdmin,
   updateOrderStatus
);

router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;