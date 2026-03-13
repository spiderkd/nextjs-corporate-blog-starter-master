export const ColorText = ({ text }: { text: string }) => {
  const parts = text.split(/(\[.*?\|.*?\])/g);

  return (
    <p>
      {parts.map((part, i) => {
        if (part.startsWith("[") && part.endsWith("]")) {
          const [word, color] = part.slice(1, -1).split("|");

          return (
            <span key={i} style={{ color }} className="font-semibold">
              {word}
            </span>
          );
        }

        return part;
      })}
    </p>
  );
};


// use it like
// {
//   "text": "Modern blogs use [Next.js|#6366f1] and [Headless CMS|#22c55e] to scale."
// }