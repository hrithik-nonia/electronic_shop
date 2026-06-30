import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Link2,
  MessageCircle,
} from "lucide-react";

const FB = () => (
  <div className="w-7 h-7 rounded-md bg-black flex items-center justify-center text-white text-xs font-bold">
    f
  </div>
);
const XIcon = () => (
  <div className="w-7 h-7 rounded-md bg-black flex items-center justify-center text-white text-xs font-bold">
    X
  </div>
);
const LinkedIn = () => (
  <div className="w-7 h-7 rounded-md bg-black flex items-center justify-center text-white text-xs font-bold">
    in
  </div>
);

const GENERAL_FAQS = [
  {
    question: "What is an FAQ section?",
    answer:
      'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
    withShare: true,
  },
  {
    question: "Why do FAQs matter?",
    answer:
      "FAQs save your customers time by answering common questions instantly, reducing support requests and helping people make decisions faster.",
  },
  {
    question: "Where can I add my FAQs?",
    answer:
      "You can add and edit your FAQs from the Help Center settings panel in your dashboard, under the Content tab.",
  },
];

const SETUP_FAQS = [
  {
    question: "How do I create a new FAQ category?",
    answer:
      'Go to Help Center settings, click "Add category", and give it a name. You can then add questions under that category.',
  },
  {
    question: "Can I reorder my FAQ items?",
    answer:
      "Yes, drag and drop any question within its category to change the order it appears to visitors.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base text-gray-900">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-700 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-700 shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>

          {item.withShare && (
            <div className="flex items-center gap-3 mt-4">
              <FB />
              <XIcon />
              <LinkedIn />
              <div className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center text-gray-500">
                <Link2 className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQHelpCenter() {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");

  const faqs = activeTab === "general" ? GENERAL_FAQS : SETUP_FAQS;

  const filtered = faqs.filter((f) =>
    f.question.toLowerCase().includes(query.toLowerCase()),
  );

  const handleTab = (tab) => {
    setActiveTab(tab);
    setOpenIndex(0);
  };

  return (
    <div className="min-h-screen bg-white lg:py-10">
      {/* Header */}
      <header className="border-b border-gray-100 py-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          TechShed Help Center
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently asked questions
          </h2>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Looking for something?"
              className="w-full border-b border-gray-300 pb-2 pr-8 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-600"
            />
            <Search className="w-4 h-4 text-gray-500 absolute right-1 bottom-2.5" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button
            onClick={() => handleTab("general")}
            className={`pb-3 text-sm font-medium border-b-2 -mb-px ${
              activeTab === "general"
                ? "text-purple-600 border-purple-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            General
          </button>
          <button
            onClick={() => handleTab("setup")}
            className={`pb-3 text-sm font-medium border-b-2 -mb-px ${
              activeTab === "setup"
                ? "text-purple-600 border-purple-600"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Setting up FAQs
          </button>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col -space-y-px">
          {filtered.length === 0 ? (
            <p className="text-gray-500 py-8 text-center">
              No results found for "{query}".
            </p>
          ) : (
            filtered.map((item, i) => (
              <AccordionItem
                key={item.question}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))
          )}
        </div>
      </main>

      {/* Floating chat button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg text-white transition-colors">
        <MessageCircle className="w-6 h-6" fill="white" />
      </button>
    </div>
  );
}
