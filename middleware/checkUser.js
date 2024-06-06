const myschema = require("../middleware/checkUser.js");
const checkUser = async (req, res, next) => {
  const { login_email, login_password } = req.body;
  const email = login_email;
  if (!login_email || !login_password) {
    return res.status(400).json({
      success: "false",
      message: "Enter valid email & password",
    });
  }
  try {
    const result = await myschema.findOne({ email });
    if (!result) {
      res.status(400).json({
        success: "false",
        message: "Invalid email or password",
      });
    }
    const comPass = await bcrypt.compare(login_password, result.password);
    if (comPass) {
      next();
    }
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: "Finding user details faild",
    });
    console.log(error);
  }
};
module.exports = checkUser;
