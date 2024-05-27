import sujit_r from "../../assets/sujit_r.webp";
import "./Hero.css";
export default function Hero() {
  return (
    <div id="home" className="hero">
      <img src={sujit_r} alt="" />
      <h1>
        <span> I am Sujit Kumar,</span> frontend developer based in India
      </h1>
      <p>
        A dedicated Frontend developer, with 2+ years of experience in creating
        dynamic,responsive and optimized web applications using React.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}
