export default function FaqPage() {
  const faqs = [
    {
      question: "Are children welcome?",
      answer: "Yes!",
    },
    {
      question: "What is the weather like?",
      answer: "The average weather for February is 72/56 (high/low).",
    },
  ];

  return (
    <div id="faq" className="py-12">
      <div className="text-center">
        <h2>FAQ</h2>
        <p className="mt-10">
          Here are some questions that have been asked. Contact us if you have
          more!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {faqs.map((faq, index) => (
          <div key={index}>
            <p className="font-bold">{faq.question}</p>
            <p className="mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
