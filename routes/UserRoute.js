import isAuthenticated from "../middleware/authmiddleware.js";
import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";


const router = express.Router();

router.get('/users',isAuthenticated, getUsers);
router.get('/users/:id',isAuthenticated, getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;