import express from "express";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} from "../controllers/transactionController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.use(protect);

router.post("/", createTransaction);
router.get("/", getTransactions);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
