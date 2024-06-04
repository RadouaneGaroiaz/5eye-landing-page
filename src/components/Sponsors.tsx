import discordSvg from "../assets/discord.svg";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
  link?: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <img src={discordSvg} alt="discord Logo"  />,
    name: "Ulimatex Roleplay",
    link:"https://discord.gg/ulimatex"
  },
  {
    icon: <img src={discordSvg} alt="discord Logo"  />,
    name: "No Life RP",
    link:"https://discord.gg/noliferp"
    
  },
  {
    icon: <img src={discordSvg} alt="discord Logo"  />,
    name: "QLF RP",
    link:"https://discord.gg/qlfrp"
  },
  {
    icon: <img src={discordSvg} alt="discord Logo"  />,
    name: "CAZAFONIA ROLEPLAY", 
    link:"https://discord.gg/cazafonia"
  },
  {
    icon: <img src={discordSvg} alt="discord Logo"  />,
    name: "ISOPHOBIA",
    link:"https://discord.gg/isophobia"
  },
  {
    icon: <img src={discordSvg} alt="discord Logo"  />,
    name: "GALAXY ROLEPLAY",
    link:"https://discord.gg/galaxyroleplay"
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Early supporters
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name, link}: SponsorProps) => (
           <a href={link} target="_blank" rel="noreferrer">
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
           
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          
          </div>
          </a>
        ))}
      </div>
    </section>
  );
};
