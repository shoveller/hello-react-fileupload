// @ts-ignore
import cors,{ CorsOptions } from 'cors';
// @ts-ignore
import express from 'express';
import { MulterError } from 'multer';
import { AddressInfo } from 'net';
import { upload } from './upload';

const app = express();
const whiteList = ["http://localhost:3000"];
const corsOptions: CorsOptions = {
  origin(origin, cb) {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      cb(null, true);

      return;
    }
    cb(new Error("Cors 위반!"));
  },
  credentials: true,
};

app.use(cors(corsOptions));

//Express Error Handling
app.use((err, req, res, next) => {
  // Check if the error is thrown from multer
  if (err instanceof MulterError) {
    res.sendStatus(400).send({ code: err.code })
  } else if (err) {
    // If it is not multer error then check if it is our custom error for FILE_MISSING
    if (err.message === "FILE_MISSING") {
      res.sendStatus(400).send({ code: '파일 없음' })
    } else {
      //For any other errors set code as GENERIC_ERROR
      res.sendStatus(500).send({ code: '서버 에러' })
    }
  }
});

app.post("/upload_file", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.sendStatus(400).send({ code: '파일 없음' })
  } else {
    res.send({ status: 'success' })
  }
});

const server = app.listen(8081, () => {
  const { address, port } = server.address() as AddressInfo;

  console.log(`서버시작 ${address}${port}`);
});
