// Import your Controllers here
// Controllers can be imported from ..app/http/controllers/

// Import your Middlewares here
// Controllers can be imported from ..app/http/middlewares/

// Route initialization
function initRoutes(app) {
  // Home route
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

module.exports = initRoutes;
