import Song from '../Song'
import './genre.css'


const Genre = ({ nameGenre, songsGenre, deleteSong }) => {
  return (
    <section className="genre">
      <h2>{nameGenre.charAt(0).toUpperCase() + nameGenre.slice(1)}</h2>

      <div className="container-songs">
        {songsGenre.map((songItem, i) => (
          <Song
            key={i}
            id={songItem.id}
            deleteSong={(e) => deleteSong(e)}
            nameSong={songItem.valueNameMusic}
            linkSong={songItem.valueLinkMusic}
            singerSong={songItem.objectSinger}
          />
        ))}
      </div>
    </section>
  );
};

export default Genre