const express = require("express");
const EntryController = require("./controllers/EntryController");

const router = express.Router();

router.get('/items', EntryController.index);
router.post('/items', EntryController.store);
router.patch('/items/:entry', EntryController.update);
router.delete('/items/:entry', EntryController.destroy);

router.get('/categories', EntryController.indexCategory);
router.post('/categories', EntryController.storeCategory);
router.patch('/categories/:entry', EntryController.updateCategory);
router.delete('/categories/:entry', EntryController.destroyCategory);

module.exports = router;
