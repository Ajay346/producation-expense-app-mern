const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

// Router Object

const router = express.Router();

// Routes

// Add transaction Route Method POST
router.post("/add-transaction", addTransaction);

// Edit transaction Route Method POST
router.post("/edit-transaction", editTransaction);

// Delete transaction Route Method POST
router.post("/delete-transaction", deleteTransaction);

// Get transaction Route Method Posts

router.post("/get-transaction", getAllTransaction);

module.exports = router;
