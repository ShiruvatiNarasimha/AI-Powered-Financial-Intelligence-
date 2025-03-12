import React from "react";
import {
  Check,
  Sparkles,
  Shield,
  Users,
  Database,
  Download,
  Star,
  MessageSquare,
  Globe,
} from "lucide-react";

const tiers = [
  {
    name: "Professional",
    price: 180,
    description:
      "Ideal for individual financial advisors, investors, freelancers, and small startups.",
    features: [
      {
        icon: <MessageSquare className="text-blue-500" size={18} />,
        text: "Conversational Screener: limited to 10 prompts/month",
        highlight: false,
      },
      {
        icon: <Globe className="text-blue-500" size={18} />,
        text: "Global Database Access: Comprehensive coverage with no region restrictions",
        highlight: false,
      },
      {
        icon: <Sparkles className="text-blue-500" size={18} />,
        text: "Premium Financial Metrics and Valuation Ratios",
        highlight: true,
      },
      {
        icon: <Database className="text-blue-500" size={18} />,
        text: "Unlimited Peer Groups",
        highlight: false,
      },
      {
        icon: <Users className="text-blue-500" size={18} />,
        text: "One user: Designed for solo professionals",
        highlight: false,
      },
      {
        icon: <Shield className="text-blue-500" size={18} />,
        text: "Standard Email Support: Reliable assistance for your needs",
        highlight: false,
      },
    ],
    cta: "Start 14-day free trial",
    mostPopular: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: 240,
    description:
      "Ideal for private equity firms, investment banks, M&A advisors, valuation consultants, and corporate finance teams.",
    features: [
      {
        icon: <MessageSquare className="text-indigo-500" size={18} />,
        text: "Conversational Screener: Unlimited prompts",
        highlight: true,
      },
      {
        icon: <Globe className="text-indigo-500" size={18} />,
        text: "Global Database Access: Comprehensive coverage with no region restrictions",
        highlight: false,
      },
      {
        icon: <Sparkles className="text-indigo-500" size={18} />,
        text: "Premium Financial Metrics and Valuation Ratios",
        highlight: false,
      },
      {
        icon: <Database className="text-indigo-500" size={18} />,
        text: "Unlimited Peer Groups",
        highlight: false,
      },
      {
        icon: <Star className="text-indigo-500" size={18} />,
        text: "Access to New Features at no extra cost...and there is a lot coming!",
        highlight: true,
      },
      {
        icon: <Download className="text-indigo-500" size={18} />,
        text: "Save & Download Data: Export data in Excel",
        highlight: false,
      },
      {
        icon: <Users className="text-indigo-500" size={18} />,
        text: "Up to 5 Users",
        highlight: true,
      },
      {
        icon: <Shield className="text-indigo-500" size={18} />,
        text: "Dedicated Account Manager",
        highlight: false,
      },
    ],
    cta: "Contact Sales",
    mostPopular: false,
    badge: "Enterprise",
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Plans for every financial need
          </p>
          <p className="mt-5 text-xl text-gray-500 max-w-2xl mx-auto">
            Choose the plan that works best for you or your organization. All
            plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 group hover:shadow-2xl ${
                tier.mostPopular
                  ? "border-2 border-blue-500 bg-white shadow-xl"
                  : "border border-gray-200 bg-white shadow-lg"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`absolute top-6 right-6 z-10 ${
                    tier.mostPopular ? "bg-blue-500" : "bg-indigo-600"
                  } rounded-full py-1.5 px-4`}
                >
                  <p className="text-xs font-medium text-white uppercase">
                    {tier.badge}
                  </p>
                </div>
              )}

              {/* Header */}
              <div
                className={`p-8 ${
                  tier.mostPopular ? "bg-blue-50" : "bg-indigo-50"
                }`}
              >
                <h3
                  className={`text-2xl font-bold ${
                    tier.mostPopular ? "text-blue-700" : "text-indigo-700"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span
                    className={`text-5xl font-extrabold ${
                      tier.mostPopular ? "text-blue-600" : "text-indigo-600"
                    }`}
                  >
                    €{tier.price}
                  </span>
                  <span className="ml-1 text-xl font-medium text-gray-500">
                    /mo
                  </span>
                </div>
                <p className="mt-5 text-lg text-gray-600">{tier.description}</p>
              </div>

              {/* Features */}
              <div className="p-8 bg-white space-y-6">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  Everything you get:
                </h4>
                <ul className="space-y-5">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6">
                        {feature.icon || (
                          <Check className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      <span
                        className={`ml-3 text-base ${
                          feature.highlight
                            ? `font-medium ${
                                tier.mostPopular
                                  ? "text-blue-700"
                                  : "text-indigo-700"
                              }`
                            : "text-gray-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-4 px-6 border border-transparent rounded-xl text-center font-medium text-white shadow-lg transition-all duration-300 ${
                    tier.mostPopular
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
                      : "bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>

              {/* Decorative gradient effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                  tier.mostPopular
                    ? "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
                    : "bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our pricing?
          </p>
          <a
            href="#faq"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            View our FAQ
          </a>
        </div>

        {/* Enterprise callout */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-white">
                Need a custom solution?
              </h3>
              <p className="mt-4 text-lg text-blue-100">
                Contact our sales team to discuss custom pricing, dedicated
                support, and tailored solutions for your organization's specific
                needs.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-xl text-base font-medium text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Users className="h-8 w-8 mb-3 text-blue-200" />
                  <h4 className="font-bold">Team Collaboration</h4>
                  <p className="mt-2 text-blue-100 text-sm">
                    Custom user roles and permissions
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Shield className="h-8 w-8 mb-3 text-blue-200" />
                  <h4 className="font-bold">Priority Support</h4>
                  <p className="mt-2 text-blue-100 text-sm">
                    Dedicated account manager
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Database className="h-8 w-8 mb-3 text-blue-200" />
                  <h4 className="font-bold">Custom Data</h4>
                  <p className="mt-2 text-blue-100 text-sm">
                    Integrate your proprietary data
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <Sparkles className="h-8 w-8 mb-3 text-blue-200" />
                  <h4 className="font-bold">Advanced Features</h4>
                  <p className="mt-2 text-blue-100 text-sm">
                    Early access to beta features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
