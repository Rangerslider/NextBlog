import Link from 'next/link';
export default function Home() {
  return (
    <>  
    <h1>Hello World!</h1>
    <Link style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            margin: "1rem",
            borderRadius: "1rem",
          }}  
          href="./blog">Blog</Link>
    <Link style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            margin: "1rem",
            borderRadius: "1rem",
          }} 
          href="./product">Product</Link>
    <Link style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            margin: "1rem",
            borderRadius: "1rem",
          }} 
          href="./order-product">Order</Link>

    </>
  )


}
