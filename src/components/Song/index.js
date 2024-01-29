import './song.css'
import { IoIosCloseCircle } from "react-icons/io";


const Song = ({ nameSong, linkSong, singerSong, id, deleteSong }) => {
  return (
    <div className="songs">
      <header>
        <div className="delete">
          <IoIosCloseCircle size={30} onClick={(e) => deleteSong(id)} />
        </div>
        <iframe
          src={linkSong}
          title={nameSong}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </header>
      <h3>{nameSong}</h3>
      <img src={singerSong.image} />
    </div>
  );
};

export default Song