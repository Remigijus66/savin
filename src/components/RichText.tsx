import { Fragment } from "react";
import type { PhraseLink } from "../content/types";

/**
 * Renderina pastraipą, frazes iš `links` paverčiant nuorodomis.
 * Tekstai turinio failuose lieka paprastu tekstu – be jokio žymėjimo.
 */
export default function RichText({
  text,
  links,
}: {
  text: string;
  links: PhraseLink[];
}) {
  if (links.length === 0) return <>{text}</>;

  // Ilgesnės frazės pirmos, kad trumpesnė neatkąstų dalies ilgesnės.
  const sorted = [...links].sort((a, b) => b.phrase.length - a.phrase.length);

  const pattern = sorted
    .map((l) => l.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  const parts = text.split(new RegExp(`(${pattern})`, "g"));

  return (
    <>
      {parts.map((part, index) => {
        const match = sorted.find((l) => l.phrase === part);

        return match ? (
          <a
            key={index}
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            {part}
          </a>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        );
      })}
    </>
  );
}
