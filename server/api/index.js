const router = require('express').Router();

/* !!Write route delegations for server below!! */

/* Error Handling for invalid routes */
router.use((req, res, next) => {
  const error = new Error('Not Found.');
  error.status = 404;
  next(error);
});
module.exports = router;
