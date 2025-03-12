import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    content:
      "ValueEq has completely transformed how we approach financial analysis. The AI-powered insights have helped us identify opportunities we would have otherwise missed.",
    author: "Sarah Johnson",
    role: "CFO, TechVentures Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content:
      "As a financial advisor, I need reliable data and insights. This platform delivers exactly that, with an intuitive interface that makes complex financial analysis accessible.",
    author: "Michael Chen",
    role: "Senior Financial Advisor, Wealth Partners",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content:
      "The predictive analytics feature has been a game-changer for our investment strategy. We've seen a 27% increase in portfolio performance since adopting ValueEq.",
    author: "Emily Rodriguez",
    role: "Investment Director, Global Assets Management",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content:
      "The risk assessment tools provided by ValueEq have revolutionized our approach to portfolio management. It's like having a crystal ball for market trends.",
    author: "David Park",
    role: "Risk Manager, Horizon Investments",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content:
      "The customer support team is exceptional. They've helped us customize the platform to our specific needs, making it an invaluable tool for our firm.",
    author: "Olivia Thompson",
    role: "Operations Director, Summit Financial",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content:
      "ValueEq's real-time market analysis has given us a competitive edge. We can now make informed decisions faster than ever before.",
    author: "James Wilson",
    role: "Portfolio Manager, Elite Capital",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

// Duplicate the testimonials to create a seamless loop
const extendedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="flex flex-col rounded-2xl shadow-xl overflow-hidden min-w-[320px] max-w-[320px] mx-4 bg-white">
    <div className="flex-1 p-8 flex flex-col justify-between h-full">
      <div className="flex-1">
        <p className="text-gray-500 italic text-lg leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>
      <div className="mt-8 flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full border-2 border-blue-200"
            src={testimonial.image}
            alt={testimonial.author}
          />
        </div>
        <div className="ml-4">
          <p className="text-base font-medium text-gray-900">
            {testimonial.author}
          </p>
          <p className="text-sm text-blue-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startTime: number | null = null;
    const speed = 0.5; // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (scrollContainer) {
        // Calculate the new scroll position
        scrollContainer.scrollLeft += speed;

        // If we've scrolled past the first set of testimonials, reset to beginning
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose ValueEq?
            </p>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-24 left-0 transform -translate-x-1/2">
            <div className="w-72 h-72 bg-blue-100 rounded-full opacity-30"></div>
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/3">
            <div className="w-96 h-96 bg-indigo-100 rounded-full opacity-30"></div>
          </div>

          {/* Continuous scrolling testimonials */}
          <div className="mt-16 relative z-10 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden py-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex animate-marquee">
                {extendedTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Read more success stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
