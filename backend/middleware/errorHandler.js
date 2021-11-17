exports.contactHandler = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      status: "error",
      message: "Full-name is required!",
    });
  }
  if (!req.body.email) {
    return res.status(400).json({
      status: "error",
      message: "Email is required!",
    });
  }
  if (!req.body.subject) {
    return res.status(400).json({
      status: "error",
      message: "How can we be of help?",
    });
  }
  if (!req.body.message) {
    return res.status(400).json({
      status: "error",
      message: "Briefly tell us how we can help you!",
    });
  }
  return next();
};

exports.contactHandler;
