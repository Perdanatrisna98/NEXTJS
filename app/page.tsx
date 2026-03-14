export default function Home() {
  return (
    <div className="container mt-5">
      <h1>Selamat Datang di Aplikasi Saya</h1>
      <p>Ini adalah web Next.js pertama saya</p>
      <a href="/admin/login">
        <button className="btn btn-primary">Login</button>
      </a>
      <a href="/admin/register">
        <button className="btn btn-primary">Register</button>
      </a>
    </div>
  );
}