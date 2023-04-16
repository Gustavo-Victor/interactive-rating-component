import iconStar from "../../assets/images/icon-star.svg";
import "./styles.scss";

function ReviewSection({ setReview, submit }) {
  const possibleChoices = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form id="form-review" onSubmit={handleSubmit} className="review-wrapper">
      {/*initial component*/}
      <img className="star-img" src={iconStar} alt="star" title="star" />
      <h2 className="title">How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        {possibleChoices.map((choice, index) => (
          <button
            type="button"
            key={index}
            className="btn"
            onClick={() => setReview(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <button type="submit" id="btn-submit" className="btn-submit">
        Submit
      </button>
    </form>
  );
}

export default ReviewSection;
