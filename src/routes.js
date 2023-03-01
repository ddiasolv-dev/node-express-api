const express = require('express');
const router = express();

router.get('/', (request, response) => {
    response.send('root context route');
 });

router.get('/user', (request, response) => {
    response.json({message: 'user context get'});
 });

 router.get('/user/request/headers', (request, response) => {
    response.json({request: request.headers});    
 });

 module.exports = router