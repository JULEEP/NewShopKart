import express from "express";
const router = express.Router();
import UserAuth from '../Middleware/authMiddleware.js'
import {
    userRegistration,
    userLogin,
    updateUserPassword,
    loggeduser,
    otpSend,
    signOut,
} from '../Controller/userController/userController.js'

router.use('/changepassword', UserAuth)
router.use('/loggeduser', UserAuth)

router.post('/register', userRegistration)
router.post('/otpsend', otpSend)
router.post('/login', UserAuth, userLogin)
router.post('/updatepassword', updateUserPassword)
router.get('/loggeduser', loggeduser)
router.post('/sign-out', UserAuth, signOut)


export default router