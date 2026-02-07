import "./Abone.css";
import art3 from "./images/Gemini byju.png";

const Abone = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={art3} alt="Artist Studio" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h6 className="about-tag">ABOUT THE ARTIST</h6>

          <h1 className="about-title">
            Creating Art,
            <span> Sharing Stories</span>
          </h1>

          <h2>The Journey</h2>
<p>
  Over the years, I’ve developed my skills by continuously exploring and refining
  realistic drawing techniques. My journey is driven by a passion for capturing
  emotions, expressions and fine details through hand-drawn art.
</p>

<h2>My Approach</h2>
<p>
  I primarily work with graphite, charcoal and painting, allowing
  each medium’s unique textures and tones to shape the artwork. Every piece is
  created with careful attention to detail, balancing realism and artistic
  expression.
</p>

<h2>Commission Work</h2>
<p>
  I also undertake commissioned artworks, working closely with clients to turn
  their ideas, memories and references into personalized sketches. Each commission
  is approached with dedication to ensure it reflects both the subject and the
  client’s vision.
</p>

        </div>

      </div>
    </section>
  );
};

export default Abone;
