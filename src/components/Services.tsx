import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";
import { Badge } from "./ui/badge";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  badge?: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Collaboration",
    description:
      "Collaboration with Roleplay communities is very important to us. We are always open to suggestions and feedback from our users",
    icon: <ChartIcon />,
    badge: "PARTNERS",
  },
  {
    title: "Community Safety",
    description:
      `Contributions to keep community safe from cheaters, trolls is our priority, don't hesitate to report any suspicious users to our staff team. You can easly get the CONTRIBUTORS role by reporting a cheater or a troll in our discord server.`,
    icon: <WalletIcon />,
    badge: "CONTRIBUTORS",
  },
  {
    title: "Support & Help",
    description:
      "We are always here to help you with any issues you may have. Our support team is always available to help you with any issues you may have.",
    icon: <MagnifierIcon />,
    badge: "STAFF",
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Your Collaboration, Contribution is our priority. We are always here to help you with any issues you may have and, we will be happy to give you some roles bellows:
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description, badge }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                    <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
             {badge}
            </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
