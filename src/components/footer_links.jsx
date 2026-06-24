export default function FooterLinks({ content }) {
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold mb-10">Customer Support</h3>

        <ul className="space-y-2 ">
          {content.map(({ link, text }, i) => (
            <li key={i}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
