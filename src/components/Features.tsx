import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/sugg.png";
import image3 from "../assets/wh-app.png";
import image4 from "../assets/AC3.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Anti-cheat protection",
    description:
      "Our bot will automatically panish any blacklisted users that join your server with that settings you configured (kick, ban, role, warn).",
    image: image4,
  },
  {
    title: "Whitelist application System",
    description:
      "Your community can easily apply to be whitelisted on your server and you can easily manage their applications.",
    image: image3,
  },
  {
    title: "Suggestions System",
    description:
      "Your community can easily suggest new features for your server and vote on other suggestions to help you improve your server.",
    image: image,
  },
];

const featureList: string[] = [
  "Anti-cheat protection",
  "Whitelist application System",
  "Suggestions System",
  "welcome messages",
  "and more..."
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
