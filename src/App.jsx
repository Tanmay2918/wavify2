import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { initialSongs, initialArtists, initialPlaylists } from './data';
import FeedbackPage from './FeedbackPage';
import MusicLibraryPage, {
  useMusicLibrary
} from './MusicLibraryPage';
import PlansPage from './PlansPage';

function formatTime(seconds) {
  if (isNaN(seconds) || seconds === 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
function App(){
  // ── STATE ──
  // Navigation: which page is shown (home, browse, artists, about)
const navigate = useNavigate();
const location = useLocation();
const {
  favorites,
  toggleFavorite,
  addToRecentlyPlayed
} = useMusicLibrary();

const sectionPaths = {
  home: '/',
  browse: '/browse',
  artists: '/artists',
  about: '/about',
  feedback: '/feedback',
  playlists: '/playlists',
  profile: '/profile',
  library: '/library',
  plans: '/plans',
};

const sectionNames = Object.fromEntries(
  Object.entries(sectionPaths).map(([name, path]) => [
    path,
    name
  ])
);

const activeSection = sectionNames[location.pathname] || 'home';

const setActiveSection = (section) => {
  navigate(sectionPaths[section] || '/');
};

  // Membership plan state (persisted in localStorage)
  const [currentPlan, setCurrentPlan] = useState(() => {
    try {
      return localStorage.getItem('wavify-current-plan') || 'Free';
    } catch {
      return 'Free';
    }
  });

  const handleSelectPlan = (planName) => {
    setCurrentPlan(planName);
    try {
      localStorage.setItem('wavify-current-plan', planName);
    } catch (e) {
      console.error('Error saving plan to localStorage:', e);
    }
  };
  // Search bar text
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  // Music player state
  const [currentQueue, setCurrentQueue] = useState(initialSongs);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // useRef — gives us direct access to the <audio> HTML element
  // We need this because React cannot call .play() or .pause() through state alone
  const audioRef = useRef(null);
  // Current song object (derived from state)
  const currentSong = currentQueue[currentSongIndex] || initialSongs[0];
  useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  if (isPlaying) {
    audio.play().catch((error) => {
      console.error("Unable to play audio:", error);
      setIsPlaying(false);
    });
  } else {
    audio.pause();
  }
}, [currentSong.audio, isPlaying]);
  // ── PLAYER FUNCTIONS ──
  // Play a specific song (optionally from a new list)
  
  const handlePlaySong = (index, newQueue) => {
  const queueToPlay = newQueue || currentQueue;
  const songToPlay = queueToPlay[index];

  if (!songToPlay) return;

  addToRecentlyPlayed(songToPlay);

  if (newQueue) {
    setCurrentQueue(newQueue);
  }

  setCurrentSongIndex(index);
  setCurrentTime(0);
  setIsPlaying(true);
};

  // Toggle play / pause
  // const handleTogglePlay = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play().catch(() => {});
  //     }
  //   }
  //   setIsPlaying(!isPlaying);
  // };
  const handleTogglePlay = () => {
  setIsPlaying((prev) => !prev);
};

  // Next song
  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % currentQueue.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 100);
  };
  // Previous song
  const handlePrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + currentQueue.length) % currentQueue.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 100);
  };
  // Click on progress bar to seek
  const handleScrubClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekRatio = clickX / rect.width;
    if (duration > 0 && audioRef.current) {
      audioRef.current.currentTime = seekRatio * duration;
      setCurrentTime(seekRatio * duration);
    }
  };
  // Progress percentage for the scrubber bar
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  // ── RENDER THE ACTIVE PAGE ──
  const renderCurrentView = () => {
    switch (activeSection) {
      // ────────────────────────────────────────────────────────────
      // HOME PAGE
      // ────────────────────────────────────────────────────────────
      case 'home':
        return (
          <section className="view-section active">
            {/* Hero Section */}
            <div className="subtle-hero">
              <div className="hero-backdrop-glow"></div>
              <div className="hero-content">
                <div className="hero-pill"><i className="fa-solid fa-waveform-lines"></i> High Fidelity Spatial Audio</div>
                <h1 className="hero-title">Music designed for deep focus & pure emotion.</h1>
                <p className="hero-description">
                  Stream handpicked melodies across Hindi, English, Punjabi, Haryanvi and Lo-Fi in breathtaking acoustic clarity.
                </p>
                <div className="hero-actions">
                  <button className="btn-subtle-primary" onClick={() => handlePlaySong(0, initialSongs)}>
                    <i className="fa-solid fa-play"></i> Listen Now
                  </button>
                  <button className="btn-subtle-secondary" onClick={() => setActiveSection('browse')}>
                    <i className="fa-solid fa-layer-group"></i> Explore Categories
                  </button>
                </div>
              </div>
              {/* Spinning Vinyl */}
              <div className="hero-visualizer-card">
                <div className={`vinyl-minimal ${isPlaying ? 'spinning' : ''}`}>
                  <div className="vinyl-groove"></div>
                  <div className="vinyl-label">
                    <div className="vinyl-dot"></div>
                  </div>
                </div>
                <div className="hero-visualizer-meta">
                  <span className="now-vibe-tag">ACOUSTIC CURATION</span>
                  <h4>{currentSong.name}</h4>
                  <p>{currentSong.artist} · 320kbps</p>
                  <div className="minimal-wave-bars">
                    <span></span><span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Genre Cards */}
            <div className="section-container">
              <div className="section-heading-row">
                <h2 className="section-title">Sound Landscapes</h2>
                <button className="btn-link" onClick={() => setActiveSection('browse')}>View All Categories</button>
              </div>
              <div className="genre-cards-grid">
                <div className="genre-card hindi-card" onClick={() => setActiveSection('browse')}>
                  <div className="genre-info">
                    <h3>Hindi Curation</h3>
                    <p>Arijit, Anuv Jain & Bollywood</p>
                  </div>
                  <span className="genre-emoji">🪕</span>
                </div>
                <div className="genre-card english-card" onClick={() => setActiveSection('browse')}>
                  <div className="genre-info">
                    <h3>Global Hits</h3>
                    <p>Taylor Swift & Billboard Essentials</p>
                  </div>
                  <span className="genre-emoji">🎧</span>
                </div>
                <div className="genre-card punjabi-card" onClick={() => setActiveSection('browse')}>
                  <div className="genre-info">
                    <h3>Punjabi Waves</h3>
                    <p>AP Dhillon, Diljit & Karan Aujla</p>
                  </div>
                  <span className="genre-emoji">🥁</span>
                </div>
                <div className="genre-card haryanvi-card" onClick={() => setActiveSection('browse')}>
                  <div className="genre-info">
                    <h3>Haryanvi Top Beats</h3>
                    <p>Dhanda Nyoliwala & Mitta Ror</p>
                  </div>
                  <span className="genre-emoji">⚡</span>
                </div>
              </div>
            </div>

            {/* All Songs */}
            <div className="section-container">
              <div className="section-heading-row">
                <div>
                  <h2 className="section-title">Editor's Daily Selection</h2>
                  <p className="section-subtitle">Balanced dynamics & warm soundscapes.</p>
                </div>
              </div>
              <div className="songs-grid">
                {initialSongs.map((song, index) => (
                  <div className="song-card" key={song.id} onClick={() => handlePlaySong(index, initialSongs)}>
                    {/* <div className="song-artwork-wrap">
                      <img src={song.image} alt={song.name} loading="lazy" />
                      <span className="song-category-tag">{song.category}</span>
                      <button className="song-card-play-btn" title={`Play ${song.name}`}>
                        <i className="fa-solid fa-play"></i>
                      </button>
                    </div> */}
                    
<div className="song-artwork-wrap">
  <img src={song.image} alt={song.name} loading="lazy" />
  <span className="song-category-tag">{song.category}</span>

  {/* Favorite button */}
  <button
    type="button"
    className={`favorite-button ${
      favorites.includes(song.id) ? 'is-favorite' : ''
    }`}
    title={
      favorites.includes(song.id)
        ? 'Remove from favorites'
        : 'Add to favorites'
    }
    aria-label={
      favorites.includes(song.id)
        ? `Remove ${song.name} from favorites`
        : `Add ${song.name} to favorites`
    }
    onClick={(e) => {
      e.stopPropagation();
      toggleFavorite(song.id);
    }}
  >
    <i
      className={
        favorites.includes(song.id)
          ? 'fa-solid fa-heart'
          : 'fa-regular fa-heart'
      }
    />
  </button>

  <button
    className="song-card-play-btn"
    title={`Play ${song.name}`}
  >
    <i className="fa-solid fa-play"></i>
  </button>
</div>

                    <div className="song-card-meta">
                      <h4 className="song-card-title">{song.name}</h4>
                      <p className="song-card-artist">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Artists Preview */}
            <div className="section-container">
              <div className="section-heading-row">
                <div>
                  <h2 className="section-title">Spotlight Artists</h2>
                  <p className="section-subtitle">Creators shaping the contemporary soundscape.</p>
                </div>
                <button className="btn-link" onClick={() => setActiveSection('artists')}>
                  All Artists <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <div className="artists-grid-compact">
                {initialArtists.slice(0, 6).map((artist) => (
                  <div className="artist-card" key={artist.id} onClick={() => setActiveSection('artists')}>
                    <div className="artist-avatar-wrap">
                      <img src={artist.image} alt={artist.name} />
                    </div>
                    <h4 className="artist-card-name">{artist.name}</h4>
                    <p className="artist-card-genre">{artist.genre.split('·')[0]}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Playlists Preview */}
            <div className="section-container">
              <div className="section-heading-row">
                <h2 className="section-title">Signature Playlists</h2>
              </div>
              <div className="playlists-grid">
                {initialPlaylists.map((pl) => (
                  <div className="playlist-card" key={pl.id}>
                    <div
                      className="playlist-card-backdrop"
                      style={{ background: `radial-gradient(circle at top right, ${pl.color}, transparent 70%)` }}
                    ></div>
                    <div className="playlist-card-content">
                      <div className="playlist-card-icon">{pl.icon}</div>
                      <h3 className="playlist-card-title">{pl.name}</h3>
                      <p className="playlist-card-meta">{pl.songIds.length} tracks</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      // ────────────────────────────────────────────────────────────
      // BROWSE / SEARCH PAGE
      // ────────────────────────────────────────────────────────────
      
case 'browse': {
  const categories = [
    'All',
    ...new Set(
      initialSongs
        .map((song) => song.category)
        .filter(Boolean)
    )
  ];

  const query = searchQuery.trim().toLowerCase();

  // Step 1: Search and filter songs
  const filteredSongs = initialSongs.filter((song) => {
    const matchesSearch =
      song.name.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      (song.category || '').toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === 'All' ||
      song.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Step 2: Sort the filtered songs
  const sortedSongs = [...filteredSongs].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    const artistA = a.artist.toLowerCase();
    const artistB = b.artist.toLowerCase();

    if (sortBy === 'name-asc') {
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    }

    if (sortBy === 'name-desc') {
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    }

    if (sortBy === 'artist-asc') {
      return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
    }

    return 0;
  });

  return (
    <section className="view-section active">
      <div className="browse-header">
        <h2 className="section-title">Search & Explore</h2>
        <p className="section-subtitle">
          Discover your next favorite track.
        </p>
      </div>

      {/* Genre filters */}
      <div className="browse-filter-bar">
        <div className="genre-filter-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`genre-filter-chip ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sorting dropdown */}
        <div className="sort-control">
          <label htmlFor="song-sort">Sort by</label>
          <select
            id="song-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
            <option value="artist-asc">Artist: A–Z</option>
          </select>
        </div>
      </div>

      {/* Results count and reset button */}
      <div className="browse-results-row">
        <p className="browse-results-count">
          Showing <strong>{sortedSongs.length}</strong>{' '}
          {sortedSongs.length === 1 ? 'song' : 'songs'}
          {selectedCategory !== 'All' &&
            ` in ${selectedCategory}`}
          {query && ` matching "${searchQuery.trim()}"`}
        </p>

        <button
          type="button"
          className="reset-filters-button"
          onClick={() => {
            setSearchQuery('');
            setSelectedCategory('All');
            setSortBy('name-asc');
          }}
        >
          <i className="fa-solid fa-rotate-left"></i>
          Reset Filters
        </button>
      </div>

      {/* Filtered song cards */}
      <div className="songs-grid">
        {sortedSongs.length > 0 ? (
          sortedSongs.map((song, index) => (
            <div
              className="song-card"
              key={song.id}
              onClick={() => handlePlaySong(index, sortedSongs)}
            >
              <div className="song-artwork-wrap">
                <img
                  src={song.image}
                  alt={song.name}
                  loading="lazy"
                />

                <span className="song-category-tag">
                  {song.category}
                </span>

                {/* Favorite button */}
                <button
                  type="button"
                  className={`favorite-button ${
                    favorites.includes(song.id) ? 'is-favorite' : ''
                  }`}
                  title={
                    favorites.includes(song.id)
                      ? 'Remove from favorites'
                      : 'Add to favorites'
                  }
                  aria-label={
                    favorites.includes(song.id)
                      ? `Remove ${song.name} from favorites`
                      : `Add ${song.name} to favorites`
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(song.id);
                  }}
                >
                  <i
                    className={
                      favorites.includes(song.id)
                        ? 'fa-solid fa-heart'
                        : 'fa-regular fa-heart'
                    }
                  />
                </button>

                <button
                  type="button"
                  className="song-card-play-btn"
                  title={`Play ${song.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlaySong(index, sortedSongs);
                  }}
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>

              <div className="song-card-meta">
                <h4 className="song-card-title">{song.name}</h4>
                <p className="song-card-artist">{song.artist}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="browse-empty-state">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h3>No songs found</h3>
            <p>
              Try another search term or choose a different genre.
            </p>
            <button
              type="button"
              className="reset-filters-button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('name-asc');
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
        </div>
        </section>
      );
    }

      // ────────────────────────────────────────────────────────────
      // ARTISTS PAGE
      // ────────────────────────────────────────────────────────────
      case 'artists':
        return <ArtistsPage onPlaySong={handlePlaySong} />;
      // ────────────────────────────────────────────────────────────
      // ABOUT PAGE
      // ────────────────────────────────────────────────────────────
      case 'about':
        return (
          <section className="view-section active">
            <div className="about-container">
              <div className="about-hero">
                <div className="brand-wave-icon large">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <h1 className="about-title">Wavify</h1>
                <p className="about-tagline">3rd Semester Frontend Engineering React Project</p>
              </div>
              <div className="about-highlights-grid">
                <div className="about-card">
                  <i className="fa-solid fa-palette"></i>
                  <h3>Subtle Aesthetic</h3>
                  <p>Crafted with muted obsidian, warm cashmere tones, and gentle micro-animations for zero visual fatigue.</p>
                </div>
                <div className="about-card">
                  <i className="fa-brands fa-react"></i>
                  <h3>Pure React Architecture</h3>
                  <p>Built exclusively using pure React hooks: useState, useRef, and declarative props.</p>
                </div>
                <div className="about-card">
                  <i className="fa-solid fa-sliders"></i>
                  <h3>Zero External UI Bloat</h3>
                  <p>No Tailwind or external component libraries; utilizes 100% semantic CSS3 variables and Flex/Grid layouts.</p>
                </div>
                <div className="about-card">
                  <i className="fa-solid fa-music"></i>
                  <h3>Real Audio Playback</h3>
                  <p>Functional music player with play, pause, next, previous and progress bar using HTML5 Audio API.</p>
                </div>
              </div>
              <div className="about-author-card">
                <h3>College Project Attribution</h3>
                <p>Designed and engineered for the 3rd Semester Web Development Practical & Viva Examination.</p>
                <div className="author-tags">
                  <span>React.js Components</span>
                  <span>HTML5 Audio API (useRef)</span>
                  <span>useState Hook</span>
                  <span>Responsive Layout</span>
                </div>
              </div>
            </div>
          </section>
        );
      case 'feedback':
        return <FeedbackPage />;
      case 'playlists':
        return (
          <section className="view-section active">
          <h1>My Playlists</h1>
          <p>Your playlists will appear here.</p>
          </section>
        );

      case 'profile':
        return (
          <section className="view-section active">
          <h1>My Profile</h1>
          <p>Your listening dashboard will appear here.</p>
          </section>
        );
      case 'library':
        return <MusicLibraryPage onPlaySong={handlePlaySong} />;
      case 'plans':
        return (
          <PlansPage
            currentPlan={currentPlan}
            onSelectPlan={handleSelectPlan}
          />
        );

      default:
        return null;
    }
  };
  // ── MAIN LAYOUT ──
  return (
    <div className="app-layout">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>
            <div className="brand-wave-icon small">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <span className="logo-name">Wavify</span>
          </div>
        </div>
        <nav className="sidebar-menu">
          <span className="menu-heading">DISCOVER</span>
          <button
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => setActiveSection('home')}
          >
            <i className="fa-solid fa-compass"></i>
            <span>Home</span>
          </button>
          <button
            className={`nav-item ${activeSection === 'browse' ? 'active' : ''}`}
            onClick={() => setActiveSection('browse')}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search & Browse</span>
          </button>
          <button
            className={`nav-item ${activeSection === 'artists' ? 'active' : ''}`}
            onClick={() => setActiveSection('artists')}
          >
            <i className="fa-solid fa-microphone-lines"></i>
            <span>Artists</span>
          </button>
          <button
  className={`nav-item ${activeSection === 'library' ? 'active' : ''}`}
  onClick={() => setActiveSection('library')}
>
  <i className="fa-solid fa-music"></i>
  <span>My Library</span>
</button>
          <span className="menu-heading">INFO</span>
          <button
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            <i className="fa-solid fa-circle-info"></i>
            <span>About Project</span>
          </button>
          
          <button
            className={`nav-item ${
              activeSection === 'feedback' ? 'active' : ''
            }`}
            onClick={() => setActiveSection('feedback')}
          >
            <i className="fa-solid fa-comment-dots"></i>
            <span>Feedback & Contact</span>
          </button>

          <button
            className={`nav-item ${
              activeSection === 'plans' ? 'active' : ''
            }`}
            onClick={() => setActiveSection('plans')}
          >
            <i className="fa-solid fa-crown"></i>
            <span>Plans & Pricing</span>
          </button>

        </nav>
        {/* User Footer */}
        <div className="sidebar-footer">
          {/* Button directly above the Wavify Listener div */}
          <button
            type="button"
            className={`sidebar-upgrade-btn ${activeSection === 'plans' ? 'active' : ''}`}
            onClick={() => setActiveSection('plans')}
            title="Explore Membership Plans"
          >
            <div className="sidebar-upgrade-btn-left">
              <i className="fa-solid fa-crown"></i>
              <div className="sidebar-upgrade-btn-text">
                <span className="upgrade-sub">MEMBERSHIP</span>
                <span className="upgrade-title">Explore Plans</span>
              </div>
            </div>
            <span className="sidebar-plan-pill">{currentPlan}</span>
          </button>

          <div
            className="user-profile-pill"
            onClick={() => setActiveSection('plans')}
            style={{ cursor: 'pointer' }}
            title="Click to view plan details"
          >
            <div className="user-avatar">W</div>
            <div className="user-meta">
              <span className="user-display-name">Wavify Listener</span>
              <span className="user-tier-tag">{currentPlan.toUpperCase()} TIER</span>
            </div>
          </div>
        </div>
      </aside>
      {/* ── TOP NAV ── */}
      <header className="top-nav">
        <div className="top-left">
          <div className="global-search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search tracks, artists (e.g. Arijit, Diljit)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeSection !== 'browse') setActiveSection('browse');
              }}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>
        <div className="top-right">
          <button className="btn-subtle-outline" onClick={() => setActiveSection('about')}>
            <i className="fa-solid fa-circle-info"></i>
            <span>About</span>
          </button>
        </div>
      </header>
      {/* ── MAIN CONTENT AREA ── */}
      <main className="main-viewport" id="mainViewport">
        {renderCurrentView()}
      </main>
      {/* ── BOTTOM AUDIO PLAYER ── */}
      <footer className="bottom-player-bar">
        {/* Song Info */}
        <div className="player-left">
          <div className="player-cover-wrap">
            <img src={currentSong.image} alt={currentSong.name} />
            <div className="player-cover-glow"></div>
          </div>
          <div className="player-meta-text">
            <div className="player-title-row">
              <span className="player-title">{currentSong.name}</span>
              <span className="player-quality-tag">320kbps</span>
            </div>
            <span className="player-artist">{currentSong.artist}</span>
          </div>
        </div>
        {/* Playback Controls */}
        <div className="player-center">
          <div className="player-buttons-row">
            <button className="player-icon-btn" onClick={handlePrevSong} title="Previous Track">
              <i className="fa-solid fa-backward-step"></i>
            </button>
            <button className="player-play-btn" onClick={handleTogglePlay} title="Play / Pause">
              <i className={isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"}></i>
            </button>
            <button className="player-icon-btn" onClick={handleNextSong} title="Next Track">
              <i className="fa-solid fa-forward-step"></i>
            </button>
          </div>
          {/* Progress Bar */}
          <div className="player-scrubber-row">
            <span className="time-label">{formatTime(currentTime)}</span>ed
            <div className="scrub-track" onClick={handleScrubClick}>
              <div className="scrub-progress" style={{ width: `${progressPercent}%` }}></div>
              <div className="scrub-thumb" style={{ left: `${progressPercent}%` }}></div>
            </div>
            <span className="time-label">{formatTime(duration)}</span>
          </div>
        </div>
        {/* Empty right section to keep layout balanced */}
        <div className="player-right"></div>
      </footer>

      {/* ── HTML5 AUDIO ELEMENT (controlled via useRef) ── */}
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={handleNextSong}
      />
    </div>
  );
}

// =============================================================================
// ARTISTS PAGE (separate function component to keep its own useState)
// =============================================================================
function ArtistsPage({ onPlaySong }) {
  // State to track which artist is selected (null = show all artists)
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  const selectedArtist = initialArtists.find(a => a.id === selectedArtistId);
  const artistSongs = selectedArtist
    ? initialSongs.filter(s => s.artist.toLowerCase().includes(selectedArtist.name.toLowerCase()))
    : [];

  return (
    <section className="view-section active">
      {!selectedArtist ? (
        <>
          <div className="section-heading-row">
            <div>
              <h2 className="section-title">Featured Vocalists & Producers</h2>
              <p className="section-subtitle">Click any artist to explore their discography & curated tracks.</p>
            </div>
          </div>

          <div className="artists-grid">
            {initialArtists.map((artist) => (
              <div className="artist-card" key={artist.id} onClick={() => setSelectedArtistId(artist.id)}>
                <div className="artist-avatar-wrap">
                  <img src={artist.image} alt={artist.name} />
                </div>
                <h4 className="artist-card-name">{artist.name}</h4>
                <p className="artist-card-genre">{artist.genre.split('·')[0]}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Artist Detail View */
        <div className="artist-detail-view">
          <button className="btn-subtle-secondary mb-4" onClick={() => setSelectedArtistId(null)}>
            <i className="fa-solid fa-arrow-left"></i> Back to Artists
          </button>

          <div className="artist-banner">
            <div className="artist-banner-img-wrap">
              <img src={selectedArtist.image} alt={selectedArtist.name} />
            </div>
            <div className="artist-banner-info">
              <span className="verified-badge"><i className="fa-solid fa-circle-check"></i> Verified Artist</span>
              <h1>{selectedArtist.name}</h1>
              <p className="artist-detail-genre">{selectedArtist.genre}</p>
              <p className="artist-detail-bio">{selectedArtist.bio}</p>
              <div className="artist-detail-actions">
                <button className="btn-subtle-primary" onClick={() => onPlaySong(0, artistSongs)}>
                  <i className="fa-solid fa-play"></i> Play Top Songs
                </button>
              </div>
            </div>
          </div>

          <div className="section-container">
            <h3 className="section-title">Popular Tracks</h3>
            <div className="songs-grid">
              {artistSongs.map((song, index) => (
                <div className="song-card" key={song.id} onClick={() => onPlaySong(index, artistSongs)}>
                  <div className="song-artwork-wrap">
                    <img src={song.image} alt={song.name} loading="lazy" />
                    <span className="song-category-tag">{song.category}</span>
                    <button className="song-card-play-btn" title={`Play ${song.name}`}>
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                  <div className="song-card-meta">
                    <h4 className="song-card-title">{song.name}</h4>
                    <p className="song-card-artist">{song.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
