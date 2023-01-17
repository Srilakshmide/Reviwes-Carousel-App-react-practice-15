import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  render() {
    const {currentIndex} = this.state
    const {reviewsList} = this.props

    const handleLeftArrowClick = () => {
      if (currentIndex > 0) {
        this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
      }
    }

    const handleRightArrowClick = () => {
      if (currentIndex < reviewsList.length - 1) {
        this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
      }
    }

    const currentReview = reviewsList[currentIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={handleLeftArrowClick}
            data-testid="leftArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={currentReview.imgUrl} alt={currentReview.username} />
            <p className="user-name">{currentReview.username}</p>
            <p className="company-name">{currentReview.companyName}</p>
            <p className="description">{currentReview.description}</p>
          </div>
          <button
            type="button"
            onClick={handleRightArrowClick}
            data-testid="rightArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

/* <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="left-arrow"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="right-arrow"/> */
