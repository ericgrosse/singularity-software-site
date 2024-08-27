import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [usdRate, setUsdRate] = useState(1);
  const [cadRate, setCadRate] = useState(1);

  useEffect(() => {
    // Fetch current exchange rates (you'll need to use a real API in production)
    const fetchRates = async () => {
      // This is a placeholder. Replace with actual API call.
      setCadRate(1.35); // Example rate: 1 USD = 1.35 CAD
    };
    fetchRates();
  }, []);

  const services = [
    { name: 'Full Stack Development', rate: 150 },
    { name: 'AI/ML Consulting', rate: 200 },
    { name: 'Code Review and Optimization', rate: 125 },
    { name: 'Technical Project Management', rate: 175 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Singularity Software</h1>
        <h2>Eric Grossé - Software Engineering Expert</h2>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>With over a decade of software engineering experience, I've worked with organizations ranging from 9-employee startups to multinational billion-dollar corporations. My expertise includes:</p>
          <ul>
            <li>Remote contract work with flexible hours</li>
            <li>Collaboration with UX designers, full-stack developers, management, and HR</li>
            <li>Daily programming as both a profession and hobby</li>
            <li>Active contribution to over 40 GitHub repositories</li>
            <li>Leadership of a public Discord server focused on machine learning and AI</li>
          </ul>
        </section>
        <section className="services">
          <h2>Services and Rates</h2>
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.name}</h3>
              <p>USD: ${service.rate}/hour</p>
              <p>CAD: ${(service.rate * cadRate).toFixed(2)}/hour</p>
            </div>
          ))}
        </section>
        <section className="cta">
          <h2>Ready to elevate your software projects?</h2>
          <a href="mailto:eric@singularitysoftware.com" className="cta-button">Contact Me</a>
        </section>
      </main>
      <footer>
        <p>© 2024 Singularity Software. All rights reserved.</p>
        <a href="https://github.com/ericgrosse" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://discord.gg/singularitysoftware" target="_blank" rel="noopener noreferrer">Discord</a>
      </footer>
    </div>
  );
}

export default App;
