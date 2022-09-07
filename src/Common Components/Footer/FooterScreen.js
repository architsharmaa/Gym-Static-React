import "./FooterScreen.css";
import MetaData from "../../../resources/Meta-Data/Meta-Data.json";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-row">
          <div className="location">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt"></i>
              <div className="cta-text">
                <h4>Find us</h4>
                <a href={MetaData.contactInfo.adressLink}>
                  <span style={{ paddingLeft: 10 }}>
                    {MetaData.contactInfo.address}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="single-cta">
              <i className="fas fa-phone"></i>
              <div className="cta-text">
                <h4>Call us</h4>
                <a href={"tel:" + MetaData.contactInfo.phone}>
                  <span>{MetaData.contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="email">
            <div className="single-cta">
              <i className="far fa-envelope-open"></i>
              <div className="cta-text">
                <h4>Mail us</h4>
                <a href={"mailto:" + MetaData.contactInfo.email}>
                  <span>{MetaData.contactInfo.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="row">
            <div className="devloper">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contact the Devlopers</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Contact the developers at email : archit04.sharma@gmail.com
                    or give a jingle at XXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
