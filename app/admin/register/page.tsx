import "./register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="confirm-password" id="confirm-password" required />
      </div>
      <button className="btn btn-primary" type="submit">Register</button>
    </div>
  );
}