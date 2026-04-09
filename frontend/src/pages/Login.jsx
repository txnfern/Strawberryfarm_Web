import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // ✅ เพิ่มตรงนี้
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        setMessage(data.message);
        window.location.href = '/';   // redirect ไปหน้า Home
      } else {
        setMessage('');
        setError(data.error);
      }

    } catch {
      setError('❌ เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .auth-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Nunito', sans-serif;
          padding: 24px;
        }

        .auth-card {
          background: #fff;
          border-radius: 32px;
          width: 100%;
          max-width: 400px;
          padding: 40px 36px 36px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid #f0f0f0;
        }

        .blob {
          position: absolute;
          top: -30px;
          right: -30px;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #ff4757, #ff8e8e);
          border-radius: 40% 60% 55% 45% / 45% 55% 65% 35%;
        }

        .auth-title {
          font-size: 2.4rem;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 6px;
          letter-spacing: -0.5px;
        }

        .auth-subtitle {
          font-size: 0.95rem;
          color: #aaa;
          margin-bottom: 36px;
          font-weight: 600;
        }

        .input-group { margin-bottom: 20px; }

        .input-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #bbb;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: block;
        }

        .input-row {
          display: flex;
          align-items: center;
          border-bottom: 1.5px solid #e8e8e8;
          padding-bottom: 10px;
          gap: 10px;
          transition: border-color 0.2s;
        }

        .input-row:focus-within { border-color: #ff6b6b; }

        .input-icon {
          flex-shrink: 0;
          width: 20px;
          display: flex;
          align-items: center;
        }

        .input-row input {
          border: none;
          outline: none;
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          width: 100%;
          background: transparent;
        }

        .input-row input::placeholder { color: #ddd; font-weight: 600; }

        .forgot-row {
          display: flex;
          justify-content: flex-end;
          margin-top: -8px;
          margin-bottom: 28px;
        }

        .forgot-link {
          font-size: 0.75rem;
          font-weight: 800;
          color: #ff6b6b;
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        .btn-submit {
          width: 100%;
          padding: 16px;
          background: linear-gradient(45deg, #ff4757, #ff6b6b);
          border: none;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 25px rgba(255, 71, 87, 0.3);
          transition: transform 0.15s, box-shadow 0.15s;
          margin-bottom: 28px;
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 71, 87, 0.45);
        }

        .btn-submit:active { transform: translateY(0); }

        .switch-form {
          text-align: center;
          font-size: 0.9rem;
          color: #bbb;
          font-weight: 600;
        }

        .switch-form a {
          color: #ff6b6b;
          font-weight: 800;
          text-decoration: none;
        }

        .error-message {
          background: #fff3f3;
          color: #e05555;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .success-message {
          background: #f0faf4;
          color: #3aaa6e;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 16px;
        }
      `}</style>

      <div className="auth-page">
        <div className="auth-card">
          <div className="blob" />

          <h1 className="auth-title">Login</h1>
          <p className="auth-subtitle">Please sign in to continue.</p>

          <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <div className="input-row">
                <span className="input-icon">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                    <rect x="1" y="1" width="16" height="12" rx="2" stroke="#ccc" strokeWidth="1.5"/>
                    <path d="M1 3l8 5 8-5" stroke="#ccc" strokeWidth="1.5"/>
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="user@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="input-row">
                <span className="input-icon">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <rect x="1" y="7" width="14" height="10" rx="2" stroke="#ccc" strokeWidth="1.5"/>
                    <path d="M4 7V5a4 4 0 018 0v2" stroke="#ccc" strokeWidth="1.5"/>
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="forgot-row">
              <a href="/forgot-password" className="forgot-link">FORGOT</a>
            </div>

            {error && <div className="error-message">{error}</div>}
            {message && <div className="success-message">{message}</div>}

            <button type="submit" className="btn-submit">
              LOGIN <span>→</span>
            </button>

            <div className="switch-form">
              Don't have an account? <a href="/register">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;