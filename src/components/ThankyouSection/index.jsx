import thanksImg from "../../assets/images/illustration-thank-you.svg";
import "./styles.scss";

function ThankyouSection({ review }) {
  return (
    <div className="thankyou-wrapper">
      <img
        className="thankyou-img"
        src={thanksImg}
        alt="Thank you"
        title="Thank you"
      />
      <span className="result">You selected {review} out of 5 </span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankyouSection;
