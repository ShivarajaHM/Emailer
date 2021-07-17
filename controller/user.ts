import express from 'express';
import userServices from '../services/userServices'

const UserServices = new userServices();
export default express.Router()

.get('/user', function (req, res, next) {    
    UserServices.getAllUser((result, err) => {
        response(err, res, result)
    })
  })

.post('/user', (req,res, next) =>{
    if (req.body) {
        const data = req.body;
        UserServices.addUser(data, (result, err) => {
            response(err, res, result)
        })
    }
    
})

.put('/user', (req,res, next) =>{
    if (req.body && req.query) {
        const data = req.body;
        const reqParams = req.query
        UserServices.updateUser(reqParams, data, (result, err) => {
            response(err, res, result)

        })
    } else {
        res.status(400).send('Bad Request')
    }
})

.delete('/user', (req,res, next) =>{
    if (req.query) {
        const reqParams = req.query
        UserServices.deleteUser(reqParams, (result, err) => {
            response(err, res, result)

        })
    } else {
        res.status(400).send('Bad Request')
    }
})

.get('/user/fails', function (req, res, next) {    
    UserServices.getAllEmailNotReceivedNotifications((result, err) => {
        response(err, res, result)
    })
  })

function response(err, res, result) {
    if (err) {
        res.status(400).send(err)
    }
    else {
        res.status(200).send(result)
    }
}