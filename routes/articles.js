import express from "express"
import {getAllArticles} from "../controllers/articles.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

// read
router.get("/",verifyToken, getAllArticles)

export default router;