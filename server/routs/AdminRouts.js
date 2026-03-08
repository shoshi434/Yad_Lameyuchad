const express=require("express")
const router=express.Router()
const adminController=require("../controllers/AdminController")
const verifyJWT=require("../middleware/verifyJWT")
const verifyAdmin=require("../middleware/verifyAdmin")
const verifySuperAdmin=require("../middleware/verifySuperAdmin")

router.use(verifyJWT)
router.use(verifyAdmin)

router.get("/",adminController.getAdmins)
router.post("/",verifySuperAdmin,adminController.createAdmin)
router.put("/:id",verifySuperAdmin,adminController.updateAdmin)
router.delete("/:id",verifySuperAdmin,adminController.deleteAdmin)

module.exports=router