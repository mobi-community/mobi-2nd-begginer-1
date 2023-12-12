import { MockData } from "../mock/data";
const Review = () => {
    return (
    <div>
         <div>
            <div>{MockData.Review.User}</div>
            <div> {MockData.Review.Content}</div>
            <div> {MockData.Review.Stars}</div>
        </div>
    </div>
    )
  }

export default Review;  