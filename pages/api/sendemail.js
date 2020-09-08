const sgMail = require("@sendgrid/mail");

export default (req, res) => {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "eldar.dev@mail.ru",
    from: "eldar.dev@mail.ru",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log(error.response.body);
      // console.log(error.response.body.errors[0].message)
    });
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
