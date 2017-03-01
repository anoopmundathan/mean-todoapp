'use strict';

var express = require('express');

var router = express.Router();

router.route('/todos')
  .get(function(req, res){
    res.send('get todos');
  })
  .post(function(req, res) {
    res.send('post todos');
  });

router.route('/todos/:id')
  .put(function(req, res) {
    res.send('put todos');
  })
  .delete(function(req, res) {
    res.send('delete todos');
  });


// // GET /api/todos
// router.get('/todos', function(req, res) {
//   res.send('GETs TODOS');
// });
//
// // POST /api/todos
// router.post('/todos', function(req, res) {
//     res.send('POST TODOS');
// });
//
// // PUT /api/todos/:id
// router.put('/todos/:id', function(req, res) {
//   res.send('PUT TODOS');
// });
//
// // DELETE /api/todos/:id
// router.delete('/todos/:id', function(req, res) {
//   res.send('DELETE TODOS');
// });
//
module.exports = router;
