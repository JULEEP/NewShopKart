import express from "express";
const router = express.Router();
import VendorAuth from '../Middleware/vendorAuth.js'

import {
    vendorRegistration,
    vendorLogin,
    otpSend,
    updateVendorPassword,
    loggedvendor,
    onboardingVendor
} from "../Controller/VendorController/vendorController.js";



//apis

router.use('/changepassword', VendorAuth)
router.use('/loggedvendor', VendorAuth)


router.post('/vendor/register', vendorRegistration);
router.post('/vendor/login', vendorLogin);
router.post('/otpsend', otpSend);
router.post('/update/vendorpassword', updateVendorPassword);
router.get('/loggedvendor', loggedvendor);
router.post('/onboardvendor', onboardingVendor);

export default router