
const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/user.controller');
const { verifyToken, checkRole } = require('../middleware/auth.middleware');

const router = express.Router();

router.use(verifyToken);
router.get('/', checkRole('admin', 'moderator'), getAllUsers);
router.get('/:id', getUserById); 
router.put('/:id', updateUser); 
router.delete('/:id', checkRole('admin'), deleteUser);

module.exports = router;