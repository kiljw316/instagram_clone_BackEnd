const passport = require("passport");
const authenticateUser = () => {
  return passport.authenticate("jwt", { session: false });
};

module.exports = {
  authenticateUser
};
