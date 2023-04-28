var express = require('express');
const Books_controlers= require('../controllers/Books');
var router = express.Router();
/* GET costumes */
router.get('/', Books_controlers.Books_view_all_Page );
module.exports = router;

/* GET detail Drink page */
router.get('/detail', Books_controlers.Books_view_one_Page);



// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/* GET create update page */
router.get('/update',secured, Books_controlers.Books_update_Page);

/* GET create Drink page */
router.get('/create',secured, Books_controlers.Books_create_Page);
router.get('/delete',secured, Books_controlers.Books_delete_Page)