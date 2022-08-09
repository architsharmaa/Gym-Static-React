import MetaData from "../../../resources/Meta-Data/Meta-Data.json";
import OwnerImage from "../../../resources/media/owner.png";

const TrainerAbout = () => {
  return (
    <>
      <span className="owner-heading">Trainers</span>
      {Object.values(MetaData.trainerMeta).map((item, index) => (
        <div className="owner-coantiner" key={index}>
          <div id="first">
            {" "}
            <img
              src={OwnerImage}
              alt={item.trainerName}
              className="owner-image"
            ></img>
          </div>
          <div id="second">
            {" "}
            <h1 className="name">{item.trainerName}</h1>
            <span className="about">{item.AboutTrainer}</span>
            <h2 className="heading-achievement">Achievements</h2>
            <span>
              {Object.values(item.TrainerAchievements).map((items, indexs) => (
                <p key={indexs}>{" * " + items}</p>
              ))}
            </span>
          </div>
          <div className="emptyspace"></div>
        </div>
      ))}
      <p style={{ textDecoration: "line-through red", color: "gray" }} />
    </>
  );
};

export default TrainerAbout;
