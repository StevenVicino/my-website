import React, { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_p52eppc", "template_xbcgj3h", toSend, "-25eiOQBSQY13t1g3")
      .then((response) => {
        window.prompt(
          "SUCCESS!",
          `Thank you for your email, ${toSend.from_name}`
        );
      })
      .catch((err) => {
        window.prompt("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-7 vertical-center">
          <h1 id="styled-heading-about">
            <div id="letter">L</div>
            <div id="letter">e</div>
            <div id="letter">t</div>
            <div id="letter">'</div>
            <div id="letter">s</div>
            <div id="letter">&nbsp;T</div>
            <div id="letter">a</div>
            <div id="letter">l</div>
            <div id="letter">k</div>
            <div id="letter">!</div>
          </h1>
          <h4 id="styled-paragraph-about">
            Get in touch via the form, or by emailing me at{" "}
            <a href="mailto:stevenvicino@gmail.com">stevenvicino@gmail.com</a>.
          </h4>
          <form className="d-flex flex-column" onSubmit={onSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="From Name"
              value={toSend.from_name}
              onChange={handleChange}
              id="input-box"
            />
            <input
              type="text"
              name="to_name"
              placeholder="To Name"
              value={toSend.to_name}
              onChange={handleChange}
              id="input-box"
            />
            <textarea
              type="text"
              name="message"
              placeholder="Your Message"
              value={toSend.message}
              onChange={handleChange}
              id="input-box"
            />
            <input
              type="text"
              name="reply_to"
              placeholder="Your Email"
              value={toSend.reply_to}
              onChange={handleChange}
              id="input-box"
            />
            <button type="submit" id="input-button">
              Send
            </button>
          </form>
        </div>
        <div className="letter-image col-4 vertical-center">
          <div className="animated-mail">
            <div className="back-fold"></div>
            <div className="letter">
              <div className="letter-border"></div>
              <div className="letter-title"></div>
              <div className="letter-context"></div>
              <div className="letter-stamp">
                <div className="letter-stamp-inner"></div>
              </div>
            </div>
            <div className="top-fold"></div>
            <div className="body"></div>
            <div className="left-fold"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
