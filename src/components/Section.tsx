type SectionProps = {
  id: string;
  children: React.ReactNode;
  background?: "white" | "light" | "image";
  imageUrl?: string;

  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
};

export default function Section({
  id,
  children,
  background = "white",
  imageUrl,
  justifyContent = "center",
  alignItems = "center",
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

        padding: "3rem",

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
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",

          display: "flex",
          flexDirection: "column",

          justifyContent,
          alignItems,

          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </section>
  );
}