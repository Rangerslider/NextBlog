// import {notFound} from "next/navigation"; 
// export default function ReviewId({ params }: { params: { productId: string, reviews: string, reviewId: string } }) {
//     if (parseInt(params.reviewId) > 10) {
//         notFound();
//     }
//     return (
//         <div>
//             <h1>Review {params.reviewId} for product {params.productId}</h1>
//         </div>
//     );
// }
"use client";
import { notFound } from "next/navigation";

// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * max);
// }

export default function ProductDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {

//   const random = getRandomInt(2);
//   if (random === 1) {
//     throw new Error("Error loading review");
//   }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}