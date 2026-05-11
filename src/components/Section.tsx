type SectionProps = {
  id: string;
  children: React.ReactNode;
  background?: "white" | "light" | "image";
  imageUrl?: string;
};

export default function Section({
  id,
  children,
  background = "white",
  imageUrl,
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
              //  width: "100%",  
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "3rem",
        backgroundImage: background === "image" ? backgroundStyle : undefined,
        backgroundColor: background !== "image" ? backgroundStyle : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </section>
  );
}