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
              The kind of person who likes to write my own playbook. I've spent 3 years building software across the spectrum, but I was always drawn to automation.
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
