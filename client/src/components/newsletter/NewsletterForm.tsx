import { useState, useEffect } from "react";
import { decode } from "html-entities";

const NewsletterForm = ({ status, message, onValidated }: any) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  useEffect(() => {
    if (status === "success") {
      clearField();
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  }, [status]);

  const clearField = () => {
    setEmail("");
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: any) => {
    setError("");
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit(event);
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      {" "}
      <form onSubmit={handleFormSubmit}>
        <div className="custom-newsletter">
          <input
            value={email}
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="text"
            className="custom-input"
            placeholder="Enter your email..."
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />

          <button className="custom-button" type="submit">
            Subscribe
          </button>
        </div>
        <div className="newsletter-form-info">
          {status === "sending" && <div className="sending">Sending...</div>}
          {status === "error" || error ? (
            <div className="newsletter-form-error">{getMessage(message)}</div>
          ) : null}
          {status === "success" && status !== "error" && !error && (
            <div className="success">{message}</div>
          )}
        </div>
      </form>
    </>
  );
};

export default NewsletterForm;
