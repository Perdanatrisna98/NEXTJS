"use client";

import styles from "./modal.module.css";

export default function Modal({ onClose }) {
  return (
    <div className={styles.modal}>
      <button className={styles["modal-close"]} onClick={onClose}>
        ×
      </button>
      <p>Email or Password is incorrect.</p>
      <p>Please try again.</p>
    </div>
  );
}