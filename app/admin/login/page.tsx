"use client";

import { useState } from "react";
import "./login.css";
import Modal from "./components/modal/modal.module";

export default function Login() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <main>
      <div className="login-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button className="btn btn-primary" onClick={() => setIsOpenModal(true)}>
          Let&apos;s Login
        </button>
      </div>

      {isOpenModal && <Modal onClose={() => setIsOpenModal(false)} />}
    </main>
  );
}