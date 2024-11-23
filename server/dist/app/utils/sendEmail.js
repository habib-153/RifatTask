"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const sendEmail = (to, html) => __awaiter(void 0, void 0, void 0, function* () {
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: config.NODE_ENV === 'production' ? true : false,
    //   auth: {
    //     user: config.nodemailer_user,
    //     pass: config.nodemailer_pass,
    //   },
    // });
    //  await transporter.sendMail({
    //   from: '"Maddison Foo Koch 👻" <h.r.sihab155@gmail.com>', // sender address
    //   to, // list of receivers
    //   subject: "Hello ✔", // Subject line
    //   text: "Hello world?", // plain text body
    //   html, // html body
    // });
});
exports.sendEmail = sendEmail;
