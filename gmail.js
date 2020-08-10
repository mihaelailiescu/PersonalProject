const nodemailer = require("nodemailer");
const { google } = require("googleapis");



//function sendEmail() {
const OAuth2 = google.auth.OAuth2;

const CLIENTCODE = "56147063562-lgohan1hdr25ab7gb6nuffa6l8vtrnri.apps.googleusercontent.com";
const SECRETCODE = "CNlbU16K6Pu6HdFxBVggBtvP";
const REFRESH = "1//04WHoEUhW1Ni0CgYIARAAGAQSNwF-L9Ir0xVf0uYFmUFv_5xwX54G-NWecNeHYtYXxjiDEP0RbFeRYOZcRGnjT4xUZ2xKox6W6Ps";
const oauth2Client = new OAuth2(
    CLIENTCODE,
    SECRETCODE,
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: REFRESH
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "mihaela.wawa@gmail.com",
        clientId: CLIENTCODE,
        clientSecret: SECRETCODE,
        refreshToken: REFRESH,
        accessToken: accessToken
    }
});

const mailOptions = {
    from: "mihaela.wawa@gmail.com",
    to: "alexandrucazacu.novohom@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;



smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
    console.log('message sent')
});