import "./Contactone.css";
import { useState } from "react";

const Contactone = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    const subject = `New Art Inquiry from ${name}`;
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");

    // optional: clear form after click
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <div className="contact-left">
          <p className="contact-tag">GET IN TOUCH</p>

          <h1 className="contact-title">
            Let's <br />
            <span>Connect</span>
          </h1>

          <p className="contact-desc">
            Have a question about a piece, interested in commissioning custom artwork,
            or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSendMessage}>

            <div className="form-group">
              <label>YOUR NAME</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>YOUR EMAIL</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>YOUR MESSAGE</label>
              <textarea
                rows="4"
                placeholder="Tell me about your inquiry..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              SEND MESSAGE
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contactone;
