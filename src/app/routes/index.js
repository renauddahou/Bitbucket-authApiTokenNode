const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({message: "Server is Runing..."}))


module.exports = router;