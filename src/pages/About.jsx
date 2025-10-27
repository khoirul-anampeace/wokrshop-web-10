import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
      description: "Visionary leader with 10+ years in ecommerce",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      image:
        "https://t3.ftcdn.net/jpg/03/22/53/38/360_F_322533850_Lz5JL2K0nVqL48gjCiRLSa2ssxpdfyer.jpg",
      description: "Tech expert specializing in React and Node.js",
    },
    {
      id: 3,
      name: "Nadia Emilia Johnson",
      role: "Product Manager",
      image:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      description: "Passionate about creating amazing user experiences",
    },
  ];
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About ShopApp</h1>
          <p className="hero-subtitle">
            We're building the future of e-commerce with modern web technologies
            and exceptional user experiences.
          </p>
        </section>
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At ShopApp, we believe in making online shopping seamless,
                intuitive, and enjoyable. Our platform leverages the latest
                technologies like React Router to provide fast, single-page
                application experiences.
              </p>
              <p>
                We're committed to delivering high-quality products with
                exceptional customer service, all wrapped in a beautiful,
                user-friendly interface.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <strong>2024</strong>
                  <span>Founded</span>
                </div>
                <div className="stat">
                  <strong>50+</strong>
                  <span>Products</span>
                </div>
                <div className="stat">
                  <strong>100%</strong>
                  <span>Customer Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">🎯</div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="memberdescription">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Technology Section */}
        <section className="tech-section">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">⚛️</div>
              <h3>React</h3>
              <p>Modern UI library for building interactive interfaces</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🔄</div>
              <h3>React Router</h3>
              <p>Declarative routing for single-page applications</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🎨</div>
              <h3>CSS3</h3>
              <p>Modern styling with flexbox, grid, and animations</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Optimized for all devices and screen sizes</p>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Explore?</h2>
            <p>
              Discover our amazing products and experience seamless navigation.
            </p>
            <div className="cta-actions">
              <Link to="/products" className="btn btn-primary">
                View Products
              </Link>
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default About;
