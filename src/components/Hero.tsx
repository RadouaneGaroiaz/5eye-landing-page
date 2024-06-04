import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { SketchLogoIcon  } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#fea347]  to-[#ff7f00] text-transparent bg-clip-text">
              5 Eye
            </span>{" "}
            Bot
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Roleplay
            </span>{" "}
            servers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          The only bot you need to manage your roleplay server, and keep it safe.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3"><a
          href="https://discord.com/oauth2/authorize?client_id=956901844192469012&permissions=120527571014&scope=bot"
          target="_blank"
          rel="noreferrer noopener"
          >
          Invite bot</a></Button>
          <Popover>
          <PopoverTrigger asChild>
          <a
            rel="noreferrer noopener"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <s>Get Premium</s>
            <SketchLogoIcon className="ml-2 w-5 h-5" />
          </a>
      </PopoverTrigger>
      <PopoverContent>Don't worry it's free 😂</PopoverContent>
      </Popover>

     
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
