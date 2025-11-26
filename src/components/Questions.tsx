import './Questions.css';

const Questions = () => {
  const questions = [
    {
      id: 1,
      question: "Can you tell me about your current team?",
      description: "",
      icon: "👥"
    },
    {
      id: 2,
      question: "How integrated is AI into your workflow?",
      description: "",
      icon: "🤖"
    },
    {
      id: 3,
      question: "What kind of development work would I be doing?",
      description: "",
      icon: "💡"
    },
    {
      id: 4,
      question: "What would my day to day look like?",
      description: "",
      icon: "📅"
    },
    {
      id: 5,
      question: "What is your vision for the team you're building?",
      description: "",
      icon: "🌏"
    },
    {
      id: 6,
      question: "What do you think would be the most challenging aspect of the role?",
      description: "",
      icon: "🚀"
    }
  ];

  return (
    <div className="questions-section">
      <div className="questions-content">
        <div className="questions-header">
          <h2>Lets Start a Conversation</h2>
          <p>Questions I have about any new role</p>
        </div>

        <div className="questions-grid">
          {questions.map((item) => (
            <div key={item.id} className="question-card">
              <div className="question-icon">{item.icon}</div>
              <h3 className="question-text">{item.question}</h3>
              <p className="question-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
