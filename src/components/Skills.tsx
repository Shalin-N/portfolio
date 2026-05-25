import './Skills.css';

const Skills = () => {
  const items = [
    { title: 'Technical Architect', description: 'Own the end-to-end design and implementation of solutions, ensuring scalability and maintainability.' },
    { title: 'Team Builder', description: 'Foster a collaborative environment that encourages challenging and winning together.' },
    { title: 'Self-Directed Learner', description: 'Work well in unstructured settings, proactively acquiring new skills and knowledge as needed.' },
    { title: 'Clear Communicator', description: 'Understand my audience and convey complex technical concepts in an accessible manner.' },
    { title: 'Customer-First Engineer', description: 'Work directly with customers to solve their unique challenges, building what they want while looking for new avenues of work.' },
    { title: 'Production Mechanic', description: 'Handle real-time production issues in live systems, ensuring uptime for critical operations.' },
    { title: 'API Specialist', description: 'Build and maintain connections to external platforms, creating seamless experiences.' },
    { title: 'Bridge Builder', description: 'Act as the liaison between engineering, product, strategy, sales, and the customer.' },
  ];

  return (
    <div className="skills">
      <div className="section-header">
        <div className="section-eyebrow">Skills</div>
        <h2 className="section-title">What I bring</h2>
      </div>

      <div className="skills-grid">
        {items.map((item, i) => (
          <div key={item.title} className="skill-card">
            <span className="skill-num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="skill-title">{item.title}</h3>
            <p className="skill-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
