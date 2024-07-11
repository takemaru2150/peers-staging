const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
require("dotenv").config();
const mail = process.env.MAIL_ACCOUNT;
const pass = process.env.MAIL_PASSWORD;

// ボディパーサの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// メール送信設定
const transporter = nodemailer.createTransport({
  service: "gmail", // 使用するメールサービス
  // host: 'localhost', // 使用するSMTPサーバーのホスト名
  // port: 1025, // 使用するポート番号（通常587か465）
  // port: 587, // 使用するポート番号（通常587か465）
  // secure: false, // TLSを使用する場合はtrueに設定（ポート465を使用）
  // auth: {
  //     user: "",
  //     pass: ""
  // }
  auth: {
    user: mail,
    pass: pass,
  },
});

// メールフォームのルート
app.post("/send", (req, res) => {
  const text = `
    お問い合わせ内容：${req.body.inquiry - type}
    ご担当者様：${req.body.name}
    会社名：${req.body.company}
    部署名：${req.body.department}
    メールアドレス：${req.body.email}
    電話番号：${req.body.phone}
    その他（ご質問など）：${req.body.message}

  `;
  const mailOptions = {
    from: req.body.email,
    to: mail,
    subject: "お問い合わせありがとうございます。",
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error.toString());
    }
    // log
    console.log(`Email sent: ${info.response}`);
    // res.status(200).send("Email sent: " + info.response);
    // 成功したらサンクスページにリダイレクト
    res.redirect("/thanks");
  });
});

// フロントエンドの提供（必要に応じて）
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/thanks", (req, res) => {
  res.sendFile(__dirname + "/thanks.html");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
