import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://cdn.discordapp.com/avatars/607640335841230859/cae13fa38b831188ef0c08e8c8c19b21?size=1024",
    name: "BAN",
    userName: "@bantheking_",
    comment: "This bot is awesome!",
  },
  {
    image: "https://cdn.discordapp.com/avatars/668839614718672896/c7ac56c8219ed6cf40dccbe2520da5a5?size=1024",
    name: "! AK-DRAGON",
    userName: "@dragon9886",
    comment:
      "Number of cheaters detected on my server decreased by 90% since I started using this bot.",
  },
  {
    image: "https://cdn.discordapp.com/avatars/1054437967843840070/300912ce2439931604a1743abfaf1ab2?size=1024",
    name: "! メ Łcσłσмвıαησ メ",
    userName: "@lcolombiano",
    comment:
      "I have been using this bot for a few months now and I am very satisfied with the results.",
  },
  {
    image: "https://cdn.discordapp.com/avatars/722233716612792442/179ad01709fb5e13e1707ac9a5489d7a?size=1024",
    name: "Hisoka",
    userName: "@hisoka_888",
    comment:
      "Our server has never been so safe, thanks to this bot. I highly recommend it.",
  },
  {
    image: "https://cdn.discordapp.com/avatars/334316627099123713/f09026ac3e9a316e3659d93e045712ce?size=1024",
    name: "DEXTER",
    userName: "@lmeryoul",
    comment:
      "This is the best project for fivem community i have ever seen, keep up the good work!",
  },
  {
    image: "https://cdn.discordapp.com/avatars/447912513653309442/a_51ebca79f38483abbcb48a446cb46836?size=1024",
    name: "stormix",
    userName: "@stormix",
    comment:
      " Nice project, good work",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Bot{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Here are some testimonials from our users.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
