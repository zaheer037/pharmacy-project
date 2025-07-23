import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "fa-pills",
      title: "Drug Information",
      description: "Comprehensive database of medications with dosage, side effects, and interactions",
      link: "/drugs",
      color: "#4CAF50"
    },
    {
      icon: "fa-stethoscope", 
      title: "Disease & Treatment",
      description: "Detailed information about diseases, symptoms, and treatment guidelines",
      link: "/disease",
      color: "#2196F3"
    },
    {
      icon: "fa-person-pregnant",
      title: "Pregnancy Care",
      description: "Safe medication guidelines for pregnancy and breastfeeding",
      link: "/pregnancy", 
      color: "#FF9800"
    },
    {
      icon: "fa-user-doctor",
      title: "Clinical Data",
      description: "Secure patient data management and clinical documentation",
      link: "/clinical/access",
      color: "#9C27B0"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Medications" },
    { number: "500+", label: "Diseases" },
    { number: "24/7", label: "Access" },
    { number: "100%", label: "Secure" }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Welcome to <span className="text-gradient">PharmaCare Pro</span>
                </h1>
                <p className="hero-subtitle">
                  Your comprehensive healthcare companion providing instant access to drug information, 
                  disease guidelines, and clinical tools for better patient care.
                </p>
                <div className="hero-buttons">
                  <Link to="/drugs" className="btn btn-primary-modern me-3">
                    <i className="fa-solid fa-pills me-2"></i>
                    Explore Drugs
                  </Link>
                  <Link to="/login" className="btn btn-outline-primary">
                    <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
                    Healthcare Login
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="floating-card">
                  <i className="fa-solid fa-heartbeat"></i>
                  <h3>Healthcare Excellence</h3>
                  <p>Trusted by professionals worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="stat-card">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Comprehensive Healthcare Tools</h2>
            <p className="section-subtitle">
              Everything you need for informed medical decisions and patient care
            </p>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <Link to={feature.link} className="text-decoration-none">
                  <div className="feature-card">
                    <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                      <i className={`fa-solid ${feature.icon}`}></i>
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">
                Join thousands of healthcare professionals using PharmaCare Pro for better patient outcomes
              </p>
              <Link to="/login" className="btn btn-primary-modern btn-lg">
                <i className="fa-solid fa-rocket me-2"></i>
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          overflow-x: hidden;
        }

        .hero-section {
          background: linear-gradient(135deg, rgba(44, 82, 130, 0.05), rgba(79, 209, 199, 0.05));
          position: relative;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e2e8f0" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }

        .text-gradient {
          background: linear-gradient(135deg, #2c5282, #4fd1c7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #4a5568;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          margin-bottom: 2rem;
        }

        .floating-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
          animation: float 6s ease-in-out infinite;
          margin: 2rem;
        }

        .floating-card i {
          font-size: 3rem;
          color: #4fd1c7;
          margin-bottom: 1rem;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .fade-in {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stats-section {
          background: white;
          padding: 4rem 0;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          border-radius: 15px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2c5282;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #4a5568;
          font-weight: 600;
          margin: 0;
        }

        .features-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }

        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-icon i {
          font-size: 2rem;
          color: white;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .feature-description {
          color: #4a5568;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .feature-arrow {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        .cta-section {
          background: linear-gradient(135deg, #2c5282, #4fd1c7);
          padding: 5rem 0;
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .floating-card {
            margin: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
