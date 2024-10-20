const express = require('express');
const router = express.Router();
const utilities = require("../utilities/")
const inventoryController = require("../controllers/inventoryController")
const regValidate = require('../utilities/inventory-validation')

//Magagement Route
router.get("/", utilities.handleErrors(inventoryController.buildManagement))
//Classification Routes
router.get("/add-classification", utilities.handleErrors(inventoryController.buildAddClassification))
router.post(
    "/add-classification",
    regValidate.classificationRules(),
    regValidate.checkClassificationData,
    utilities.handleErrors(inventoryController.addClassification)
)
//Inventory Routes
router.get("/add-inventory", utilities.handleErrors(inventoryController.buildAddInventory))
router.post(
    "/add-inventory",
    regValidate.inventoryRules(),
    regValidate.checkInventoryData,
    utilities.handleErrors(inventoryController.addInventory)
)
module.exports = router;