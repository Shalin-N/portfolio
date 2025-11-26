import './Skills.css';

const Skills = () => {
  const roleAspects = [
    {
      icon: "🔧",
      title: "Technical Architect",
      description: "Own the end-to-end design and implementation of solutions, ensuring scalability and maintainability"
    },
    {
      icon: "👥",
      title: "Team Builder",
      description: "Foster a collaborative environment that encourages challenging and winning together"
    },
    {
      icon: "🧠",
      title: "Self-Directed Learner",
      description: "Work well in unstructured settings, proactively acquiring new skills and knowledge as needed"
    },
    {
      icon: "🗣️",
      title: "Clear Communicator",
      description: "Understand my audience and convey complex technical concepts in an accessible manner"
    }
  ];

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2>My Skillset</h2>
        <p>A summary of my key skills and strengths</p>
      </div>

      <div className="skills-content">
        <div className="skills-aspects">
          <div className="skills-grid">
            {roleAspects.map((aspect, index) => (
              <div key={index} className="skills-card">
                <div className="skills-icon">{aspect.icon}</div>
                <h4>{aspect.title}</h4>
                <p>{aspect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
