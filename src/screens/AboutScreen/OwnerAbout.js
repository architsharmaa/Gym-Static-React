import "./AboutScreen.css";
import OwnerImage from "../../../resources/media/owner.png";
import MetaData from "../../../resources/Meta-Data/Meta-Data.json";

const OwnerAbout = () => {
  return (
    <div>
      <span className="owner-heading">Owner</span>
      <div className="owner-coantiner">
        <div id="first">
          {" "}
          <img
            src={OwnerImage}
            alt={MetaData.ownerMeta.ownerName}
            className="owner-image"
          ></img>
        </div>
        <div id="second">
          {" "}
          <h1 className="name">{MetaData.ownerMeta.ownerName}</h1>
          <span className="about">{MetaData.ownerMeta.AboutOwner}</span>
          <h2 className="heading-achievement">Achievements</h2>
          <span>
            {Object.values(MetaData.ownerMeta.Achievements).map(
              (item, index) => (
                <p key={index}>{" * " + item}</p>
              )
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OwnerAbout;
