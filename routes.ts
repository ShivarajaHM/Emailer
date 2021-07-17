import express from 'express';
import ping from './controller/test'
import sync from './controller/sync'
import user from './controller/user'

const router = express.Router();

router.get("/ping", ping);
router.get("/sync", sync);
router.get("/user", user);
router.post("/user", user);
router.put("/user", user);
router.delete("/user", user);
router.get("/user/fails", user);

export default router;