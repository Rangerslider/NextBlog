import Link from "next/link";
export default function Blog() {
  return (
    <div>
      <h1>Bloging The Bike Video</h1>
      <Link style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            margin: "1rem",
            borderRadius: "1rem",
          }} 
          href="./">Home</Link>
    </div>
  );
}
// Nested Routes : ekhane app er modde ekta folder create korer por oi folder ke terget 
// kore r o multiple folder exists korbe tokon oi folder ke nested route bole. Ekhane bloging nam e ekta parent 
// folder create korlam ter moddhe 2ta folder create korlam jara different types er information rakhbe and segula as a
//  child hisebe behave korbe etai hosse nested rounts.