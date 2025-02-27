import News1 from "../assets/Images/MovieNews/News1.svg";
import News2 from "../assets/Images/MovieNews/TIX ID News=Yowis Ben.svg";
import News3 from "../assets/Images/MovieNews/TIX ID News=Ghostbusters.svg";
import News4 from "../assets/Images/MovieNews/TIX ID News=House of Gucci.svg";
import News5 from "../assets/Images/MovieNews/TIX ID News=Raging Fire.svg";

interface MovieNews {
  id: number;
  image: string;
  buttonName: string;
  newsTitle: string;
  date: string;
  description: string;
  source: string;
  video: string;
}

export const MovieNewsData: MovieNews[] = [
  {
    id: 1,
    image: News1,
    buttonName: "Spotlight",
    newsTitle: "Spider-Man: No Way Home Releases New Trailer.",
    date: "08 Nov 2021",
    description: `Spider-Man: No Way Home is a 2021 superhero film based on the Marvel Comics character Spider-Man. It is the third installment in the MCU’s Spider-Man series, starring Tom Holland as Peter Parker. The movie follows the aftermath of Spider-Man: Far From Home, where Peter’s identity is revealed to the world by Mysterio.
In an attempt to undo this revelation, Peter seeks help from Doctor Strange, played by Benedict Cumberbatch. However, a botched spell disrupts the multiverse, leading to the arrival of villains from past Spider-Man films. These include Green Goblin (Willem Dafoe), Doctor Octopus (Alfred Molina), and Electro (Jamie Foxx).
As Peter battles these powerful foes, he struggles with the responsibility of being Spider-Man. He teams up with his friends, MJ (Zendaya) and Ned (Jacob Batalon), to find a way to fix the chaos. The film delivers intense action sequences, emotional moments, and nostalgic callbacks.
One of the most anticipated surprises is the return of Tobey Maguire and Andrew Garfield as their respective Spider-Men. Their inclusion in the film thrilled fans and created unforgettable moments of teamwork and redemption.
The film explores themes of sacrifice, identity, and second chances. It also sets up future MCU stories, hinting at the multiverse's impact. With stunning visual effects, thrilling battles, and heartfelt performances, No Way Home became a massive box office success.
It received widespread critical acclaim and is considered one of the best Spider-Man films. The movie’s emotional climax and Peter’s growth as a hero make it a must-watch.`,
    source: "Marvel Entertainment",
    video: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    id: 2,
    image: News2,
    buttonName: "Spotlight",
    newsTitle:
      "Facts About the Movie Yowis Ben Finale That You Need to Know Before Watching!",
    date: "09 Nov 2021",
    description: `Yowis Ben Finale is the final installment of the popular Indonesian comedy-drama film series Yowis Ben. The movie continues the journey of Bayu (played by Bayu Skak) and his friends as they navigate the ups and downs of their music career and personal lives.
This film serves as the grand conclusion to the Yowis Ben saga, which started as a simple story about a group of teenagers trying to make it in the music industry. It showcases the struggles of friendship, love, and fame while maintaining its signature humor.
The story picks up after the previous movie, where Bayu faces new challenges in both his career and personal relationships. His band, Yowis Ben, is at a crossroads, struggling with internal conflicts and external pressures.
One of the most anticipated aspects of Yowis Ben Finale is its emotional depth. Unlike the previous films, which focused more on comedy, this installment delivers a mix of drama, nostalgia, and heartfelt moments.
The movie features the return of beloved characters like Doni, Nando, and Yayan, each dealing with their own personal issues. Their friendship is tested as they face the reality of growing up and making tough life choices.
A major highlight of the film is its depiction of Javanese culture and language, making it a relatable experience for Indonesian audiences. Bayu Skak, who is also the director, ensures that the local humor and traditions remain an integral part of the story.
Yowis Ben Finale is not just about music but also about the importance of dreams, perseverance, and staying true to oneself. It explores the idea of letting go and moving forward, making it an emotional rollercoaster for fans of the series.
The film also includes memorable musical performances, with Yowis Ben delivering powerful songs that add to the emotional weight of the story.
With its unique blend of humor, drama, and music, Yowis Ben Finale is a must-watch for both longtime fans and newcomers. The film’s ending promises to be a satisfying conclusion to the beloved franchise.
`,
    source: "Starvision Plus",
    video: "https://www.youtube.com/watch?v=PbkyO3s4rq8",
  },
  {
    id: 3,
    image: News3,
    buttonName: "News",
    newsTitle: "Ghostbusters: Afterlife Arrives Featuring New Ghost Variations",
    date: "15 Nov 2021",
    description: `Ghostbusters: Afterlife is a 2021 supernatural comedy film that serves as a direct sequel to Ghostbusters (1984) and Ghostbusters II (1989). Directed by Jason Reitman, the son of original Ghostbusters director Ivan Reitman, the film brings a fresh yet nostalgic take on the franchise.
The story follows a single mother, Callie (Carrie Coon), and her two children, Phoebe (Mckenna Grace) and Trevor (Finn Wolfhard), who move to a small town after inheriting a mysterious farmhouse from Callie’s late father. They soon discover that their grandfather was Egon Spengler, one of the original Ghostbusters.
Phoebe, a science-loving kid, stumbles upon her grandfather’s old ghost-hunting equipment, including the iconic proton pack. As supernatural events begin to unfold in the town, she and her brother team up with their new friends and a local teacher, Mr. Grooberson (Paul Rudd), to uncover the truth.
One of the most exciting aspects of Ghostbusters: Afterlife is the introduction of new ghost variations. Unlike the classic green Slimer, this movie features unique ghosts such as Muncher, a metal-eating blue ghost, and the Mini-Pufts, mischievous mini versions of the Stay Puft Marshmallow Man.
The film also explores the legacy of the original Ghostbusters, featuring emotional callbacks and references to the past. It brings back familiar characters, including Dan Aykroyd, Bill Murray, and Ernie Hudson, reprising their roles in a touching tribute to the late Harold Ramis.
With a mix of comedy, horror, and adventure, Ghostbusters: Afterlife successfully bridges generations of fans. It delivers thrilling ghost-hunting action, emotional family moments, and an exciting new chapter for the franchise.
The film received positive reviews for its heartfelt story, strong performances, and nostalgic elements. It was praised for honoring the legacy of Ghostbusters while introducing new characters and expanding the supernatural world.
If you’re a fan of the original films or just love ghost-hunting adventures, Ghostbusters: Afterlife is a must-watch. Its blend of humor, mystery, and supernatural thrills makes it an entertaining and memorable experience.`,
    source: "Sony Pictures Entertainment",
    video: "https://www.youtube.com/watch?v=ahZFCF--uRY",
  },
  {
    id: 4,
    image: News4,
    buttonName: "News",
    newsTitle: "House of Gucci: The Story of Gucci's Sole Heir in 1955.",
    date: "9 Nov 2021",
    description: `House of Gucci is a 2021 biographical crime drama film directed by Ridley Scott, based on the true story of the Gucci family and the power struggles within their iconic fashion empire. The film stars Lady Gaga as Patrizia Reggiani, Adam Driver as Maurizio Gucci, and features an ensemble cast including Jared Leto, Al Pacino, and Jeremy Irons.
The story explores the rise and fall of the Gucci family, with a particular focus on Maurizio Gucci, the sole heir to the Gucci fortune in 1955. Born into luxury, Maurizio was the grandson of Guccio Gucci, the founder of the world-famous fashion house.
As a young man, Maurizio inherited a significant stake in the company after the death of his father, Rodolfo Gucci. However, his control over the brand led to internal conflicts with his relatives, particularly his uncle Aldo Gucci, played by Al Pacino.
The film delves into Maurizio’s relationship with Patrizia Reggiani, an ambitious woman who marries into the Gucci family and later becomes a central figure in one of the most shocking scandals in fashion history.
Patrizia’s influence over Maurizio grows, leading to business decisions that change the course of the company. The power struggle within Gucci intensifies as Maurizio eventually takes full control, leading to betrayal, financial struggles, and corporate battles.
By the early 1990s, Maurizio’s management decisions lead to the company’s downfall, resulting in him losing ownership of the brand to outside investors. His once-glorious reign ends in tragedy when he is assassinated in 1995—an act orchestrated by his ex-wife, Patrizia Reggiani.
The film captures the lavish lifestyle of the Gucci family, showcasing their wealth, drama, and the internal conflicts that led to their empire’s collapse. It also highlights themes of ambition, love, betrayal, and revenge.
With stunning cinematography, period-accurate fashion, and powerful performances, House of Gucci immerses audiences in the glamorous yet dark world of high fashion.
The movie provides a deep dive into the legacy of Gucci, revealing how a once-family-run brand transformed into a global powerhouse. The shocking real-life events behind the story make House of Gucci a must-watch for fashion lovers and true crime enthusiasts alike.`,
    source: "MGM",
    video: "https://www.youtube.com/watch?v=pGi3Bgn7U5U",
  },
  {
    id: 5,
    image: News5,
    buttonName: "News",
    newsTitle: "Donnie Yen's Action In The Latest Hong Kong Action Movie",
    date: "15 Nov 2021",
    description: `Donnie Yen, one of Hong Kong’s most legendary action stars, returns with breathtaking martial arts sequences and high-octane stunts in his latest Hong Kong action movie. Known for his iconic roles in Ip Man, Flash Point, and Raging Fire, Yen continues to showcase his unparalleled combat skills and screen presence.
The film, packed with intense fight choreography, blends traditional martial arts with modern action filmmaking techniques. Donnie Yen not only stars but also contributes as an action director, ensuring that every fight scene is meticulously crafted for maximum impact.
Set in the heart of Hong Kong, the movie follows Yen’s character, a skilled fighter caught in a web of crime, corruption, and revenge. His mission pushes him to his limits as he takes on dangerous enemies using his signature mix of Wing Chun, MMA, and brutal hand-to-hand combat.
One of the highlights of the film is its realistic and fast-paced fight scenes, which avoid excessive CGI in favor of practical stunts and real martial arts techniques. Yen, known for performing his own stunts, delivers jaw-dropping action sequences that keep audiences on the edge of their seats.
The movie features a blend of gunfights, high-speed chases, and intense one-on-one duels, reminiscent of Yen’s best works. Fans of Hong Kong action cinema will appreciate the return to gritty, well-choreographed combat scenes that define the genre.
Apart from the action, the film carries a deep emotional core, exploring themes of justice, redemption, and loyalty. Yen’s character is not just a fighter but a man driven by personal loss and a need to uphold his values in a world filled with betrayal.
The supporting cast includes some of Hong Kong’s finest action stars, adding depth and excitement to the film. Yen’s chemistry with his co-stars, along with a compelling storyline, elevates the movie beyond just an action spectacle.
With its mix of intense drama and breathtaking fight choreography, this film proves once again why Donnie Yen remains one of the greatest martial artists in cinema history. Fans of Hong Kong action films and martial arts enthusiasts won’t want to miss this adrenaline-pumping masterpiece.`,
    source: "Emperor Motion Pictures",
    video: "https://www.youtube.com/watch?v=FegEdtV8Ptc",
  },
];
