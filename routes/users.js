import express from "express";

import{updateUserProfile} from "../controllers/users.js"
import{createArticle} from "../controllers/articles.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
/* Create*/
router.post("/:userId/articles",verifyToken,createArticle)

// /* UPDATE */
router.patch("/:userId",verifyToken, updateUserProfile);


export default router;