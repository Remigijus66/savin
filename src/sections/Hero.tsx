// export default function Hero() {
//   return (
//     <div
//       style={{
//         backgroundImage: "url('/sea.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <div>
//         <h1 style={{ color: "#22352C" }}>
//           Geštaltinė psichoterapija
//         </h1>

//         <p style={{ fontSize: "40px", color: "#A23D01" }}>
//           Jolita Palekaitė
//         </p>

//         <p style={{ fontSize: "40px", color: "#A23D01" }}>
//           +370 650 11233
//         </p>

//         <p style={{ fontSize: "40px", color: "#A23D01" }}>
//           jolita@savin.lt
//         </p>
//       </div>
//     </div>
//   );
// }
import Section from "../components/Section";

export default function Hero() {
  return (
    <Section id="hero" background="image" imageUrl="/sea.jpg" justifyContent="flex-start" alignItems="center">
    
        <h1 style={{ color: "#22352C" }}>
          Geštaltinė psichoterapija
        </h1>

        <p style={{ fontSize: "40px", color: "#A23D01" }}>
          Jolita Palekaitė
        </p>

        <p style={{ fontSize: "40px", color: "#A23D01" }}>
          +370 650 11233
        </p>

        <p style={{ fontSize: "40px", color: "#A23D01" }}>
          jolita@savin.lt
        </p>
    
    </Section>
  );
}