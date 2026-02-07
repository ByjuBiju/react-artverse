import "./CreativeProcess.css";

const CreativeProcess = () => {
  return (
    <section className="process-section">
      <p className="process-tag">CREATIVE PROCESS</p>
      <h2 className="process-title">From Concept to Canvas</h2>

      <div className="process-cards">
        {/* Card 1 */}
        <div className="process-card active">
          <span className="process-number">01</span>
          <h3>Inspiration</h3>
          <p>
            Every artwork begins with a spark—an emotion, a memory, or a fleeting
            moment that demands to be captured.
          </p>
        </div>

        {/* Card 2 */}
        <div className="process-card">
          <span className="process-number">02</span>
          <h3>Creation</h3>
          <p>
            Through precise pencil strokes, the
            vision takes form, evolving organically with each mark.
          </p>
        </div>

        {/* Card 3 */}
        <div className="process-card">
          <span className="process-number">03</span>
          <h3>Completion</h3>
          <p>
            When the piece resonates with its initial inspiration, it’s ready
            to find its home and continue its story with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeProcess;
