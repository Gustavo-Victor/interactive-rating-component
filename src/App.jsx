import { useState } from "react";
import Attribution from "./components/Attribution";
import ReviewSection from "./components/ReviewSection";
import ThankyouSection from "./components/ThankyouSection";
import "./styles/app.scss";

function App() {
  const [reviewNum, setReviewNum] = useState(0);
  const [submitted, setSubmitted] = useState(false);

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

export default App;
