import Background from "../../../resources/media/video.webm";
import "./HomeScreen.css";

const Dashboard = () => {
  return (
    <div className="video-container" id="home">
      <video autoPlay muted loop>
        <source src={Background} type="video/mp4" />
      </video>
      <div className="caption">
        <span className="greeting-text">
          It never gets easier <br />
          You just get stronger
        </span>
        <div className="buttons">
          <button className="btn-hover color-11">Book a Trial</button>
          <button className="btn-hover color-11">Find Us</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
