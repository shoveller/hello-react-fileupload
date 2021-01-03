// @ts-ignore
import multer, { diskStorage } from 'multer';

const storage = diskStorage({
  destination(req, res, cb) {
    cb(null, 'uploads')
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})

export const upload = multer({
  storage
})
