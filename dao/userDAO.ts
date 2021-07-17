import { user } from '../models/index';

function userDAO() {
}

userDAO.prototype.getAllUser = function (callback) {
    user.findAll({}).then(callback);
}

userDAO.prototype.addUser = function (data, callback) {
    user.create(data).then(callback);
}

userDAO.prototype.updateUser = function (reqParams, data, callback) {
    user.update(data, { where: reqParams }).then(callback);
}

userDAO.prototype.deleteUser = function (reqParams, callback) {
    user.destroy({ where: reqParams }).then(userDeleted=>{
        if(userDeleted){
            callback(true);
        }else{
            callback(false)
        }
    });
}

userDAO.prototype.getAllEmailNotReceivedNotifications = function (callback) {
    user.findAll({where:{email_fails:true}}).then(callback);
}

export default userDAO;