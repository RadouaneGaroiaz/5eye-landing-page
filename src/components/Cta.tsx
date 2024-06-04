import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All what you need for Your{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
               RP server{" "}
            </span>
            In One 
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Bot{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            5 Eye Bot is the best bot to protect your server from cheaters, trolls, and more. It's easy to use and powerful enough to keep your server safe.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto"><a
            href="https://discord.com/oauth2/authorize?client_id=956901844192469012&permissions=120527571014&scope=bot"
            className="w-full md:w-auto"
          
          >Add 5 Eye Bot</a></Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            <a
            href="https://discord.gg/ezRht2HbN3"
            className="w-full md:w-auto"
            >Join our Discord</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
