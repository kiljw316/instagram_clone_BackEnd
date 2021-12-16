import path from "path";
import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./img");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
    },
  }),
});
