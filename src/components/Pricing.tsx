import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 1,
    price: 20,
    description:
      "Streamline your Discord community with all futures for seamless operation.",
    buttonText: "Get Started",
    benefitList: [
      "Access to all premium features", "Unlimited servers", "Support services"
    ],
  },
  // {
  //   title: "Premium",
  //   popular: 1,
  //   price: 5,
  //   description:
  //     "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  //   buttonText: "Start Free Trial",
  //   benefitList: [
  //     "4 Team member",
  //     "4 GB Storage",
  //     "Upto 6 pages",
  //     "Priority support",
  //     "lorem ipsum dolor",
  //   ],
  // },
  // {
  //   title: "Enterprise",
  //   popular: 0,
  //   price: 40,
  //   description:
  //     "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
  //   buttonText: "Contact US",
  //   benefitList: [
  //     "10 Team member",
  //     "8 GB Storage",
  //     "Upto 10 pages",
  //     "Priority support",
  //     "lorem ipsum dolor",
  //   ],
  // },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <div className="grid place-content-center">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold"><s>${pricing.price}</s></span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full"><a
              href="https://discord.com/oauth2/authorize?client_id=956901844192469012&permissions=120527571014&scope=bot"
              target="_blank"
              rel="noreferrer noopener"
              >{pricing.buttonText}</a></Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
