import express, { Application } from 'express';
import cron from 'node-cron';
import routes from './routes';
import {notifications} from './dao/notificationDAO'

const app: Application = express();

app.use(express.json());
app.use(express.static("public"));
app.use(routes)
const port = 3000;

cron.schedule('* * * * *', () => {
  notifications()
  console.log('running a task every minute');
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});