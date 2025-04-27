export default function ProductDetails({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>Details About Product Page{params.productId}</h1>
    </div>
  );
}