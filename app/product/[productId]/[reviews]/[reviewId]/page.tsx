import {notFound} from "next/navigation"; 
export default function ReviewId({ params }: { params: { productId: string, reviews: string, reviewId: string } }) {
    if (parseInt(params.reviewId) > 10) {
        notFound();
    }
    return (
        <div>
            <h1>Review {params.reviewId} for product {params.productId}</h1>
        </div>
    );
}
