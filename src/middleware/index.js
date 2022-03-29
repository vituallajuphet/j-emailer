const { isAuthenticated } = require("../controllers/authController");

const authMiddleware = (server) => {
  server.use(isAuthenticated);
}

module.exports = authMiddleware;



