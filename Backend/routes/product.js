const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

/**
* @swagger
* /api/product/5f461d2b056f442d2455a519:
*    get:
*       tags:
*       summary: Reads the product.
*       description: This is where you can read the products
*       responses: 
*            200:
*               description: Received the list of products.
*/
router.get("/product/:productId", read);

/**
* @swagger
* /api/product/create/5f3eb9c6a4fcae2d002ef0f7:
*    post:
*       tags:
*       summary: Creates the product.
*       description: This is where the admin can create the products
*       responses: 
*            200:
*               description: Created the product.
*/
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);

/**
* @swagger
* /api/product/5f461d2b056f442d2455a519/5f3eb9c6a4fcae2d002ef0f7:
*    delete:
*       tags:
*       summary: Deletes the product.
*       description: This is where the admin can delete the products
*       responses: 
*            200:
*               description: Deleted the product.
*/
router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);

/**
* @swagger
* /api/product/5f461d2b056f442d2455a519/5f3eb9c6a4fcae2d002ef0f7:
*    put:
*       tags:
*       summary: Updates the product.
*       description: This is where the admin can update the product
*       responses: 
*            200:
*               description: Updates the product.
*/
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

/**
* @swagger
* /api/products:
*    get:
*       tags:
*       summary: Returns the list of products.
*       description: This is where you can get list of products
*       responses: 
*            200:
*               description: Received the list of products.
*/
router.get("/products", list);

/**
* @swagger
* /api/products/search:
*    get:
*       tags:
*       summary: Search the products.
*       description: This is where you can search the products
*       responses: 
*            200:
*               description: Received the searched products.
*/
router.get("/products/search", listSearch);

/**
* @swagger
* /api/products/related/5f461d2b056f442d2455a519:
*    get:
*       tags:
*       summary: Related products.
*       description: This is where related products list id displayed
*       responses: 
*            200:
*               description: Received the related products.
*/
router.get("/products/related/:productId", listRelated);

/**
* @swagger
* /api/products/categories:
*    get:
*       tags:
*       summary: Categories list.
*       description: This is where category list is displayed
*       responses: 
*            200:
*               description: Received the category list.
*/
router.get("/products/categories", listCategories);

/**
* @swagger
* /api/products/by/search:
*    post:
*       tags:
*       summary: List by Search.
*       description: This is where list is searched.
*       responses: 
*            200:
*               description: Received the searched list.
*/
router.post("/products/by/search", listBySearch);

/**
* @swagger
* /api/product/photo/5f461d2b056f442d2455a519:
*    get:
*       tags:
*       summary: Product Photo.
*       description: This is where photo of the product is displayed
*       responses: 
*            200:
*               description: Received the product photo.
*/
router.get("/product/photo/:productId", photo);



router.param("userId", userById);
router.param("productId", productById);

module.exports = router;