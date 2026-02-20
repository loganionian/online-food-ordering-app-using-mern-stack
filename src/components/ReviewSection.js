import React from 'react';

const ReviewSection = ({ reviews }) => {
    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;
    const positivePercentage = totalReviews ? (positiveReviews / totalReviews) * 100 : 0;

    return (
        <div>
            <h2>Reviews</h2>
            <p>{positivePercentage.toFixed(2)}% of reviews are positive.</p>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.text} - {review.rating} stars</li>
                ))}
            </ul>
        </json>
    );
};

export default ReviewSection;