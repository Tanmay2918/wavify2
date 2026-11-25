// =============================================================================
// DATA.JS - Static Database for Songs, Artists, and Default Playlists
// =============================================================================

export const initialSongs = [
  // HINDI SONGS
  {
    id: 1,
    name: "Kesariya (Pure Acoustic)",
    artist: "Arijit Singh",
    category: "hindi",
    duration: "2:52",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    lyrics: ["Mujhko itna bataye koi...", "Kaise tujhse dil na lagaye koi...", "Kesariya tera ishq hai piya..."]
  },
  {
    id: 2,
    name: "Channa Mereya",
    artist: "Arijit Singh",
    category: "hindi",
    duration: "4:49",
    image: "https://c.saavncdn.com/103/Channa-Mereya-From-Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    lyrics: ["Acha chalta hoon, duaon mein yaad rakhna...", "Channa mereya mereya..."]
  },
  {
    id: 3,
    name: "Tum Hi Ho",
    artist: "Arijit Singh",
    category: "hindi",
    duration: "4:22",
    image: "https://i.scdn.co/image/ab67616d0000b2733be2eacadb3442ff6417c9d7",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    lyrics: ["Hum tere bin ab reh nahi sakte...", "Kyunki tum hi ho, ab tum hi ho..."]
  },
  {
    id: 4,
    name: "Ik Vaari Aa",
    artist: "Arijit Singh",
    category: "hindi",
    duration: "3:45",
    image: "https://i1.sndcdn.com/artworks-000222824094-vb9n41-t500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    lyrics: ["Ik vaari aa bhi ja yaara...", "Dhal rahi shaam hai..."]
  },
  {
    id: 5,
    name: "Baarishein",
    artist: "Anuv Jain",
    category: "hindi",
    duration: "3:27",
    image: "https://i.pinimg.com/736x/5f/21/a3/5f21a3da043eab09b08dde47a0bcc807.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    lyrics: ["Hawaayein chhu gayi mujhe...", "Palkon pe bikhri si baarishein..."]
  },
  {
    id: 6,
    name: "Mishri",
    artist: "Anuv Jain",
    category: "hindi",
    duration: "3:39",
    image: "https://c.saavncdn.com/945/Mishri-Hindi-2023-20230919173001-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    lyrics: ["Tu mishri ki dali jaisi...", "Ghul jaati hai saanson mein..."]
  },
  {
    id: 7,
    name: "Gul",
    artist: "Anuv Jain",
    category: "hindi",
    duration: "3:54",
    image: "https://c.saavncdn.com/266/Gul-Hindi-2021-20210706151615-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    lyrics: ["Dheere se khilta hai gul koi...", "Jaise tera muskurana..."]
  },
  {
    id: 8,
    name: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    category: "hindi",
    duration: "4:11",
    image: "https://c.saavncdn.com/401/Jo-Tum-Mere-Ho-Hindi-2024-20240731053953-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    lyrics: ["Jo tum mere ho toh kya darr hai...", "Har raat subah si lagti hai..."]
  },

  // ENGLISH SONGS
  {
    id: 9,
    name: "Blank Space",
    artist: "Taylor Swift",
    category: "english",
    duration: "3:51",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Taylor_Swift_-_Blank_Space_%28Official_Single_Cover%29.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    lyrics: ["Nice to meet you, where you been?", "I could show you incredible things..."]
  },
  {
    id: 10,
    name: "Anti-Hero",
    artist: "Taylor Swift",
    category: "english",
    duration: "3:20",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_Anti-Hero.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    lyrics: ["It's me, hi, I'm the problem, it's me...", "At tea time, everybody agrees..."]
  },
  {
    id: 11,
    name: "Love Story",
    artist: "Taylor Swift",
    category: "english",
    duration: "3:55",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/250px-Taylor_Swift_-_Love_Story.png",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    lyrics: ["We were both young when I first saw you...", "Romeo, take me somewhere we can be alone..."]
  },
  {
    id: 12,
    name: "Shake It Off",
    artist: "Taylor Swift",
    category: "english",
    duration: "3:39",
    image: "https://i.pinimg.com/564x/ef/60/f0/ef60f01baa446bc57d292b28fc57f50f.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    lyrics: ["Cause the players gonna play, play, play...", "I shake it off, I shake it off..."]
  },

  // PUNJABI SONGS
  {
    id: 13,
    name: "With You",
    artist: "AP Dhillon",
    category: "punjabi",
    duration: "2:34",
    image: "https://i.ytimg.com/vi/mZQH8CPQ-wo/maxresdefault.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    lyrics: ["Tere naal jeena mera...", "Tere naal marna ve..."]
  },
  {
    id: 14,
    name: "Excuses",
    artist: "AP Dhillon",
    category: "punjabi",
    duration: "2:56",
    image: "https://c.saavncdn.com/890/Excuses-English-2021-20210930112054-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    lyrics: ["Kehndi hundi si chann tak raah bana de...", "Taare ne pasand mainu..."]
  },
  {
    id: 15,
    name: "Brown Munde",
    artist: "AP Dhillon",
    category: "punjabi",
    duration: "4:07",
    image: "https://i.ytimg.com/vi/dpERuTFk8fw/maxresdefault.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    lyrics: ["Desi jehe geet aa trap jehi beat aa...", "Brown Munde..."]
  },
  {
    id: 16,
    name: "Dil Nu",
    artist: "AP Dhillon",
    category: "punjabi",
    duration: "3:42",
    image: "https://c.saavncdn.com/300/Dil-Nu-Lofi-Punjabi-2022-20221108011931-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    lyrics: ["Dil nu tere naal pyaar bada...", "Karan main intezaar bada..."]
  },
  {
    id: 17,
    name: "Lover",
    artist: "Diljit Dosanjh",
    category: "punjabi",
    duration: "3:08",
    image: "https://i.scdn.co/image/ab67616d0000b273fb47bdcc34dd45740c7816d7",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    lyrics: ["Tera ni lover, tera ni lover...", "Koi hor nahi bas tera ni lover..."]
  },
  {
    id: 18,
    name: "Ikk Kudi",
    artist: "Diljit Dosanjh",
    category: "punjabi",
    duration: "4:35",
    image: "https://c.saavncdn.com/777/Ik-Kudi-Hindi-2023-20230718011832-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    lyrics: ["Ikk kudi jida naam mohabbat...", "Ghum hai, ghum hai, ghum hai..."]
  },
  {
    id: 19,
    name: "Do You Know",
    artist: "Diljit Dosanjh",
    category: "punjabi",
    duration: "3:40",
    image: "https://c.saavncdn.com/810/Do-You-Know-Punjabi-2016-20240808172432-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    lyrics: ["Do you know main tenu kinna pyaar karda...", "Do you know..."]
  },
  {
    id: 20,
    name: "Softly",
    artist: "Karan Aujla",
    category: "punjabi",
    duration: "2:35",
    image: "https://c.saavncdn.com/549/Softly-Slowed-Reverb-Punjabi-2023-20231027213519-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    lyrics: ["Softly softly tu gallan kardi...", "Lagdi ae pari tu arshon utri..."]
  },
  {
    id: 21,
    name: "Tauba Tauba",
    artist: "Karan Aujla",
    category: "punjabi",
    duration: "3:28",
    image: "https://c.saavncdn.com/500/Tauba-Tauba-Remix-Hindi-2024-20241010094005-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    lyrics: ["Husn tera tauba tauba...", "Nakhra tera tauba tauba..."]
  },
  {
    id: 22,
    name: "Winning Speech",
    artist: "Karan Aujla",
    category: "punjabi",
    duration: "3:15",
    image: "https://i.scdn.co/image/ab67616d0000b2738d23f6fbacb44af144e34715",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    lyrics: ["Mehnat kitti te kismat nu badal ditta...", "Winning speech..."]
  },

  // HARYANVI SONGS
  {
    id: 23,
    name: "Russian Bandana",
    artist: "Dhanda Nyoliwala",
    category: "haryanvi",
    duration: "3:02",
    image: "https://c.saavncdn.com/414/Russian-Bandana-Lo-Fi-Hindi-2024-20241016121647-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    lyrics: ["Sir pe bandha russian bandana...", "Desi roop te swag purana..."]
  },
  {
    id: 24,
    name: "Mia Cara",
    artist: "Dhanda Nyoliwala",
    category: "haryanvi",
    duration: "2:48",
    image: "https://c.saavncdn.com/843/Mia-Cara-Hindi-2024-20240626053306-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    lyrics: ["Mia cara sun le gallan...", "Shehar ch naam gunjhe apna..."]
  },
  {
    id: 25,
    name: "Not Guilty",
    artist: "Dhanda Nyoliwala",
    category: "haryanvi",
    duration: "3:18",
    image: "https://i.ytimg.com/vi/E7ergOnpO1Q/maxresdefault.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    lyrics: ["Court ch khada te kehnda not guilty...", "Sach di raah te turre hamesha..."]
  },
  {
    id: 26,
    name: "Winter Meeting",
    artist: "Mitta Ror",
    category: "haryanvi",
    duration: "3:09",
    image: "https://c.saavncdn.com/880/Winter-Meeting-Hindi-2025-20251225150355-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    lyrics: ["Sardi ki shaam te garam chai...", "Winter meeting khas hui..."]
  },
  {
    id: 27,
    name: "Sheesha",
    artist: "Mitta Ror",
    category: "haryanvi",
    duration: "3:30",
    image: "https://c.saavncdn.com/034/Sheesha-Hindi-2024-20240913171750-500x500.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    lyrics: ["Sheeshe wangu saaf dil tera...", "Kade tute na eh yaari..."]
  }
];

export const initialArtists = [
  {
    id: "arijit",
    name: "Arijit Singh",
    genre: "Bollywood · Romantic · Acoustic",
    bio: "The voice of modern Indian cinema known for romantic and soulful melodies.",
    image: "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7"
  },
  {
    id: "anuvjain",
    name: "Anuv Jain",
    genre: "Indie Pop · Folk Acoustic",
    bio: "Indian indie singer-songwriter famous for minimalist guitar acoustic ballads.",
    image: "https://imageio.forbes.com/specials-images/imageserve/681261b75fd3fe8b5ebbc7ef/0x0.jpg?format=jpg&crop=1229,1229,x146,y144,safe&height=416&width=416&fit=bounds"
  },
  {
    id: "taylorswift",
    name: "Taylor Swift",
    genre: "Global Pop · Acoustic",
    bio: "Global music icon celebrated for storytelling, chart-topping pop and acoustic tracks.",
    image: "https://imageio.forbes.com/specials-images/imageserve/646e6affb9a2a85595a62c39/0x0.jpg?format=jpg&crop=1573,1574,x239,y256,safe&height=416&width=416&fit=bounds"
  },
  {
    id: "apdhillon",
    name: "AP Dhillon",
    genre: "Punjabi R&B · Trap Pop",
    bio: "Punjabi singer-songwriter and producer pioneering modern Punjabi R&B sounds.",
    image: "https://pearlentertainment.in/wp-content/uploads/classified-listing/2024/09/AP.Dhillon1.jpg"
  },
  {
    id: "diljit",
    name: "Diljit Dosanjh",
    genre: "Punjabi Global Pop",
    bio: "Superstar singer and performer entertaining fans worldwide with vibrant Punjabi hits.",
    image: "https://img.indiaforums.com/person/480x360/1/2900-diljit-dosanjh.webp"
  },
  {
    id: "karanaujla",
    name: "Karan Aujla",
    genre: "Punjabi Hip-Hop",
    bio: "Renowned Punjabi lyricist and hip-hop singer famous for chartbuster anthems.",
    image: "https://yt3.googleusercontent.com/Da4zbrS4XLxzb3xVNT14aKr22aBg1blJCuCBppbYglO_uDmElYopgoDk7XV6UWNxthI96XOYrw=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: "dhanda",
    name: "Dhanda Nyoliwala",
    genre: "Haryanvi Hip-Hop",
    bio: "Modern Haryanvi powerhouse artist mixing folk cadence with urban beats.",
    image: "https://yt3.googleusercontent.com/W8VHZ7ECusfUstiaqh4l87Ul59UChBSRMpLAXsDN-dKmLMbY7EEpUKqF-WZ8zitU8toi_uldkA=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: "mittaror",
    name: "Mitta Ror",
    genre: "Haryanvi Acoustic",
    bio: "Melodic regional vocalist creating warm acoustic tracks and folk stories.",
    image: "https://cdn-images.dzcdn.net/images/artist/f5a5dc0ae09c908d4991c2e3f40f8f90/1900x1900-000000-81-0-0.jpg"
  }
];

export const initialPlaylists = [
  { id: "p1", name: "Acoustic Focus", icon: "🕯️", color: "#d4a373", songIds: [1, 5, 6, 7, 8, 9] },
  { id: "p2", name: "Midnight Vibes", icon: "🌙", color: "#7c8ba1", songIds: [13, 14, 16, 2, 10, 20] },
  { id: "p3", name: "Punjabi & Haryanvi Beats", icon: "⚡", color: "#e2b385", songIds: [15, 17, 19, 21, 23, 24] },
  { id: "p4", name: "Global Essentials", icon: "🪐", color: "#a56a38", songIds: [9, 10, 11, 12, 1, 3] }
];
