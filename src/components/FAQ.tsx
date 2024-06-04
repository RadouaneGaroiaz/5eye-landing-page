import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What this bot for?",
    answer: "This bot keeps your Roleplay community safe and organized.",
    value: "item-1",
  },
  {
    question: "How to invite the bot?",
    answer:
      "You can invite the bot by clicking on the 'Get Started' above. You will be redirected to the Discord website where you can select the server you want to invite the bot to",
    value: "item-2",
  },
  {
    question:
      "Why i'm blacklisted ? How can i get unblacklisted ?",
    answer:
      "You are blacklisted because you have violated the rules of Fivem servers by using cheats or hacks. You can get unblacklisted by contacting the support in our discord server.",
    value: "item-3",
  },
  {
    question: "How can i get support ?",
    answer: "You can get support by joining our discord server and creating a ticket in the support channel.",
    value: "item-4",
  },
  {
    question:
      "How can i contribute to the project ?",
    answer:
      "You can contribute to the project by contacting us in our discord server and telling us how you can help us. We are always looking for new developers, designers and support agents.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://discord.gg/ezRht2HbN3"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
