var Books = require('../models/Books');
// List of all Bookss

exports.Books_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Books list');
};
// for a specific Books.
exports.Books_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Books detail: ' + req.params.id);
};
// Handle Books create on POST.
exports.Books_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Books create POST');
};
// Handle Books delete form on DELETE.
exports.Books_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Books delete DELETE ' + req.params.id);
};
// Handle Books update form on PUT.
exports.Books_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Books update PUT' + req.params.id);
};// List of all Bookss

// List of all Books
exports.Books_list = async function(req, res) {
    try{
    theBooks = await Books.find();
    res.send(theBooks);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// VIEWS
// Handle a show all view
exports.Books_view_all_Page = async function(req, res) {
    try{
    theBooks = await Books.find();
    res.render('Books', { title: 'Bookss Search Results', results: theBooks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
exports.Books_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Books();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Books_type":"goat", "cost":12, "size":"large"}
    document.book_name = req.body.book_name;
    document.book_genre = req.body.book_genre;
    document.book_cost = req.body.book_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};