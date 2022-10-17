import { addDataItemsTotalCount, getTestUsers } from "./dataFunctions";

const users = {
  items: [
    {
      id: 1,
      login: "user1",
      name: "Tony Stark",
      nickname: 'Iron-man',
      status: "Offline",
      city: "New York",
      about: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      friends: [2, 4, 5, 6, 19],
      avatar: "https://bit.ly/3RGqLZ0",
      wallpaper: "https://bit.ly/3dQ4OI8"
    },
    {
      id: 2,
      login: "user2",
      name: "Peter Parker",
      nickname: 'Spider-man',
      status: "Offline",
      city: "New York",
      about: "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles. With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
      friends: [1],
      avatar: "https://bit.ly/3SQEqgj",
      wallpaper: "https://bit.ly/3M3mHzT"
    },
    {
      id: 3,
      login: "user3",
      name: "Wade Wilson",
      nickname: "Deadpool",
      status: "Offline",
      city: "New York",
      about: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.",
      friends: [4],
      avatar: "https://bit.ly/3eAJZjY",
      wallpaper: "https://images.alphacoders.com/744/74493.jpg"
    },
    {
      id: 4,
      login: "user4",
      name: "Natasha Romanoff",
      nickname: "Black-Widow",
      status: "Offline",
      city: "New York",
      about: "After Thanos erases half of all life, Romanoff leads the Avengers for five years until she sacrifices herself, successfully helping the Avengers restore trillions of lives across the universe.",
      friends: [1, 3, 5, 6, 7, 8],
      avatar: "https://bit.ly/3S0izm7",
      wallpaper: "https://bit.ly/3fGJPIk"
    },
    {
      id: 5,
      login: "user5",
      name: "Thor Thundergod",
      nickname: "Thor",
      status: "Offline",
      city: "Asgard",
      about: "In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility.",
      friends: [1, 4, 8, 19],
      avatar: "https://bit.ly/3SWClzA",
      wallpaper: "https://bit.ly/3SV8OpE"
    },
    {
      id: 6,
      login: "user6",
      name: "Bruce Banner",
      nickname: "Hulk",
      status: "Offline",
      city: "New York",
      about: "Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
      friends: [1, 4],
      avatar: "https://bit.ly/3SJU50S",
      wallpaper: "https://bit.ly/3V1QUTY"
    },
    {
      id: 7,
      login: "user7",
      name: "Stephen Vincent Strange",
      nickname: "Doctor-Strange",
      status: "Offline",
      city: "New York",
      about: "Doctor Stephen Vincent Strange, M.D., Ph.D is a Master of the Mystic Arts.",
      friends: [4],
      avatar: "https://bit.ly/3VgbNLE",
      wallpaper: "https://bit.ly/3Va1c4F"
    },
    {
      id: 8,
      login: "user8",
      name: "Loki Liesgod",
      nickname: "Loki",
      status: "Offline",
      city: "Asgard",
      about: "Loki is considered a trickster god, known for being neither fully good nor evil since his main aim was always to create chaos. Despite his father being a giant, he is still counted a member of the Aesir—a tribe of deities including Odin, Frigg, Tyr, and Thor.",
      friends: [4, 5],
      avatar: "https://bit.ly/3CLHi8M",
      wallpaper: "https://bit.ly/3yuo05z"
    },
    {
      id: 9,
      login: "user9",
      name: "Arthur Curry",
      nickname: "Aquaman",
      status: "Offline",
      city: "Atlantis",
      about: "Arthur Curry is the King of Atlantis, the firstborn son of Queen Atlanna, the older maternal half-brother of Orm Marius, and a member of the Justice League, as well as the superhero known to the world as the Aquaman.",
      friends: [10, 13],
      avatar: "https://bit.ly/3CiSEjt",
      wallpaper: "https://bit.ly/3Va5xVB"
    },
    {
      id: 10,
      login: "user10",
      name: "Kal-El Kryptonian",
      nickname: "Superman",
      status: "Offline",
      city: "Gotham",
      about: "Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville.",
      friends: [9, 13, 18],
      avatar: "https://bit.ly/3RMp2AL",
      wallpaper: "https://bit.ly/3Evsb4L"
    },
    {
      id: 11,
      login: "user11",
      name: "Kung Lao",
      nickname: "Kung-Lao",
      status: "Offline",
      city: "Shaolin",
      about: "Of the Earthrealm warriors, Kung Lao is the most outspoken pacifist, although he will not hesitate to severely punish those who attack him, Earthrealm, or his friends. His trademark is his Razor-Rimmed Hat, which he can employ quite powerfully and effectively in combat.",
      friends: [16, 17],
      avatar: "https://bit.ly/3CiHkDR",
      wallpaper: "https://bit.ly/3S1dzxn"
    },
    {
      id: 12,
      login: "user12",
      name: "Yuri Boyka",
      nickname: "Undisputed",
      status: "Offline",
      city: "Los Angeles",
      about: "Yuri Boyka is a professional prison fighter who appears as the main antagonist in the Undisputed-2 film, and later became the main protagonist of the third film to the latest Undisputed film.",
      friends: [],
      avatar: "https://bit.ly/3Es5tuv",
      wallpaper: "https://bit.ly/3EAcB7Q"
    },
    {
      id: 13,
      login: "user13",
      name: "Bruce Wayne",
      nickname: "Batman",
      status: "Offline",
      city: "Gotham",
      about: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
      friends: [9, 10, 18],
      avatar: "https://bit.ly/3EvZ4ye",
      wallpaper: "https://bit.ly/3Cj5eiz"
    },
    {
      id: 14,
      login: "user14",
      name: "Harley Quinn",
      nickname: "Harley-Quinn",
      status: "Offline",
      city: "Gotham",
      about: "Harley Quinn's abilities include expert gymnastic skills, proficiency in weapons and hand-to-hand combat, complete unpredictability, immunity to toxins, and enhanced strength, agility, and durability. Quinn often wields clown-themed gag weapons, with an oversized mallet being her signature weapon.",
      friends: [15],
      avatar: "https://bit.ly/3CFqFf9",
      wallpaper: "https://bit.ly/3CIFv4v"
    },
    {
      id: 15,
      login: "user15",
      name: "Joker Merrymaker",
      nickname: "Joker",
      status: "Offline",
      city: "Gotham",
      about: "The Joker possesses no superhuman abilities, instead using his expertise in chemical engineering to develop poisonous or lethal concoctions and thematic weaponry, including razor-tipped playing cards, deadly joy buzzers, and acid-spraying lapel flowers.",
      friends: [14],
      avatar: "https://bit.ly/3CloKuU",
      wallpaper: "https://bit.ly/3CjwwVZ"
    },
    {
      id: 16,
      login: "user16",
      name: "Liu Kang",
      nickname: "Liu-Kang",
      status: "Offline",
      city: "Shaolin",
      about: "Liu became the Grand Champion of Mortal Kombat throughout the first four tournaments, a title that remained undisputed in the original timeline.",
      friends: [11, 17],
      avatar: "https://bit.ly/3ROrWVA",
      wallpaper: "https://bit.ly/3CIsZSr"
    },
    {
      id: 17,
      login: "user17",
      name: "Raiden Flashgod",
      nickname: "Raiden",
      status: "Offline",
      city: "Anywhere",
      about: "Immortal God of Thunder, Protector of the Earth. Raiden saved the Earth time and time again, gathering the bravest and strongest warriors of the time to participate in the Mortal Kombat tournament.",
      friends: [11, 16, 20],
      avatar: "https://bit.ly/3VctFa1",
      wallpaper: "https://bit.ly/3EtXoVX"
    },
    {
      id: 18,
      login: "user18",
      name: "Diana Princess",
      nickname: "Wander-woman",
      status: "Offline",
      city: "Themyscira",
      about: "Wonder Woman's origin story (from Golden to Bronze Age) relates that she was sculpted from clay by her mother Queen Hippolyta and was given a life as an Amazon, along with superhuman powers as gifts by the Greek gods.",
      friends: [10, 13],
      avatar: "https://bit.ly/3T93pLT",
      wallpaper: "https://bit.ly/3MgthmU"
    },
    {
      id: 19,
      login: "user19",
      name: "Carol Danvers",
      nickname: "Capitan-Marvel",
      status: "Offline",
      city: "New York",
      about: "Captain Marvel, is an impulsive United States Air Force pilot exposed to the energy of the Tesseract (which housed the Space Stone) while unknowingly amid an inter-universe war. The explosion gave her powerful superhuman powers and abilities.",
      friends: [1, 5],
      avatar: "https://bit.ly/3fV3Wm9",
      wallpaper: "https://bit.ly/3yvPXtz"
    },
    {
      id: 20,
      login: "user20",
      name: "Sonya Blade",
      nickname: "Sonya-MK",
      status: "Offline",
      city: "Los Angeles",
      about: "VIGILANCE. Decorated officer of the Special Forces. Sonya braved the Mortal Kombat tournament, defended Earthrealm, and rescued her partner, Jax Briggs. Serious to a fault, she never takes time for personal leave, preferring to remain vigilant until all realms are safe from conquest.",
      friends: [17],
      avatar: "https://bit.ly/3yBHeWH",
      wallpaper: "https://bit.ly/3S16Int"
    },
    {
      id: 21,
      login: "user21",
      name: "T'Challa Wakandian",
      nickname: "Black-Panter",
      status: "Offline",
      city: "Wakanda",
      about: "Black Panther is the title held by T'Challa, a member of the royal family of the fictional African country of Wakanda. After the death of his father, T'Challa claimed the throne and the role of Black Panther. He was exposed to a mystical herb that enhanced his strength and agility to near-superhuman levels.",
      friends: [],
      avatar: "https://bit.ly/3EHqxgt",
      wallpaper: "https://bit.ly/3yBvrrF"
    }
  ],
  totalCount: null
}

getTestUsers(users, 1);
addDataItemsTotalCount(users);

export default users;
