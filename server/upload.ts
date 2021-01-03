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
  storage,
  // 서버사이드에서 파일 크기에 제약을 줄 수 있다.
  limits: {
    fileSize: 1024 * 1024,
  },
  // 서버사이드에서 파일 타입에 제약을 줄 수 있다.
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error("INVALID_TYPE"))
    }
  },
})
