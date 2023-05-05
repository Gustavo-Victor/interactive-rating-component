//components
//attribution 
function Attribution() {
    return (
        <div className="attribution">
            <div>
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                    Frontend Mentor
                </a>
            </div>
            <div>
                Coded by{" "}
                <a href="https://github.com/Gustavo-Victor/" target="_blank">
                    Gustavo Victor
                </a>
            </div>
        </div>
    );
}

//review section
function ReviewSection({ setReview, submit }) {
    const possibleChoices = [1, 2, 3, 4, 5];

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    return (
        <form id="form-review" onSubmit={handleSubmit} className="review-wrapper">
            {/*initial component*/}
            <img className="star-img" src="https://raw.githubusercontent.com/Gustavo-Victor/interactive-rating-component/b9704fd1a7053cc8188e8fe49739348fc23694e4/src/images/icon-star.svg" alt="star" title="star" />
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

//thank you section
function ThankyouSection({ review }) {
    return (
        <div className="thankyou-wrapper">
            <img
                className="thankyou-img"
                src="https://raw.githubusercontent.com/Gustavo-Victor/interactive-rating-component/b9704fd1a7053cc8188e8fe49739348fc23694e4/src/images/illustration-thank-you.svg"
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

//app
function App() {
    const [reviewNum, setReviewNum] = React.useState(0);
    const [submitted, setSubmitted] = React.useState(false);

    const submit = () => {
        if (reviewNum <= 0 || reviewNum > 5) return;
        setSubmitted(true);
    };

    return (
        <div className="app">
            <div className="container">
                {submitted ? (
                    <ThankyouSection review={reviewNum} />
                ) : (
                    <ReviewSection setReview={setReviewNum} submit={submit} />
                )}
            </div>
            <Attribution />
        </div>
    );
}

//main
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );