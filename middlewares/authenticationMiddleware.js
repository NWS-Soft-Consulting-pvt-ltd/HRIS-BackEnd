const redirectToLogin = async (req, res, next) => {
  res.redirect(`${process.env.FRONT_END_BASE_URL}/login`);
};

module.exports = { redirectToLogin };
