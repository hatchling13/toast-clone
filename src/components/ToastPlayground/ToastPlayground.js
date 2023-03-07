import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import { ToastContext, VARIANT_OPTIONS } from "../ToastProvider";

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { createToast } = React.useContext(ToastContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    createToast(message, variant);

    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required={true}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((value, index) => (
              <label key={value} htmlFor={`variant-${value}`}>
                <input
                  id={`variant-${value}`}
                  type="radio"
                  name="variant"
                  value={value}
                  onChange={(event) => setVariant(event.target.value)}
                  checked={variant === VARIANT_OPTIONS[index]}
                />
                {value}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
