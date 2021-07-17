import express from 'express';

export default express.Router()

.get('/ping', function (req, res, next) {    
    res.status(200).send('PONG')
  })
