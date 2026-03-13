export const Quote = ({ text, author }: { text: string; author?: string }) => {
  return (
    <blockquote className="border-l-4 border-neutral-700 pl-6 py-3 my-8 italic text-lg text-neutral-700 dark:text-neutral-300">
      “{text}”
      {author && (
        <div className="mt-3 text-sm not-italic text-neutral-500">
          — {author}
        </div>
      )}
    </blockquote>
  );
};

// use it like this
// {
//   "text": "How do I actually generate all these renditions, chunks, and manifests?"
// }
// or
// {
//   "text": "How do I actually generate all these renditions, chunks, and manifests?",
//   "author": "Video Processing Engineer"
// }
