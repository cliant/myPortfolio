import './Interview.css';
import { interviewQuestions } from '../data/InterviewData'; 

function Interview() {
  return (
    <main className="interview-content">
      <div className="interview-box">
        <div className="interview-qa">
          {interviewQuestions.map((item, index) => (
            <div key={index}>
              <div className="interview-section">
                <h2>Q{index + 1}: {item.question}</h2>
                <p>A: {item.answer}</p>
              </div>
              {index < interviewQuestions.length - 1 && <hr className="divider" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Interview;