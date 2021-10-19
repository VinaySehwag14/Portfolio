import { Email, GitHub, LinkedIn, Phone, Twitter } from "@mui/icons-material";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lu33wgg",
        "template_m7o9vxo",
        formRef.current,
        "user_PPxd98hWiAGWiZpqB7RoS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact Me Here</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <Email className="contact_icon" />
              vinaysehwag14@gmail.com
            </div>
            <div className="contact-sites">
              <a
                href="https://github.com/VinaySehwag14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub
                  className="contact-sites_icon"
                  to="www.google.com"
                  rel="noreferrer noopener"
                />
              </a>
              <a
                href="https://twitter.com/VinaySehwag14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="contact-sites_icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-sehwag-0272611a9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="contact-sites_icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-heading">
            <h1>Send me an email</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea
                rows="8"
                placeholder="Hey Vinay, I absolutely love dogs too!"
                name="message"
              ></textarea>
              <button type="submit">Send</button>
              {done && <p> Sent </p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
