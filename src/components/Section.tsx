type SectionProps = {
  id: string;
  children: React.ReactNode;

  background?: "white" | "light" | "image";
  imageUrl?: string;

  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  height?: React.CSSProperties["height"];

  /**
   * Example:
   * [
   *   { color: "#ffffff", stop: "0%" },
   *   { color: "#ff0000", stop: "10%" },
   *   { color: "#ff0000", stop: "90%" },
   *   { color: "#0000ff", stop: "100%" },
   * ]
   */
  gradientStops?: {
    color: string;
    stop: string;
  }[];
};

export default function Section({
  id,
  children,
  background = "white",
  imageUrl,
  justifyContent = "center",
  alignItems = "center",
  height = "",
  gradientStops,
}: SectionProps) {
  const backgroundStyle =
    background === "light"
      ? "#f5f1ea"
      : background === "image"
      ? `url(${imageUrl})`
      : "#ffffff";

  const gradient =
    gradientStops && gradientStops.length > 0
      ? `linear-gradient(to bottom, ${gradientStops
          .map((g) => `${g.color} ${g.stop}`)
          .join(", ")})`
      : undefined;

  return (
    <section
      id={id}
      style={{
        minHeight: "100vh",

        backgroundImage:
          background === "image"
            ? gradient
              ? `${gradient}, ${backgroundStyle}`
              : backgroundStyle
            : gradient,

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
          maxWidth: "1400px",
          margin: "0 auto",

          height,

          display: "flex",
          flexDirection: "column",

          justifyContent,
          alignItems,
          border: "1px solid black",
        }}
      >
        {children}
      </div>
    </section>
  );
}