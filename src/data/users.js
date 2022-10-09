const users = [
  {
    id: 1,
    name: "Iron-man",
    login: "user-1",
    status: "Offline",
    city: "New York",
    about: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    friends: [2, 4, 5, 6, 19],
    avatar: "https://bit.ly/3RGqLZ0",
    wallpaper: "https://bit.ly/3dQ4OI8"
  },
  {
    id: 2,
    name: "Spider-man",
    login: "user-2",
    status: "Offline",
    city: "New York",
    about: "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles. With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
    friends: [1],
    avatar: "https://bit.ly/3SQEqgj",
    wallpaper: "https://bit.ly/3M3mHzT"
  },
  {
    id: 3,
    name: "Deadpool",
    login: "user-3",
    status: "Offline",
    city: "New York",
    about: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. Wade Wilson is a small-time mercenary. He meets Vanessa and falls in love. Life is idyllic until one day he is diagnosed with terminal cancer.",
    friends: [4],
    avatar: "https://bit.ly/3eAJZjY",
    wallpaper: "https://images.alphacoders.com/744/74493.jpg"
  },
  {
    id: 4,
    name: "Natasha Romanoff",
    login: "user-4",
    status: "Offline",
    city: "New York",
    about: "After Thanos erases half of all life, Romanoff leads the Avengers for five years until she sacrifices herself, successfully helping the Avengers restore trillions of lives across the universe.",
    friends: [1, 3, 5, 6, 7, 8],
    avatar: "https://bit.ly/3S0izm7",
    wallpaper: "https://bit.ly/3fGJPIk"
  },
  {
    id: 5,
    name: "Thor",
    login: "user-5",
    status: "Offline",
    city: "Asgard",
    about: "In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind, hallowing, and fertility.",
    friends: [1, 4, 8, 19],
    avatar: "https://bit.ly/3SWClzA",
    wallpaper: "https://bit.ly/3SV8OpE"
  },
  {
    id: 6,
    name: "Bruce Banner",
    login: "user-6",
    status: "Offline",
    city: "New York",
    about: "Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
    friends: [1, 4],
    avatar: "https://bit.ly/3SJU50S",
    wallpaper: "https://bit.ly/3V1QUTY"
  },
  {
    id: 7,
    name: "Doctor Strange",
    login: "user-7",
    status: "Offline",
    city: "New York",
    about: "Doctor Stephen Vincent Strange, M.D., Ph.D is a Master of the Mystic Arts.",
    friends: [4],
    avatar: "https://bit.ly/3VgbNLE",
    wallpaper: "https://bit.ly/3Va1c4F"
  },
  {
    id: 8,
    name: "Loki",
    login: "user-8",
    status: "Offline",
    city: "Asgard",
    about: "Loki is considered a trickster god, known for being neither fully good nor evil since his main aim was always to create chaos. Despite his father being a giant, he is still counted a member of the Aesir—a tribe of deities including Odin, Frigg, Tyr, and Thor.",
    friends: [4, 5],
    avatar: "https://bit.ly/3CLHi8M",
    wallpaper: "https://bit.ly/3yuo05z"
  },
  {
    id: 9,
    name: "Aquaman",
    login: "user-9",
    status: "Offline",
    city: "Atlantis",
    about: "Arthur Curry is the King of Atlantis, the firstborn son of Queen Atlanna, the older maternal half-brother of Orm Marius, and a member of the Justice League, as well as the superhero known to the world as the Aquaman.",
    friends: [10, 13],
    avatar: "https://bit.ly/3CiSEjt",
    wallpaper: "https://bit.ly/3Va5xVB"
  },
  {
    id: 10,
    name: "Superman",
    login: "user-10",
    status: "Offline",
    city: "Gotham",
    about: "Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville.",
    friends: [9, 13, 18],
    avatar: "https://bit.ly/3RMp2AL",
    wallpaper: "https://bit.ly/3Evsb4L"
  },
  {
    id: 11,
    name: "Kung Lao",
    login: "user-11",
    status: "Offline",
    city: "Shaolin",
    about: "Of the Earthrealm warriors, Kung Lao is the most outspoken pacifist, although he will not hesitate to severely punish those who attack him, Earthrealm, or his friends. His trademark is his Razor-Rimmed Hat, which he can employ quite powerfully and effectively in combat.",
    friends: [16, 17],
    avatar: "https://bit.ly/3CiHkDR",
    wallpaper: "https://bit.ly/3S1dzxn"
  },
  {
    id: 12,
    name: "Yuri",
    login: "user-12",
    status: "Offline",
    city: "Los Angeles",
    about: "Yuri Boyka is a professional prison fighter who appears as the main antagonist in the Undisputed-2 film, and later became the main protagonist of the third film to the latest Undisputed film.",
    friends: [],
    avatar: "https://bit.ly/3Es5tuv",
    wallpaper: "https://bit.ly/3EAcB7Q"
  },
  {
    id: 13,
    name: "Batman",
    login: "user-13",
    status: "Offline",
    city: "Gotham",
    about: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
    friends: [9, 10, 18],
    avatar: "https://bit.ly/3EvZ4ye",
    wallpaper: "https://bit.ly/3Cj5eiz"
  },
  {
    id: 14,
    name: "Harley Quinn",
    login: "user-14",
    status: "Offline",
    city: "Gotham",
    about: "Harley Quinn's abilities include expert gymnastic skills, proficiency in weapons and hand-to-hand combat, complete unpredictability, immunity to toxins, and enhanced strength, agility, and durability. Quinn often wields clown-themed gag weapons, with an oversized mallet being her signature weapon.",
    friends: [15],
    avatar: "https://bit.ly/3CFqFf9",
    wallpaper: "https://bit.ly/3CIFv4v"
  },
  {
    id: 15,
    name: "Joker",
    login: "user-15",
    status: "Offline",
    city: "Gotham",
    about: "The Joker possesses no superhuman abilities, instead using his expertise in chemical engineering to develop poisonous or lethal concoctions and thematic weaponry, including razor-tipped playing cards, deadly joy buzzers, and acid-spraying lapel flowers.",
    friends: [14],
    avatar: "https://bit.ly/3CloKuU",
    wallpaper: "https://bit.ly/3CjwwVZ"
  },
  {
    id: 16,
    name: "Liu Kang",
    login: "user-16",
    status: "Offline",
    city: "Shaolin",
    about: "Liu became the Grand Champion of Mortal Kombat throughout the first four tournaments, a title that remained undisputed in the original timeline.",
    friends: [11, 17],
    avatar: "https://bit.ly/3ROrWVA",
    wallpaper: "https://bit.ly/3CIsZSr"
  },
  {
    id: 17,
    name: "Raiden",
    login: "user-17",
    status: "Offline",
    city: "Anywhere",
    about: "Immortal God of Thunder, Protector of the Earth. Raiden saved the Earth time and time again, gathering the bravest and strongest warriors of the time to participate in the Mortal Kombat tournament.",
    friends: [11, 16],
    avatar: "https://bit.ly/3VctFa1",
    wallpaper: "https://bit.ly/3EtXoVX"
  },
  {
    id: 18,
    name: "Wonder Woman",
    login: "user-18",
    status: "Offline",
    city: "Themyscira",
    about: "Wonder Woman, was an Amazon, and possessed similar powers of super-strength and flight. Unlike most/all other versions, her golden lasso could change shape into any form she desired, including a giant winged serpent.",
    friends: [10, 13],
    avatar: "https://bit.ly/3T93pLT",
    wallpaper: "https://bit.ly/3MgthmU"
  },
  {
    id: 19,
    name: "Carol Danvers",
    login: "user-19",
    status: "Offline",
    city: "New York",
    about: "Captain Marvel, is an impulsive United States Air Force pilot exposed to the energy of the Tesseract (which housed the Space Stone) while unknowingly amid an inter-universe war. The explosion gave her powerful superhuman powers and abilities.",
    friends: [1, 5],
    avatar: "https://bit.ly/3fV3Wm9",
    wallpaper: "https://bit.ly/3TbDtiW"
  },
  {
    id: 20,
    name: "User name",
    login: "user-20",
    status: "Offline",
    city: "somewhere...",
    about: "Some text about some user...",
    friends: [],
    avatar: "https://bit.ly/3MqaoOw",
    wallpaper: "https://bit.ly/3emGlKL"
  },
  {
    id: 21,
    name: "User name",
    login: "user-21",
    status: "Offline",
    city: "somewhere...",
    about: "Some text about some user...",
    friends: [],
    avatar: "https://bit.ly/3MqaoOw",
    wallpaper: "https://bit.ly/3emGlKL"
  },
  {
    id: 22,
    name: "User name",
    login: "user-22",
    status: "Offline",
    city: "somewhere...",
    about: "Some text about some user...",
    friends: [],
    avatar: "https://bit.ly/3MqaoOw",
    wallpaper: "https://bit.ly/3emGlKL"
  },
  {
    id: 23,
    name: "User name",
    login: "user-23",
    status: "Offline",
    city: "somewhere...",
    about: "Some text about some user...",
    friends: [],
    avatar: "https://bit.ly/3MqaoOw",
    wallpaper: "https://bit.ly/3emGlKL"
  },
  {
    id: 24,
    name: "User name",
    login: "user-24",
    status: "Offline",
    city: "somewhere...",
    about: "Some text about some user...",
    friends: [],
    avatar: "https://bit.ly/3MqaoOw",
    wallpaper: "https://bit.ly/3emGlKL"
  }
];

export default users;