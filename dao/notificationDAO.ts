import { user } from '../models/index';
import moment from 'moment';
import {emailer} from '../utils/emailer';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
export const notifications = ()=>{
    return new Promise((resolve,reject)=>{   
        var CurrentDate = moment().format('YYYY-MM-DD HH:mm:ss');        
            user.findAll({where:{scheduled_time:CurrentDate,email_fails:{[Op.eq]: true}}}).then(userResponse=>{ 
                if(userResponse){
                    emailer(userResponse)
                }else{
                    return false;
                }
            });   
    })
}