import './Role.css';

const Role = () => {
  const roleAspects = [
    {
      icon: "🚀",
      title: "Customer-First Engineer",
      description: "Work directly with customers to solve their unique challenges"
    },
    {
      icon: "🔧",
      title: "Production Mechanic",
      description: "Handle real-time production issues in live systems, ensuring uptime for critical operations"
    },
    {
      icon: "🌐",
      title: "API Specialist",
      description: "Build and maintain connections to external platforms, creating seamless experiences"
    },
    {
      icon: "🤝",
      title: "Bridge Builder",
      description: "Act as the liaison between engineering, product, strategy, sales and the customer and their teams"
    },
    {
      icon: "🔍",
      title: "Product Detective",
      description: "Understand and build what the customer wants, but also look for new avenues of work"
    },
    {
      icon: "🛠️",
      title: "Deployment Owner",
      description: "Be on the ground to help rapidly onboard new customers, while maintaining platform stability"
    }
  ];

  return (
    <div className="role-understanding-section">
      <div className="role-header">
        <h2>What I bring</h2>
        <p>How I see myself contributing to your mission and growth</p>
      </div>

      <div className="role-content">
        <div className="role-aspects">
          <div className="aspects-grid">
            {roleAspects.map((aspect, index) => (
              <div key={index} className="aspect-card">
                <div className="aspect-icon">{aspect.icon}</div>
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

export default Role;
