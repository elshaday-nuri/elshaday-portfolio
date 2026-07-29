import { useForm, ValidationError } from "@formspree/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

function Contact() {
  const [state, handleSubmit] = useForm("mkodyege");

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Contact Me</p>

          <h2>Let&apos;s build something together</h2>

          <p>
            I am open to junior developer opportunities, internships,
            freelance projects, and professional collaborations.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-information">
            <p className="contact-intro">
              Have a project, opportunity, or question? Send me a message and I
              will be happy to connect.
            </p>

            <div className="contact-details">
              <a
  href="mailto:elshadayeyob8@gmail.com"
  className="contact-detail"
  aria-label="Send an email to Elshaday Nuri"
>
  <span className="contact-icon">
    <FaEnvelope />
  </span>

  <span>
    <small>Email</small>
    <strong>Send me an email</strong>
  </span>
</a>

              <div className="contact-detail">
                <span className="contact-icon">
                  <FaLocationDot />
                </span>

                <span>
                  <small>Location</small>
                  <strong>Virginia, United States</strong>
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/elshaday-nuri"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/elshaday-nuri-26200425a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {state.succeeded ? (
              <div className="form-success">
                <h3>Message sent successfully!</h3>

                <p>
                  Thank you for contacting me. I will respond as soon as
                  possible.
                </p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Your name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Job opportunity, project, or question"
                    required
                  />

                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your opportunity or project"
                    required
                  ></textarea>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  className="primary-button contact-button"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}

                  {!state.submitting && <FaPaperPlane />}
                </button>

                {state.errors && state.errors.length > 0 && (
                  <p className="form-error">
                    The message could not be sent. Please check the form and
                    try again.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;