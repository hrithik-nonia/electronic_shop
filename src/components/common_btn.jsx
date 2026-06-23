export default function CommonBtn({ text }) {
  const titleCase = (text) =>
    text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  return (
    <>
      <button className="mt-6 self-start bg-violet-600 border border-violet-600 hover:bg-transparent hover:text-violet-600 transition-colors duration-300 text-white font-medium md:px-7 md:py-3 py-1.5 px-3 rounded-full">
        {titleCase(text)}
      </button>
    </>
  );
}
