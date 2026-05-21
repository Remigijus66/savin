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


export default function Hero() {
  return (
      <section
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          lineHeight: 1.95, 
          fontSize: "1.05rem",
          display: "flex",
          flexDirection: "column",
          paddingTop: "4rem"
        }}
      >
  
  

              <div  style={{
                height: "400px",
                maxWidth: "100%",
                display: "block",
                borderRadius: "24px",
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(35, 46, 32, 0.12)",
                border: "1px solid var(--border-color)",
                backgroundColor: "green",
           
              }}>
          {/* <img
            src="/sea.jpg"
            alt="Jura"
            style={{
              // maxWidth: "560px",
              height: "300px",
              maxWidth: "90%",
              display: "block",
              borderRadius: "24px",
              objectFit: "cover",
              boxShadow: "0 10px 30px rgba(35, 46, 32, 0.12)",
              border: "1px solid var(--border-color)",
              }}
              /> */}
        <h1 style={{ color: "var(--color-primary)" }}>
          Geštaltinė psichoterapija
        </h1>
        </div>
    <div  style={{ padding: "3rem"}}>

        <p style={{ fontSize: "40px", color: "var(--color-accent)" }}>
          Jolita Palekaitė
        </p>

        <p style={{ fontSize: "40px", color: "var(--color-accent)" }}>
          +370 650 11233
        </p>

        <p style={{ fontSize: "40px", color: "var(--color-accent)" }}>
          jolita@savin.lt
        </p>
    
      </div >
    {/* </Section> */}
           
            </div>
          </section>
  );
}