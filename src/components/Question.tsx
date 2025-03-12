import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqs = [
  {
    question: "What is ValueEQ , and who is it designed for?",
    answer:
      "ValueEQ is tailored for professionals and investors who want to take control of the valuation process and make smarter, faster decisions. It’s an ideal solution for Investors (Private Equity, Investment Banks, Family Offices), Consulting Firms (M&A advisors, Valuation Experts, Accountants, Tax Professionals), and Corporate Finance Teams.",
    category: "general",
  },
  {
    question: "How does AI-powered screening work?",
    answer:
      "Our AI-powered screening leverages advanced algorithms to process large volumes of data, uncovering patterns, trends, and opportunities based on your specific criteria. This technology delivers precise and actionable insights, enabling you to make efficient, well-informed decisions.",
    category: "features",
  },
  {
    question: "Can I customize my workspace and watchlists?",
    answer:
      "Yes! You can fully personalize your workspace to suit your workflow and focus on what matters most to you. Easily create, organize, and manage multiple watchlists to monitor key priorities and stay ahead in your valuation process.",
    category: "features",
  },
  {
    question: "What types of data does ValueEQ  provide?",
    answer: `ValueEQ provides one of the most comprehensive datasets for public companies, with historical and estimates data for over 65,000 listed companies worldwide. Covering 70+ stock exchanges across 120+ countries, our platform delivers over 1 million real-time data points to enhance your valuation accuracy.`,
    category: "data",
  },
  {
    question: "How is your data updated and verified?",
    answer: `Data quality is our top priority. Together with our data providers, we implement rigorous processes to ensure accuracy, reliability, and consistency:

- Global Cloud Infrastructure:
Data is distributed across multiple servers worldwide for uninterrupted availability.
- Regular Backups:
We maintain secure backups of data and configurations for quick recovery.
- Quality Control:
Continuous validation processes detect and correct errors or inconsistencies.
- Cross-Source Verification:
Multiple data sources are cross-referenced to enhance reliability.`,
    category: "data",
  },
  {
    question: "Can I try ValueEQ  before committing?",
    answer:
      "Absolutely! You can book a demo to explore the full capabilities of ValueEQ. We also offer a flexible monthly subscription option, giving you access without long-term commitments.",
    category: "pricing",
  },
  {
    question: "What pricing plans are available?",
    answer:
      "Our pricing is transparent, with no hidden fees. ValueEQ offers a powerful valuation tool at an accessible price point, helping you maximize value without compromising on quality. Refer to pricing section for more information.",
    category: "Plans",
  },
  {
    question: "What support options are available?",
    answer:
      "We provide responsive and accessible support directly through the platform, with an average response time of less than 2 hours. Our team is here to assist you with any questions or issues, ensuring a seamless experience.",
    category: "support",
  },
];

const categories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General" },
  { id: "features", name: "Features" },
  { id: "data", name: "Data" },
  { id: "pricing", name: "Pricing" },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <a
            href="#faq"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            FAQ
          </a>
          <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Got Questions? We've Got Answers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Find answers to commonly asked questions about our platform and
            services
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-300 ${
                    openIndex === index
                      ? "bg-blue-50"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {openIndex === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-white border-t border-gray-100">
                    <p className="text-gray-700 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">
                No results found. Try a different search term.
              </p>
            </div>
          )}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}
