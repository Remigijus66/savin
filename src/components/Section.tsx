type SectionProps = {
  id: string;
  children: React.ReactNode;
  background?: "white" | "light" | "image";
  imageUrl?: string;

  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  height?: React.CSSProperties["height"];
};

export default function Section({
  id,
  children,
  background = "white",
  imageUrl,
  justifyContent = "center",
  alignItems = "center",
  height= "",
}: SectionProps) {
  const backgroundStyle =
    background === "light"
      ? "#f5f1ea"
      : background === "image"
      ? `url(${imageUrl})`
      : "#ffffff";

  return (
    <section
      id={id}
      style={{
        minHeight: "100vh",

        // padding: "3rem",

        backgroundImage:
          background === "image"
            ? backgroundStyle
            : undefined,

        backgroundColor:
          background !== "image"
            ? backgroundStyle
            : undefined,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          // border: "1px solid rgba(0,0,0,1)",
          // width: "100% ",
          maxWidth: "1400px",
          margin: "0 auto",
// height:"100%",
// height:"100vh",
height,
    //  padding: "3rem",
          display: "flex",
          flexDirection: "column",

          justifyContent,
          alignItems,
         
        }}
      >
        {children}
      </div>
    </section>
  );
}