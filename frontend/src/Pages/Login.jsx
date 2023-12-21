import "./CSS/LoginPage.css";
export default function Login() {
  return (
    <section className="login-page">
      <div className="login-container">
        <h1>SignUp</h1>
        <div className="form-fields">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Email Address" />
          <input type="password" placeholder="Enter your Password" />
        </div>
        <button>Continue</button>
        <p className="form-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="form-agree-field">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}
