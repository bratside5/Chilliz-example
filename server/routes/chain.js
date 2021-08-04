const express = require("express");
const router = express.Router();
const chainController = require("../controllers/chain");

router.get("/chain", chainController.initChain);
router.get("/chain/add", chainController.addBlock);
router.get("/chain/get", chainController.getBlockChain);

module.exports = router;
