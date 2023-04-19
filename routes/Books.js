var express = require('express');
const Books_controlers= require('../controllers/Books');
var router = express.Router();
/* GET costumes */
router.get('/', Books_controlers.Books_view_all_Page );
module.exports = router;

/* GET detail Drink page */
router.get('/detail', Books_controlers.Books_view_one_Page);

/* GET create Drink page */
router.get('/create', Books_controlers.Books_create_Page);


/* GET create update page */
router.get('/update', Books_controlers.Books_update_Page);

router.get('/delete', Books_controlers.Books_delete_Page)