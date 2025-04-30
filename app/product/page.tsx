// import Link from "next/link";
// export default function ProductPage() {
//     return (
//         <>
//             <h1>Product Models are show here</h1>
//             <p>Product1</p>
//             <p>Product2</p>
//             <p>Product3</p>
//             <Link href="./">Home</Link>

//         </>
//     )
// }
//Dynamic Routes : ekhane amra jodi kono route er moddhe kono variable pass kori tahole oi route ta dynamic route bole.
//product er jonno ekta folder create korlam ekn product page er moddhe 100 ta product thakbe and 100ta product
//er jonno alada information thakbe ejonno amra dynamic routes use korte pari dynamics routes er jonno [] bracket 
//er moddhe folder create korle oi folder er jonno ekta dynamic route create hobe.Then er vitore params create korle 
// sei params id dynamicly change hobe. 


// error handling 
import Link from "next/link";
export default function ProductList() {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="products/3">Product 3</Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}