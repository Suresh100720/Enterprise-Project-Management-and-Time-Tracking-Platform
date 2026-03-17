export const organizationIsolation = (req, res, next) => {

  if (!req.user || !req.user.organizationId) {
    return res.status(403).json({
      message: "Organization access denied"
    });
  }

  req.organizationId = req.user.organizationId;

  next();
};