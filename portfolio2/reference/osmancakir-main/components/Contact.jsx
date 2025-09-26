import { useState } from "react";
import styles from "../styles/Contact.module.css";

function Contact() {
  const [status, setStatus] = useState({ type: null, message: null });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: null });

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqaqepnl", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form__container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mqaqepnl"
        method="POST"
      >
        <div className={styles.form__wrapper}>
          <div className={styles.input__grid}>
            <div className={styles.input__box}>
              <label className={styles.input__header} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className={styles.input}
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </div>

            <div className={styles.input__box}>
              <label className={styles.input__header} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className={styles.input}
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
          </div>


          <div className={styles.input__box}>
            <label className={styles.input__header} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              required
              placeholder="Message..."
              name="message"
              rows="5"
            ></textarea>
          </div>

        

          {status.message && (
            <div
              className={`${styles.status_message} ${
                status.type === "success" ? styles.success : styles.error
              }`}
            >
              {status.message}
            </div>
          )}

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? (
              <span className={styles.loader}>Sending...</span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
