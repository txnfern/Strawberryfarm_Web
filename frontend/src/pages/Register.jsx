import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('❌ รหัสผ่านไม่ตรงกัน');
      return;
    }
    try {
      const response = await fetch("https://strawberryfarm-web.vercel.app/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) { setMessage(data.message); setError(''); }
      else { setMessage(''); setError(data.error); }
    } catch {
      setError('❌ เกิดข้อผิดพลาดในการลงทะเบียน');
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

        .back-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #888;
          font-size: 1.2rem;
          padding: 0;
          margin-bottom: 20px;
          display: block;
          line-height: 1;
          font-family: 'Nunito', sans-serif;
        }

        .auth-title {
          font-size: 2.4rem;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
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
          margin-top: 12px;
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

          <button className="back-btn" onClick={() => window.history.back()}>←</button>
          <h1 className="auth-title">Create Account</h1>

          <form onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <div className="input-row">
                <span className="input-icon">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <circle cx="8" cy="5" r="4" stroke="#ccc" strokeWidth="1.5"/>
                    <path d="M1 17c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

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

            <div className="input-group">
              <label className="input-label">Confirm Password</label>
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}
            {message && <div className="success-message">{message}</div>}

            <button type="submit" className="btn-submit">
              SIGN UP <span>→</span>
            </button>

            <div className="switch-form">
              Already have an account? <a href="/login">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;