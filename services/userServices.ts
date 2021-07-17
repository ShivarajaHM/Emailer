import userDAO from '../dao/userDAO';

const UserDAO = new userDAO();

function userServices() {
}

userServices.prototype.getAllUser = (callback) => {
    UserDAO.getAllUser(callback);
}

userServices.prototype.addUser = (data, callback) => {
    UserDAO.addUser(data, callback);
}

userServices.prototype.updateUser = (reqParams, data, callback) => {
    UserDAO.updateUser(reqParams, data, callback);
}

userServices.prototype.deleteUser = (reqParams, data, callback) => {
    UserDAO.deleteUser(reqParams, data, callback);
}

userServices.prototype.getAllEmailNotReceivedNotifications = (callback) => {
    UserDAO.getAllEmailNotReceivedNotifications(callback);
}

export default userServices;