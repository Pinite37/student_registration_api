const express = require("express");
const {
  create,
  updateStatus,
} = require("../controllers/admissions.controller");
const { upload } = require("../middlewares/multer.middleware");
const { authenticate, isAdmin } = require("../middlewares/auth.middleware");
const { validate } = require("../middlewares/validations.middleware");

const router = express.Router();

router.post("/", upload.single("id_card"), authenticate, validate(), create);
router.patch(
  "/:admissionId/status",
  authenticate,
  isAdmin,
  validate(),
  updateStatus,
);

module.exports = router;
