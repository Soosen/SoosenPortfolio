import ColorfulBorder from "./ColorfulBorder";
import "./ContactBox.css";

function ContactBox(props) {
  return (
    <ColorfulBorder className="ContactBorder">
      <div className="ContactContainer">
        <div className="ContactHeader">
          <h1>{props.title}</h1>
        </div>
        <div className="ContactBottom">
          <div className="ContactImageAndText">
            <div className="ContactImageContainer">
              <img src={props.image}></img>
            </div>
            <div className="ContactTextContainer">
              <h1>{props.image_text}</h1>
            </div>
          </div>
          <div className="ContactDetailsContainer">
            <h1>{props.details}</h1>
          </div>
        </div>
      </div>
    </ColorfulBorder>
  );
}

export default ContactBox;
