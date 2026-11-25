/* ==========================================================================
   WAVIFY - Music Streaming Web Application
   Frontend Project (HTML, CSS, JavaScript)
   
   NOTE FOR STUDENTS (PRACTICAL EXAM & VIVA GUIDE):
   This JavaScript file is divided into clear, simple sections:
     1. Song & Artist Data (Arrays of Objects)
     2. App State Variables (Simple variables & localStorage)
     3. Audio Player Functions (play, pause, next, prev, progress, volume)
     4. UI Display / Rendering Functions (innerHTML, card generation)
     5. Navigation & Search Functions (show sections, search filter)
     6. Login & User Auth Functions (forms, modals, session storage)
     7. Subscription & Checkout Functions (plans, mock payment)
     8. Theme Switcher (Dark & Light mode)
     9. Initial Setup (runs when page loads)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. SONG & ARTIST DATA (Simple JavaScript Arrays)
// --------------------------------------------------------------------------

// Array of all available songs
const songs = [
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

// Array of Featured Artists
const artists = [
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

// Default Built-in Playlists
let playlists = [
  { id: "p1", name: "Acoustic Focus", icon: "🕯️", color: "#d4a373", songIds: [1, 5, 6, 7, 8, 9] },
  { id: "p2", name: "Midnight Vibes", icon: "🌙", color: "#7c8ba1", songIds: [13, 14, 16, 2, 10, 20] },
  { id: "p3", name: "Punjabi & Haryanvi Beats", icon: "⚡", color: "#e2b385", songIds: [15, 17, 19, 21, 23, 24] },
  { id: "p4", name: "Global Essentials", icon: "🪐", color: "#a56a38", songIds: [9, 10, 11, 12, 1, 3] }
];


// --------------------------------------------------------------------------
// 2. APP STATE VARIABLES (Simple variables keeping track of player state)
// --------------------------------------------------------------------------

// HTML5 <audio> DOM element
const audioElement = document.getElementById("wavifyAudio");

// Player state variables
let currentSongIndex = 0;              // Current active song index in queue
let currentQueue = [...songs];         // Current playlist / song list
let isPlaying = false;                 // true when song is playing, false when paused
let isShuffle = false;                 // true if random shuffle is on
let isRepeat = false;                  // true if single song repeat is on
let isMuted = false;                   // true if volume is muted
let currentVolume = 80;                // Volume percentage (0 to 100)

// Data saved in browser memory (localStorage)
let currentUser = JSON.parse(localStorage.getItem("wavify_user")) || null;
let likedSongIds = JSON.parse(localStorage.getItem("wavify_liked")) || [1, 5, 9, 13];
let customPlaylists = JSON.parse(localStorage.getItem("wavify_playlists")) || [];
let recentSongIds = JSON.parse(localStorage.getItem("wavify_recents")) || [1, 9, 5];
let currentTheme = localStorage.getItem("wavify_theme") || "dark";
let isYearlyBilling = false;


// --------------------------------------------------------------------------
// 3. AUDIO PLAYER FUNCTIONS
// --------------------------------------------------------------------------

/**
 * Plays a song by index in currentQueue
 * @param {number} index - Index of song to play
 * @param {Array} newQueue - (Optional) custom list of songs to play from
 */
function playSong(index, newQueue = null) {
  if (newQueue) {
    currentQueue = newQueue;
  }

  // Boundary check
  if (index < 0 || index >= currentQueue.length) return;

  currentSongIndex = index;
  const song = currentQueue[index];

  // Set the audio source and volume
  audioElement.src = song.audio;
  audioElement.volume = isMuted ? 0 : currentVolume / 100;

  // Start playing audio
  audioElement.play().catch(function () {
    // Fallback if browser prevents auto-play
    console.log("Audio started");
  });

  isPlaying = true;

  // Update UI Elements with current song information
  updatePlayerUI(song);

  // Add song to Recents history
  addToRecents(song.id);

  // Update Lyrics drawer
  updateLyrics(song);
}

/**
 * Toggles between Play and Pause
 */
function togglePlay() {
  if (isPlaying) {
    audioElement.pause();
    isPlaying = false;
  } else {
    // If no song was playing, start from song 0
    if (!audioElement.src) {
      playSong(0);
      return;
    }
    audioElement.play().catch(() => {});
    isPlaying = true;
  }
  updatePlayButtonIcon();
}

/**
 * Plays the Next track
 */
function nextSong() {
  if (isShuffle) {
    // Pick a random song index
    currentSongIndex = Math.floor(Math.random() * currentQueue.length);
  } else {
    // Go to next song (wrap around to 0 if at the end)
    currentSongIndex = (currentSongIndex + 1) % currentQueue.length;
  }
  playSong(currentSongIndex);
}

/**
 * Plays the Previous track
 */
function prevSong() {
  // If more than 3 seconds in, restart current song
  if (audioElement.currentTime > 3) {
    audioElement.currentTime = 0;
    return;
  }
  // Go to previous song
  currentSongIndex = (currentSongIndex - 1 + currentQueue.length) % currentQueue.length;
  playSong(currentSongIndex);
}

/**
 * Toggles Shuffle mode
 */
function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById("btnShuffle").classList.toggle("active", isShuffle);
}

/**
 * Toggles Repeat single song mode
 */
function toggleRepeat() {
  isRepeat = !isRepeat;
  document.getElementById("btnRepeat").classList.toggle("active", isRepeat);
}

/**
 * Updates progress bar as audio plays
 */
function updateProgressBar() {
  const current = audioElement.currentTime || 0;
  const total = audioElement.duration || 1;
  const percentage = (current / total) * 100;

  document.getElementById("scrubProgress").style.width = percentage + "%";
  document.getElementById("scrubThumb").style.left = percentage + "%";
  document.getElementById("timeCurrent").textContent = formatTime(current);
}

/**
 * Allows user to click on progress bar to seek / scrub song position
 */
function seekSong(event) {
  const scrubTrack = document.getElementById("scrubTrack");
  const trackWidth = scrubTrack.clientWidth;
  const clickPositionX = event.offsetX;
  const seekPercentage = clickPositionX / trackWidth;

  if (audioElement.duration) {
    audioElement.currentTime = seekPercentage * audioElement.duration;
  }
}

/**
 * Changes audio volume from range slider (0 - 100)
 */
function changeVolume(value) {
  currentVolume = parseInt(value, 10);
  isMuted = false;
  audioElement.volume = currentVolume / 100;

  // Update UI slider & text
  document.getElementById("volSlider").value = currentVolume;
  document.getElementById("volLabel").textContent = currentVolume + "%";
  document.getElementById("volIcon").className = currentVolume === 0 ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
}

/**
 * Toggles Mute / Unmute
 */
function toggleMute() {
  isMuted = !isMuted;
  audioElement.volume = isMuted ? 0 : currentVolume / 100;

  const icon = document.getElementById("volIcon");
  if (isMuted) {
    icon.className = "fa-solid fa-volume-xmark";
    document.getElementById("volLabel").textContent = "0%";
  } else {
    icon.className = "fa-solid fa-volume-high";
    document.getElementById("volLabel").textContent = currentVolume + "%";
  }
}

/**
 * Updates Player bar text, album art, and spinning vinyl
 */
function updatePlayerUI(song) {
  document.getElementById("playerTitle").textContent = song.name;
  document.getElementById("playerArtist").textContent = song.artist;
  document.getElementById("playerCoverImg").src = song.image;

  // Update hero vinyl if on home page
  const heroVinyl = document.getElementById("heroVinyl");
  if (heroVinyl) heroVinyl.classList.add("spinning");

  const heroSongName = document.getElementById("heroVibeSongName");
  const heroArtist = document.getElementById("heroVibeArtist");
  if (heroSongName) heroSongName.textContent = song.name;
  if (heroArtist) heroArtist.textContent = song.artist + " · 320kbps";

  // Update like button in player
  updateLikeHeartIcon(song.id);

  // Update play icon
  updatePlayButtonIcon();
}

/**
 * Updates the Play / Pause icon
 */
function updatePlayButtonIcon() {
  const icon = document.getElementById("mainPlayIcon");
  if (icon) {
    icon.className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
  }
  const vinyl = document.getElementById("heroVinyl");
  if (vinyl) {
    vinyl.classList.toggle("spinning", isPlaying);
  }
}

/**
 * Formats seconds into MM:SS (e.g. 125 -> "2:05")
 */
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
}


// --------------------------------------------------------------------------
// 4. UI RENDERING FUNCTIONS (Generates Song cards, Artist cards, Playlists)
// --------------------------------------------------------------------------

/**
 * Creates HTML for a single song card
 */
function createSongCardHTML(song, index) {
  return `
    <div class="song-card" onclick="playSong(${index})">
      <div class="song-artwork-wrap">
        <img src="${song.image}" alt="${song.name}" loading="lazy" />
        <span class="song-category-tag">${song.category}</span>
        <button class="song-card-play-btn" title="Play ${song.name}">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
      <div class="song-card-meta">
        <h4 class="song-card-title">${song.name}</h4>
        <p class="song-card-artist">${song.artist}</p>
      </div>
    </div>
  `;
}

/**
 * Renders Featured songs on Home page
 */
function renderHomeSongs(category = "all") {
  const container = document.getElementById("homeFeaturedGrid");
  if (!container) return;

  let filtered = songs;
  if (category !== "all") {
    filtered = songs.filter(s => s.category === category);
  }

  container.innerHTML = filtered.map((song, index) => createSongCardHTML(song, index)).join("");
}

/**
 * Renders all songs on Browse / Search page
 */
function renderBrowseSongs(songList = songs) {
  const container = document.getElementById("browseSongsGrid");
  if (!container) return;

  if (songList.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:30px;">No songs found.</p>`;
    return;
  }

  container.innerHTML = songList.map((song, index) => createSongCardHTML(song, index)).join("");
}

/**
 * Renders Artists Grid
 */
function renderArtists() {
  const homeGrid = document.getElementById("homeArtistsGrid");
  const fullGrid = document.getElementById("artistsFullGrid");

  const artistCardsHTML = artists.map(artist => `
    <div class="artist-card" onclick="showArtistDetail('${artist.id}')">
      <div class="artist-avatar-wrap">
        <img src="${artist.image}" alt="${artist.name}" />
      </div>
      <h4 class="artist-card-name">${artist.name}</h4>
      <p class="artist-card-genre">${artist.genre.split("·")[0]}</p>
    </div>
  `).join("");

  if (homeGrid) homeGrid.innerHTML = artists.slice(0, 6).map(a => `
    <div class="artist-card" onclick="showArtistDetail('${a.id}')">
      <div class="artist-avatar-wrap">
        <img src="${a.image}" alt="${a.name}" />
      </div>
      <h4 class="artist-card-name">${a.name}</h4>
      <p class="artist-card-genre">${a.genre.split("·")[0]}</p>
    </div>
  `).join("");

  if (fullGrid) fullGrid.innerHTML = artistCardsHTML;
}

/**
 * Shows specific Artist detail and their songs
 */
function showArtistDetail(artistId) {
  const artist = artists.find(a => a.id === artistId);
  if (!artist) return;

  // Show artist detail container
  document.getElementById("artistsFullGrid").classList.add("hidden");
  document.getElementById("artistsMainHeader").classList.add("hidden");
  document.getElementById("artistDetailView").classList.remove("hidden");

  // Fill in artist info
  document.getElementById("artistDetailName").textContent = artist.name;
  document.getElementById("artistDetailGenre").textContent = artist.genre;
  document.getElementById("artistDetailBio").textContent = artist.bio;
  document.getElementById("artistDetailImg").src = artist.image;

  // Get songs by this artist
  const artistSongs = songs.filter(s => s.artist.toLowerCase().includes(artist.name.toLowerCase()));
  const container = document.getElementById("artistDetailSongsGrid");
  container.innerHTML = artistSongs.map((song, idx) => createSongCardHTML(song, idx)).join("");

  document.getElementById("btnPlayArtistTracks").onclick = function () {
    if (artistSongs.length > 0) playSong(0, artistSongs);
  };
}

/**
 * Goes back to all artists list
 */
function backToArtistsList() {
  document.getElementById("artistDetailView").classList.add("hidden");
  document.getElementById("artistsFullGrid").classList.remove("hidden");
  document.getElementById("artistsMainHeader").classList.remove("hidden");
}

/**
 * Renders all Playlists
 */
function renderPlaylists() {
  const allPlaylists = [...playlists, ...customPlaylists];
  const container = document.getElementById("playlistsGridContainer");
  const homeContainer = document.getElementById("homePlaylistsGrid");

  const cardsHTML = allPlaylists.map(pl => `
    <div class="playlist-card" onclick="showPlaylistDetail('${pl.id}')">
      <div class="playlist-card-backdrop" style="background: radial-gradient(circle at top right, ${pl.color}, transparent 70%);"></div>
      <div class="playlist-card-content">
        <div class="playlist-card-icon">${pl.icon}</div>
        <h3 class="playlist-card-title">${pl.name}</h3>
        <p class="playlist-card-meta">${pl.songIds.length} tracks</p>
      </div>
    </div>
  `).join("");

  if (container) container.innerHTML = cardsHTML;
  if (homeContainer) homeContainer.innerHTML = cardsHTML;

  // Update library count
  const libPlCount = document.getElementById("libPlCount");
  if (libPlCount) libPlCount.textContent = allPlaylists.length;
}

/**
 * Shows songs inside a playlist
 */
function showPlaylistDetail(playlistId) {
  const allPlaylists = [...playlists, ...customPlaylists];
  const pl = allPlaylists.find(p => p.id === playlistId);
  if (!pl) return;

  document.getElementById("playlistsGridContainer").classList.add("hidden");
  const detail = document.getElementById("playlistDetailView");
  detail.classList.remove("hidden");

  document.getElementById("plDetailTitle").textContent = pl.name;
  document.getElementById("plDetailCover").textContent = pl.icon;
  document.getElementById("plDetailCover").style.background = pl.color;
  document.getElementById("plDetailMeta").textContent = pl.songIds.length + " Tracks · Curated Playlist";

  const plSongs = pl.songIds.map(id => songs.find(s => s.id === id)).filter(Boolean);
  const grid = document.getElementById("playlistDetailSongsGrid");
  grid.innerHTML = plSongs.map((song, idx) => createSongCardHTML(song, idx)).join("");

  document.getElementById("btnPlayThisPlaylist").onclick = function () {
    if (plSongs.length > 0) playSong(0, plSongs);
  };
}

/**
 * Returns back to Playlists grid
 */
function backToPlaylistsList() {
  document.getElementById("playlistDetailView").classList.add("hidden");
  document.getElementById("playlistsGridContainer").classList.remove("hidden");
}

/**
 * Creates a new custom playlist
 */
function createNewPlaylist(name, color = "#d4a373") {
  const newPl = {
    id: "user_pl_" + Date.now(),
    name: name,
    icon: "🎵",
    color: color,
    songIds: []
  };
  customPlaylists.push(newPl);
  localStorage.setItem("wavify_playlists", JSON.stringify(customPlaylists));
  renderPlaylists();
}

/**
 * Renders Liked / Favorite Songs
 */
function renderFavorites() {
  const container = document.getElementById("favoritesSongsGrid");
  if (!container) return;

  const likedTracks = songs.filter(s => likedSongIds.includes(s.id));
  if (likedTracks.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px 0;">No liked songs yet. Click the heart icon on any song!</p>`;
    return;
  }
  container.innerHTML = likedTracks.map((song, idx) => createSongCardHTML(song, idx)).join("");

  // Update badge count
  document.getElementById("likedCountBadge").textContent = likedSongIds.length;
  const libCount = document.getElementById("libLikedCount");
  if (libCount) libCount.textContent = likedSongIds.length;
}

/**
 * Toggles Like for a song ID
 */
function toggleLike(songId) {
  const index = likedSongIds.indexOf(songId);
  if (index === -1) {
    likedSongIds.push(songId);
  } else {
    likedSongIds.splice(index, 1);
  }
  localStorage.setItem("wavify_liked", JSON.stringify(likedSongIds));
  updateLikeHeartIcon(songId);
  renderFavorites();
}

/**
 * Updates Heart icon style in bottom player bar
 */
function updateLikeHeartIcon(songId) {
  const isLiked = likedSongIds.includes(songId);
  const btn = document.getElementById("playerLikeBtn");
  if (btn) {
    btn.classList.toggle("liked", isLiked);
    btn.querySelector("i").className = isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart";
  }
}

/**
 * Updates Lyrics drawer for currently playing track
 */
function updateLyrics(song) {
  const lyricsSong = document.getElementById("lyricsSong");
  const lyricsArtist = document.getElementById("lyricsArtist");
  const lyricsCover = document.getElementById("lyricsCover");
  const linesContainer = document.getElementById("lyricsLinesContainer");

  if (lyricsSong) lyricsSong.textContent = song.name;
  if (lyricsArtist) lyricsArtist.textContent = song.artist;
  if (lyricsCover) lyricsCover.src = song.image;

  if (linesContainer && song.lyrics) {
    linesContainer.innerHTML = song.lyrics.map((line, idx) => `
      <p class="lyrics-line ${idx === 0 ? 'active' : ''}">${line}</p>
    `).join("");
  }
}

/**
 * Adds song to Recent history
 */
function addToRecents(songId) {
  if (!recentSongIds.includes(songId)) {
    recentSongIds.unshift(songId);
    if (recentSongIds.length > 8) recentSongIds.pop();
    localStorage.setItem("wavify_recents", JSON.stringify(recentSongIds));
  }
  renderRecentLibrary();
}

/**
 * Renders Recent songs in Library
 */
function renderRecentLibrary() {
  const container = document.getElementById("libraryRecentGrid");
  if (!container) return;
  const recentTracks = recentSongIds.map(id => songs.find(s => s.id === id)).filter(Boolean);
  container.innerHTML = recentTracks.map((song, idx) => createSongCardHTML(song, idx)).join("");
}


// --------------------------------------------------------------------------
// 5. NAVIGATION & SEARCH FUNCTIONS
// --------------------------------------------------------------------------

/**
 * Switches the active section (Home, Browse, Artists, Library, Favorites, Playlists, Subscription, About)
 */
function navigateTo(sectionId) {
  // Hide all sections
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show target section
  const target = document.getElementById("sec" + sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
  if (target) {
    target.classList.add("active");
    document.getElementById("mainViewport").scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update sidebar active link highlight
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.section === sectionId);
  });

  // Re-render specific section content
  if (sectionId === "favorites") renderFavorites();
  if (sectionId === "browse") renderBrowseSongs();
  if (sectionId === "library") renderRecentLibrary();
}

/**
 * Handles search bar typing
 */
function handleSearch(query) {
  const q = query.trim().toLowerCase();
  const clearBtn = document.getElementById("clearSearchBtn");
  clearBtn.classList.toggle("hidden", !q);

  if (!q) {
    renderBrowseSongs(songs);
    return;
  }

  navigateTo("browse");
  const filtered = songs.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.artist.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q)
  );
  renderBrowseSongs(filtered);
}


// --------------------------------------------------------------------------
// 6. USER AUTHENTICATION & MODAL FUNCTIONS
// --------------------------------------------------------------------------

function openAuthModal(tab = "login") {
  switchAuthTab(tab);
  document.getElementById("authWrapper").classList.add("open");
}

function closeAuthModal() {
  document.getElementById("authWrapper").classList.remove("open");
}

function switchAuthTab(tab) {
  const isLogin = tab === "login";
  document.getElementById("tabLogin").classList.toggle("active", isLogin);
  document.getElementById("tabSignup").classList.toggle("active", !isLogin);
  document.getElementById("formLogin").classList.toggle("hidden", !isLogin);
  document.getElementById("formSignup").classList.toggle("hidden", isLogin);
  document.getElementById("authTitle").textContent = isLogin ? "Welcome to Wavify" : "Create Your Acoustic Account";
}

function loginUser(email, password) {
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }
  const username = email.split("@")[0];
  currentUser = {
    name: username.charAt(0).toUpperCase() + username.slice(1),
    email: email,
    tier: "FREE",
    initial: username.charAt(0).toUpperCase()
  };
  localStorage.setItem("wavify_user", JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
}

function signupUser(name, email, password) {
  if (!name || !email || password.length < 6) {
    alert("Please provide a valid name, email, and minimum 6-character password.");
    return;
  }
  currentUser = {
    name: name,
    email: email,
    tier: "FREE",
    initial: name.charAt(0).toUpperCase()
  };
  localStorage.setItem("wavify_user", JSON.stringify(currentUser));
  updateUserUI();
  closeAuthModal();
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("wavify_user");
  updateUserUI();
}

function updateUserUI() {
  const nameEl = document.getElementById("sidebarUserName");
  const tierEl = document.getElementById("sidebarUserTier");
  const avatarEl = document.getElementById("sidebarUserAvatar");
  const topAvatarEl = document.getElementById("topAvatarInitial");
  const menuNameEl = document.getElementById("menuUserName");
  const menuEmailEl = document.getElementById("menuUserEmail");

  if (currentUser) {
    if (nameEl) nameEl.textContent = currentUser.name;
    if (tierEl) tierEl.textContent = currentUser.tier + " TIER";
    if (avatarEl) avatarEl.textContent = currentUser.initial;
    if (topAvatarEl) topAvatarEl.textContent = currentUser.initial;
    if (menuNameEl) menuNameEl.textContent = currentUser.name;
    if (menuEmailEl) menuEmailEl.textContent = currentUser.email;
  } else {
    if (nameEl) nameEl.textContent = "Guest Explorer";
    if (tierEl) tierEl.textContent = "FREE TIER";
    if (avatarEl) avatarEl.textContent = "G";
    if (topAvatarEl) topAvatarEl.textContent = "G";
    if (menuNameEl) menuNameEl.textContent = "Guest Explorer";
    if (menuEmailEl) menuEmailEl.textContent = "Not signed in";
  }
}


// --------------------------------------------------------------------------
// 7. SUBSCRIPTION & CHECKOUT FUNCTIONS
// --------------------------------------------------------------------------

function toggleBilling(isYearly) {
  isYearlyBilling = isYearly;
  document.getElementById("plusPriceVal").textContent = isYearly ? "3.99" : "4.99";
  document.getElementById("studioPriceVal").textContent = isYearly ? "7.99" : "9.99";
  document.getElementById("familyPriceVal").textContent = isYearly ? "11.99" : "14.99";
}

function openCheckout(planName, price) {
  const finalPrice = isYearlyBilling ? (price * 0.8).toFixed(2) : price.toFixed(2);
  document.getElementById("checkoutPlanTitle").textContent = "Upgrade to " + planName;
  document.getElementById("checkoutPlanPrice").textContent = "$" + finalPrice + " / month" + (isYearlyBilling ? " (Yearly Billing)" : "");
  document.getElementById("checkoutModal").classList.add("open");
}

function closeCheckout() {
  document.getElementById("checkoutModal").classList.remove("open");
}

function processPayment(event) {
  event.preventDefault();
  const btn = document.getElementById("btnConfirmPay");
  btn.textContent = "Activating Plan...";

  setTimeout(function () {
    if (!currentUser) {
      currentUser = { name: "Wavify Listener", email: "listener@wavify.audio", tier: "STUDIO", initial: "W" };
    } else {
      currentUser.tier = "STUDIO";
    }
    localStorage.setItem("wavify_user", JSON.stringify(currentUser));
    updateUserUI();
    closeCheckout();
    btn.innerHTML = '<i class="fa-solid fa-lock"></i> Activate Plan (Mock Checkout)';
    alert("🎉 Success! Your Studio Hi-Res subscription is now active.");
  }, 1000);
}


// --------------------------------------------------------------------------
// 8. THEME ENGINE (Dark & Light Mode)
// --------------------------------------------------------------------------

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("wavify_theme", theme);

  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabelText");
  if (icon) icon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  if (label) label.textContent = theme === "dark" ? "Dark" : "Light";
}

function toggleTheme() {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}


// --------------------------------------------------------------------------
// 9. EVENT LISTENERS & INITIAL SETUP
// --------------------------------------------------------------------------

function setupEventListeners() {
  // Audio time update (for scrubber)
  audioElement.addEventListener("timeupdate", updateProgressBar);
  
  // Audio metadata loaded (total duration)
  audioElement.addEventListener("loadedmetadata", function () {
    document.getElementById("timeDuration").textContent = formatTime(audioElement.duration);
  });

  // When song finishes, play next
  audioElement.addEventListener("ended", function () {
    if (isRepeat) {
      audioElement.currentTime = 0;
      audioElement.play();
    } else {
      nextSong();
    }
  });

  // Global search input
  const searchInput = document.getElementById("globalSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      handleSearch(e.target.value);
    });
  }

  // Keyboard Spacebar Shortcut for Play/Pause
  document.addEventListener("keydown", function (e) {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    }
  });
}

// --------------------------------------------------------------------------
// 10. COMPATIBILITY BRIDGES (Ensures HTML onclick attributes work seamlessly)
// --------------------------------------------------------------------------
window.AudioPlayer = {
  playFirstTrack: () => playSong(0),
  playTrack: (idx, queue) => playSong(idx, queue),
  togglePlay: togglePlay,
  nextTrack: nextSong,
  prevTrack: prevSong,
  toggleShuffle: toggleShuffle,
  toggleRepeat: toggleRepeat,
  handleScrubClick: seekSong,
  handleVolumeChange: changeVolume,
  toggleMute: toggleMute
};

window.AuthModule = {
  openAuthModal: openAuthModal,
  closeAuthModal: closeAuthModal,
  switchTab: switchAuthTab,
  togglePasswordVisibility: function(inputId, btn) {
    const input = document.getElementById(inputId);
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    btn.querySelector('i').className = isPass ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
  },
  handleLogin: function(e) {
    e.preventDefault();
    loginUser(document.getElementById("loginEmail").value, document.getElementById("loginPassword").value);
  },
  handleSignup: function(e) {
    e.preventDefault();
    signupUser(document.getElementById("signupName").value, document.getElementById("signupEmail").value, document.getElementById("signupPassword").value);
  },
  continueAsGuest: closeAuthModal,
  handleForgotPassword: (e) => { e.preventDefault(); alert("Password reset link sent to your email."); },
  mockSocialLogin: (provider) => { loginUser("alex@" + provider.toLowerCase() + ".com", "123456"); },
  toggleUserMenu: () => document.getElementById("userMenuDropdown").classList.toggle("hidden"),
  closeUserMenu: () => document.getElementById("userMenuDropdown").classList.add("hidden"),
  handleUserMenuAuthAction: () => {
    if (currentUser) logoutUser();
    else openAuthModal();
  }
};

window.NavigationModule = {
  navigate: (sec, e) => { if (e) e.preventDefault(); navigateTo(sec); },
  toggleMobileSidebar: (force) => {
    const sidebar = document.getElementById("appSidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    const open = force !== undefined ? force : !sidebar.classList.contains("mobile-open");
    sidebar.classList.toggle("mobile-open", open);
    backdrop.classList.toggle("active", open);
  }
};

window.SubscriptionModule = {
  toggleBillingCycle: toggleBilling,
  openCheckout: openCheckout,
  closeCheckout: closeCheckout,
  processPayment: processPayment
};

window.PlaylistModule = {
  openCreateModal: () => document.getElementById("createPlaylistModal").classList.add("open"),
  closeCreateModal: () => document.getElementById("createPlaylistModal").classList.remove("open"),
  handleCreateSubmit: function(e) {
    e.preventDefault();
    const title = document.getElementById("newPlTitle").value.trim();
    if (title) createNewPlaylist(title);
    document.getElementById("createPlaylistModal").classList.remove("open");
  },
  openAddToModalCurrent: () => {
    if (songs[currentSongIndex]) {
      alert(`Track "${songs[currentSongIndex].name}" added to your collection!`);
    }
  },
  closeAddToModal: () => document.getElementById("addToPlaylistModal").classList.remove("open"),
  backToAllPlaylists: backToPlaylistsList,
  deleteActivePlaylist: () => {
    if (confirm("Remove this playlist?")) backToPlaylistsList();
  }
};

window.FavoritesModule = {
  toggleLikeCurrentSong: () => {
    if (currentQueue[currentSongIndex]) toggleLike(currentQueue[currentSongIndex].id);
  },
  playAllLiked: () => {
    const liked = songs.filter(s => likedSongIds.includes(s.id));
    if (liked.length > 0) playSong(0, liked);
    else alert("Heart a track to add to favorites!");
  }
};

window.ArtistModule = {
  backToAllArtists: backToArtistsList,
  toggleFollow: () => {
    const btn = document.getElementById("btnFollowArtist");
    const active = btn.classList.toggle("active");
    btn.innerHTML = active ? '<i class="fa-solid fa-check"></i> Following' : '<i class="fa-regular fa-heart"></i> Follow';
  }
};

window.BrowseModule = {
  selectCategory: (cat) => {
    navigateTo("browse");
    document.querySelectorAll("#browseCategoryTabs .tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.cat === cat);
    });
    const filtered = cat === "all" ? songs : songs.filter(s => s.category === cat);
    renderBrowseSongs(filtered);
  },
  handleSort: (key) => {
    let sorted = [...songs];
    if (key === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (key === "artist") sorted.sort((a, b) => a.artist.localeCompare(b.artist));
    if (key === "category") sorted.sort((a, b) => a.category.localeCompare(b.category));
    renderBrowseSongs(sorted);
  }
};

window.HomeModule = {
  filterFeatured: (cat) => {
    document.querySelectorAll("#homeGenreFilter .filter-chip").forEach(c => {
      c.classList.toggle("active", c.dataset.filter === cat);
    });
    renderHomeSongs(cat);
  }
};

window.LyricsDrawer = {
  toggle: () => {
    const drawer = document.getElementById("lyricsDrawer");
    drawer.classList.toggle("open");
  },
  switchTab: (tab) => {
    const isLyrics = tab === "lyrics";
    document.getElementById("drawerTabLyrics").classList.toggle("active", isLyrics);
    document.getElementById("drawerTabQueue").classList.toggle("active", !isLyrics);
    document.getElementById("drawerLyricsBody").classList.toggle("hidden", !isLyrics);
    document.getElementById("drawerQueueBody").classList.toggle("hidden", isLyrics);
    if (!isLyrics) {
      document.getElementById("queueListContainer").innerHTML = currentQueue.map((song, idx) => `
        <div class="queue-item" onclick="playSong(${idx})">
          <img src="${song.image}" />
          <div class="queue-item-meta">
            <p class="queue-item-title">${song.name}</p>
            <span class="queue-item-artist">${song.artist}</span>
          </div>
        </div>
      `).join("");
    }
  }
};

window.SearchModule = {
  clearSearch: () => {
    const inp = document.getElementById("globalSearchInput");
    if (inp) { inp.value = ""; handleSearch(""); }
  }
};

window.ThemeModule = {
  toggleTheme: toggleTheme
};

// --------------------------------------------------------------------------
// 11. BOOTSTRAP APP ON PAGE LOAD
// --------------------------------------------------------------------------
function initApp() {
  applyTheme(currentTheme);
  updateUserUI();
  setupEventListeners();

  // Populate data on UI
  renderHomeSongs("all");
  renderArtists();
  renderPlaylists();
  renderFavorites();
  renderRecentLibrary();
  renderBrowseSongs();

  // Hide the initial loading spinner
  setTimeout(function () {
    const loader = document.getElementById("appLoader");
    if (loader) loader.classList.add("hidden");
  }, 500);
}

// Run initApp when browser finishes loading HTML DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
