import "../Styles/Footer.css";
import { useState } from "react";

function Footer() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter email ❌");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Enter valid email ❌");
      return;
    }

    // success
    setMessage("Thank you for subscribing ✅");
    setIsSubscribed("true");        
    setEmail("");
  }

    {/*// auto remove message after 3 sec
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
    */}
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="newsletter">
          <h2>Unlock What’s Hidden ✨</h2>
          <p>
            Get early access to exclusive programs, workshops, and events.
            Stay updated with industry news and reports.
          </p>
        </div>

        {/* FORM START */}
        <form className="subscribe-box" onSubmit={handleSubscribe}>

         {/*    show input only if NOT subscribed*/}
          {
            !isSubscribed && (

              <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

            )}

          
          <button type="submit" className="subscribe-btn">
            {isSubscribed ? "Subscribed ✅" : "Subscribe"}
          </button>

          {/* MESSAGE */}
          {message && <p className="subscribe-msg">{message}</p>}

        </form>
        {/* FORM END */}

      </div>

      <hr />

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Learnaxis</h2>
        </div>

        <div>
          <h3>Contact info</h3>
          <p>29 Avenue Reine 1190, Brussels, Belgium</p>
          <p>0105 192 3556</p>
          <p>hello@learnaxis.com</p>
        </div>

        <div>
          <h3>Courses</h3>
          <p>Marketing Masterclass</p>
          <p>Framer Masterclass</p>
          <p>Growth Masterclass</p>
          <p>Data Visualisation</p>
          <p>UI/UX Design Masterclass</p>
          <p>AI Content Creation Masterclass</p>
        </div>

        <div>
          <h3>Useful Links</h3>
          <p>About us</p>
          <p>Courses</p>
          <p>Testimonials</p>
          <p>Benefits</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Error 404</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Learnaxis - Design & Developed by You
      </div>

      <div className="policy-conditions">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>

    </footer>
  );
}

export default Footer;