
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { initialSongs } from './data';

const MusicLibraryContext = createContext();

function getSavedData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

// CONTEXT PROVIDER

export function MusicLibraryProvider({ children }) {
  const [recentlyPlayed, setRecentlyPlayed] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem('wavify-recently-played')
      ) || [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState(
    () => getSavedData('wavify-favorites', [])
  );

  const [playlists, setPlaylists] = useState(
    () => getSavedData('wavify-user-playlists', [])
  );

  useEffect(() => {
    localStorage.setItem(
      'wavify-favorites',
      JSON.stringify(favorites)
    );
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(
      'wavify-user-playlists',
      JSON.stringify(playlists)
    );
  }, [playlists]);

  function toggleFavorite(songId) {
    setFavorites(prev =>
      prev.includes(songId)
        ? prev.filter(id => id !== songId)
        : [...prev, songId]
    );
  }

  function createPlaylist(name) {
    const trimmedName = name.trim();

    if (!trimmedName) return false;

    setPlaylists(prev => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: trimmedName,
        songIds: []
      }
    ]);

    return true;
  }

  function deletePlaylist(playlistId) {
    setPlaylists(prev =>
      prev.filter(playlist => playlist.id !== playlistId)
    );
  }
  
const addToRecentlyPlayed = (song) => {
  if (!song || song.id == null) return;

  setRecentlyPlayed(previous => {
    const updatedHistory = [
      song,
      ...previous.filter(item => item.id !== song.id)
    ].slice(0, 20);

    localStorage.setItem(
      'wavify-recently-played',
      JSON.stringify(updatedHistory)
    );

    return updatedHistory;
  });
};

const removeFromRecentlyPlayed = (songId) => {
  setRecentlyPlayed(previous => {
    const updatedHistory = previous.filter(
      song => song.id !== songId
    );

    localStorage.setItem(
      'wavify-recently-played',
      JSON.stringify(updatedHistory)
    );

    return updatedHistory;
  });
};

const clearRecentlyPlayed = () => {
  setRecentlyPlayed([]);
  localStorage.removeItem('wavify-recently-played');
};


  function addSongToPlaylist(playlistId, songId) {
    setPlaylists(prev =>
      prev.map(playlist =>
        playlist.id === playlistId &&
        !playlist.songIds.includes(songId)
          ? {
              ...playlist,
              songIds: [...playlist.songIds, songId]
            }
          : playlist
      )
    );
  }

  function removeSongFromPlaylist(playlistId, songId) {
    setPlaylists(prev =>
      prev.map(playlist =>
        playlist.id === playlistId
          ? {
              ...playlist,
              songIds: playlist.songIds.filter(id => id !== songId)
            }
          : playlist
      )
    );
  }

  function getSongs(songIds) {
    return songIds
      .map(id => initialSongs.find(song => song.id === id))
      .filter(Boolean);
  }

  return (
    <MusicLibraryContext.Provider
      value={{
        favorites,
        playlists,
        toggleFavorite,
        createPlaylist,
        deletePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
        getSongs,
        recentlyPlayed,
        addToRecentlyPlayed,
        removeFromRecentlyPlayed,
        clearRecentlyPlayed,
      }}
    >
      {children}
    </MusicLibraryContext.Provider>
  );
}

export function useMusicLibrary() {
  return useContext(MusicLibraryContext);
}

// MUSIC LIBRARY PAGE

function MusicLibraryPage({ onPlaySong }) {
  const {
    favorites,
    playlists,
    toggleFavorite,
    createPlaylist,
    deletePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    getSongs,
    recentlyPlayed,
    removeFromRecentlyPlayed,
    clearRecentlyPlayed
  } = useMusicLibrary();

  const [activeTab, setActiveTab] = useState('favorites');
  const [playlistName, setPlaylistName] = useState('');
  const [selectedSongs, setSelectedSongs] = useState({});
  const [message, setMessage] = useState('');

  function handleCreatePlaylist(e) {
    e.preventDefault();

    if (!playlistName.trim()) {
      setMessage('Please enter a playlist name.');
      return;
    }

    createPlaylist(playlistName);
    setPlaylistName('');
    setMessage('Playlist created successfully!');
  }

  function handleAddSong(playlistId) {
    const songId = Number(selectedSongs[playlistId]);

    if (!songId) {
      setMessage('Please select a song first.');
      return;
    }

    const playlist = playlists.find(p => p.id === playlistId);

    if (playlist.songIds.includes(songId)) {
      setMessage('This song is already in that playlist.');
      return;
    }

    addSongToPlaylist(playlistId, songId);
    setSelectedSongs(prev => ({ ...prev, [playlistId]: '' }));
    setMessage('Song added to playlist!');
  }

  function renderSong(song, playlistId = null, index = 0, queue = []) {
    return (
      <div
        className="library-song"
        key={`${playlistId || 'fav'}-${song.id}`}
      >
        <img src={song.image} alt={song.name} />

        <div className="library-song-info">
          <h3>{song.name}</h3>
          <p>{song.artist}</p>
        </div>

        <button
          type="button"
          className="library-icon-button"
          onClick={() => onPlaySong(index, queue)}
          aria-label={`Play ${song.name}`}
        >
          <i className="fa-solid fa-play" />
        </button>

        {playlistId ? (
          <button
            type="button"
            className="library-icon-button"
            onClick={() => removeSongFromPlaylist(playlistId, song.id)}
            aria-label={`Remove ${song.name} from playlist`}
          >
            <i className="fa-solid fa-trash" />
          </button>
        ) : (
          <button
            type="button"
            className="library-icon-button favorite-active"
            onClick={() => toggleFavorite(song.id)}
            aria-label={`Remove ${song.name} from favorites`}
          >
            <i className="fa-solid fa-heart" />
          </button>
        )}
      </div>
    );
  }

  const favoriteSongs = getSongs(favorites);

  return (
    <section className="view-section active music-library-page">
      <div className="library-heading">
        <p className="library-eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1>My Music Library</h1>
        <p>Keep your favorite tracks close and build your own playlists.</p>
      </div>

      <div className="library-tabs">
        <button
          className={activeTab === 'favorites' ? 'active' : ''}
          onClick={() => setActiveTab('favorites')}
        >
          <i className="fa-solid fa-heart" /> Favorites ({favorites.length})
        </button>

        <button
          className={activeTab === 'playlists' ? 'active' : ''}
          onClick={() => setActiveTab('playlists')}
        >
          My Playlists ({playlists.length})
        </button>
      </div>

      {message && <p className="library-message" role="status">{message}</p>}

      {activeTab === 'favorites' && (
        <div className="library-song-list">
          {favoriteSongs.length ? (
            favoriteSongs.map((song, index) =>
              renderSong(song, null, index, favoriteSongs)
            )
          ) : (
            <div className="library-empty">
              <i className="fa-regular fa-heart" />
              <h2>No favorites yet</h2>
              <p>Click the heart on any song to save it here.</p>
            </div>
          )}
        </div>
      )}
      
{/* Recently Played Section */}
<section className="recently-played-section">
  <div className="recently-played-header">
    <h2>Recently Played</h2>

    {recentlyPlayed.length > 0 && (
      <button onClick={clearRecentlyPlayed}>
        Clear History
      </button>
    )}
  </div>

  {recentlyPlayed.length === 0 ? (
    <p className="empty-history">
      Your listening history will appear here.
    </p>
  ) : (
    <div className="recently-played-list">
      {recentlyPlayed.map((song) => (
        <div className="recently-played-card" key={song.id}>
          <img
            src={song.image}
            alt={song.name}
            className="recently-played-image"
          />

          <div className="recently-played-info">
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
          </div>

          <button
            onClick={() => removeFromRecentlyPlayed(song.id)}
            title="Remove from history"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )}
</section>


      {activeTab === 'playlists' && (
        <>
          <form className="create-playlist-form" onSubmit={handleCreatePlaylist}>
            <input
              value={playlistName}
              onChange={e => setPlaylistName(e.target.value)}
              placeholder="Enter a new playlist name"
              aria-label="New playlist name"
            />
            <button type="submit">+ Create Playlist</button>
          </form>

          {playlists.map(playlist => {
            const songs = getSongs(playlist.songIds);

            return (
              <div className="user-playlist" key={playlist.id}>
                <div className="user-playlist-heading">
                  <div>
                    <h2>{playlist.name}</h2>
                    <p>{songs.length} tracks</p>
                  </div>

                  <button
                    type="button"
                    className="library-delete-button"
                    onClick={() => deletePlaylist(playlist.id)}
                  >
                    Delete Playlist
                  </button>
                </div>

                <div className="add-song-row">
                  <select
                    value={selectedSongs[playlist.id] || ''}
                    onChange={e =>
                      setSelectedSongs(prev => ({
                        ...prev,
                        [playlist.id]: e.target.value
                      }))
                    }
                    aria-label={`Choose a song for ${playlist.name}`}
                  >
                    <option value="">Choose a song</option>
                    {initialSongs.map(song => (
                      <option key={song.id} value={song.id}>
                        {song.name} · {song.artist}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => handleAddSong(playlist.id)}
                  >
                    Add Song
                  </button>
                </div>

                {songs.length ? (
                  <div className="library-song-list">
                    {songs.map((song, index) =>
                      renderSong(song, playlist.id, index, songs)
                    )}
                  </div>
                ) : (
                  <p className="empty-playlist-text">
                    This playlist is empty. Add a song above.
                  </p>
                )}
              </div>
            );
          })}
        </>
      )}
    </section>
  );
}

export default MusicLibraryPage;
