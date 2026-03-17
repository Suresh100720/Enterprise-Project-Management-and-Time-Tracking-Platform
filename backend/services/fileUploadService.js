import multer from "multer";

const storageConfiguration = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  }
});

const uploadMiddleware = multer({
  storage: storageConfiguration
});

export default uploadMiddleware;