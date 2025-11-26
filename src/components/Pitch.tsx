import './Pitch.css';

const Pitch = () => {
  return (
    <div className="pitch-section">
      <div className="pitch-content">
        <div className="pitch-header">
          <h1 className="name">Shalin Naidoo</h1>
          <p className="tagline">I am a Creative that became an Software Engineer </p>
        </div>
        
        <div className="pitch-body">
          <div className="elevator-pitch">
            <p className="pitch-text">
              I've been writing code since I was 16 years old and have worked all across Tech (Production Support, Operations Research, Front-end, UI Design, Back-end, API integrations, Solution Architecture, Development Team Lead, Dev Ops, AI Engineering).
            </p>

            <p className="pitch-text">
              Through all those roles I was always drawn to automation. All types of automation such as automating my own workflow, making the platform more efficient, or designing processes that accelerate my team.
            </p>

            <p className="pitch-text">
              What really sets me apart though is my people skills, I worked many roles and have learnt to communicate with all walks of people. I have the ability to traverse business, people, and technology with confidence. Call it my unfair advantage.
            </p>

            <div className="fun-fact">
              <p className="fun-fact-text">
                <strong>Fun fact:</strong> I always wanted to be a Marine!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
