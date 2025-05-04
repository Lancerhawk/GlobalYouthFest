import React from 'react';
import './Home.css';
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="presentation-text">Baderia Global Institute of Engineering and Management</div>
          <div className="presents-text">Presents</div>
          <h1 className="hero-title">YouthFest 2025</h1>
          <h2 className="hero-subtitle">Innovate. Create. Elevate.</h2>
          <p className="hero-description">
            Join us for the biggest tech event of the year at our college. Experience cutting-edge technology, 
            participate in exciting competitions, and network with industry professionals.
          </p>
          <div className="hero-cta">
            <button className="primary-btn" onClick={() => navigate('/events')}>Register Now</button>
            <button className="secondary-btn" onClick={() => navigate('/timeline')}>View Schedule</button>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <div className="info-icon">📅</div>
          <h3>Date & Time</h3>
          <p>May 16-18, 2025</p>
          <p>9:00 AM - 6:00 PM</p>
        </div>

        <div className="info-card">
          <div className="info-icon">📍</div>
          <h3>Venue</h3>
          <p>Baderia Global Institute of <br/>Engineering and Management College, JABALPUR</p>
          {/* <p>& Technology Block</p> */}
        </div>

        <div className="info-card">
          <div className="info-icon">🎟️</div>
          <h3>Entry</h3>
          <p>Free for students</p>
        </div>
      </div>

      <div className="highlights-section">
        <h2 className="section-title">Event Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>Hackathon</h3>
            <p>24-hour coding competition with amazing prizes. Join us for an exciting journey of innovation and problem-solving. Work with talented developers, use cutting-edge technologies, and compete for prestigious awards. Perfect for both beginners and experienced coders!</p>
          </div>
          <div className="highlight-card">
            <h3>Tech Talks</h3>
            <p>Inspiring sessions from industry leaders covering AI, blockchain, cloud computing, and more. Get insights into the latest technology trends and future innovations. Network with experts and learn about career opportunities in tech.</p>
          </div>
          <div className="highlight-card">
            <h3>Project Exhibition</h3>
            <p>Showcase of innovative student projects from various engineering disciplines. See cutting-edge solutions to real-world problems. Interactive demonstrations and opportunity to connect with brilliant young minds.</p>
          </div>
          <div className="highlight-card">
            <h3>Workshops</h3>
            <p>Hands-on sessions on emerging technologies including machine learning, IoT, robotics, and web development. Learn practical skills from industry experts. Take home valuable knowledge and certificates.</p>
          </div>
          <div className="highlight-card">
            <h3>Gaming Tournament</h3>
            <p>Compete in popular esports titles including Valorant, CS:GO, and League of Legends. Professional tournament setup with live streaming. Exciting prizes for winners and runners-up. Show off your gaming skills!</p>
          </div>
          <div className="highlight-card">
            <h3>Startup Fair</h3>
            <p>Connect with innovative startups and learn about entrepreneurship opportunities. Pitch your ideas to investors, meet successful founders, and explore potential internships. Perfect networking platform for aspiring entrepreneurs.</p>
          </div>
        </div>
      </div>

      <CountdownTimer />
    </div>
  );
};

export default Home;
