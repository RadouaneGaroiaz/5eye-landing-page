import { Statistics } from "./Statistics";
import pilot from "../assets/logo.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span>
                  About{" "}
                </span>
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                5 Eye Bot
                </span>
               
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Created by Dudu49 in an effort to combat the cheating in the FiveM community.

I am the frontend for a database of players who was banned from roleplay servers for (cheating, glitching, trolling ...) with settings to prevent those users from entering your discord server.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
