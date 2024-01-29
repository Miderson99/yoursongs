import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import Genre from './components/Genre';
import Footer from './components/footer';
import { v4 as uuidv4 } from "uuid";


function App() {

  const initialSingers = [
    {
      id: uuidv4(),
      name: "Nirvana",
      genre: "rock",
      image:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRB21zI0LZhY-7MKosr9EVPUrkRhwYMlfhSEnClJ1zS5zmWdsx7o2lSiQB-1pSHcmx0",
    },
    {
      id: uuidv4(),
      name: "AC/DC",
      genre: "rock",
      image:"https://s2-g1.glbimg.com/gr7I-JX3RtmI5v4q4sBvd1U01KY=/0x0:2000x1270/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/8/evEDBvSFy34YyNU5yENA/acdc.jpg",
    },
    {
      id: uuidv4(),
      name: "Journay",
      genre: "rock",
      image:"https://upload.wikimedia.org/wikipedia/commons/7/73/Journey_band.JPG",
    },
    {
      id: uuidv4(),
      name: "Billie Eilish",
      genre: "pop alternativo",
      image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS0-tXbwW8fpk8I-xtz2IoFWJD5kPoNTj9Ge7V1sOGKITjooIuIsq34iLuXNlwpK5iC",
    },
    {
      id: uuidv4(),
      name: "The Weekend",
      genre: "pop alternativo",
      image: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515396_10843.jpg"
    },
    {
      id: uuidv4(),
      name: "Ed Sheeren",
      genre: "pop alternativo",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRc4AESl1S8fji2_mLhZtdwAarkWbLSrGMtiVjMrrERAg4eew-B",
    },
    {
      id: uuidv4(),
      name: "Ze neto e Cristiano",
      genre: "sertanejo",
      image: "https://yt3.googleusercontent.com/GYCLv2OnQNLOmFeUrXcSwHNrnMc8II7XX6MJ7KJrqffFPqiccDQVAGcVMVcQmxauLvSZHJLztw=s900-c-k-c0x00ffffff-no-rj"    
    },
    {
      id: uuidv4(),
      name: "Marília Mendonça",
      genre: "sertanejo",
      image: "https://f.i.uol.com.br/fotografia/2021/11/05/163614612561859bcdd6749_1636146125_3x2_md.jpg"    
    },
    {
      id: uuidv4(),
      name: "Henrrique e Juliano",
      genre: "sertanejo",
      image: "https://f.i.uol.com.br/fotografia/2022/08/07/165988444462efd39c3a6fd_1659884444_3x2_md.jpg"}
  ];


  const initialSongs = [
    {
      id: uuidv4(),
      valueNameMusic: "smell like teen spirit",
      genre: "rock",
      objectSinger: {
        id: uuidv4(),
        name: "Nirvana",
        genre: "rock",
        image:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRB21zI0LZhY-7MKosr9EVPUrkRhwYMlfhSEnClJ1zS5zmWdsx7o2lSiQB-1pSHcmx0",
      },
      valueLinkMusic: "https://www.youtube.com/embed/hTWKbfoikeg",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Don't Stop Believin",
      genre: "rock",
      objectSinger: {
        id: uuidv4(),
        name: "Journay",
        genre: "rock",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/73/Journey_band.JPG",
      },
      valueLinkMusic: "https://www.youtube.com/embed/1k8craCGpgs",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Thunderstruck",
      genre: "rock",
      objectSinger: {
        id: uuidv4(),
        name: "AC/DC",
        genre: "rock",
        image:
          "https://s2-g1.glbimg.com/gr7I-JX3RtmI5v4q4sBvd1U01KY=/0x0:2000x1270/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/8/evEDBvSFy34YyNU5yENA/acdc.jpg",
      },
      valueLinkMusic: "https://www.youtube.com/embed/v2AC41dglnM",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Lovely",
      genre: "pop alternativo",
      objectSinger: {
        id: uuidv4(),
        name: "Billie Eilish",
        genre: "pop alternativo",
        image:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS0-tXbwW8fpk8I-xtz2IoFWJD5kPoNTj9Ge7V1sOGKITjooIuIsq34iLuXNlwpK5iC",
      },
      valueLinkMusic: "https://www.youtube.com/embed/V1Pl8CzNzCw",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Save your tears",
      genre: "pop alternativo",
      objectSinger: {
        id: uuidv4(),
        name: "The Weekend",
        genre: "pop alternativo",
        image:
          "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515396_10843.jpg",
      },
      valueLinkMusic: "https://www.youtube.com/embed/s37x2VSZrLw",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Shape of you",
      genre: "pop alternativo",
      objectSinger: {
        id: uuidv4(),
        name: "Ed Sheeren",
        genre: "pop alternativo",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRc4AESl1S8fji2_mLhZtdwAarkWbLSrGMtiVjMrrERAg4eew-B",
      },
      valueLinkMusic: "https://www.youtube.com/embed/JGwWNGJdvx8",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Por nossos filhos",
      genre: "sertanejo",
      objectSinger: {
        id: uuidv4(),
        name: " Ze neto e Cristiano",
        genre: "sertanejo",
        image:
          "https://yt3.googleusercontent.com/GYCLv2OnQNLOmFeUrXcSwHNrnMc8II7XX6MJ7KJrqffFPqiccDQVAGcVMVcQmxauLvSZHJLztw=s900-c-k-c0x00ffffff-no-rj",
      },
      valueLinkMusic: "https://www.youtube.com/embed/wxLE0V9EFqg",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Na hora da raiva",
      genre: "sertanejo",
      objectSinger: {
        id: uuidv4(),
        name: "Henrrique e Juliano",
        genre: "sertanejo",
        image:
          "https://f.i.uol.com.br/fotografia/2022/08/07/165988444462efd39c3a6fd_1659884444_3x2_md.jpg",
      },
      valueLinkMusic: "https://www.youtube.com/embed/X8jD3F9PI7Q",
    },
    {
      id: uuidv4(),
      valueNameMusic: "Todo mundo menos você",
      genre: "sertanejo",
      objectSinger: {
        id: uuidv4(),
        name: "Marília Mendonça",
        genre: "sertanejo",
        image:
          "https://f.i.uol.com.br/fotografia/2021/11/05/163614612561859bcdd6749_1636146125_3x2_md.jpg",
      },
      valueLinkMusic: "https://www.youtube.com/embed/UDVr3ab3NVM",
    },
  ];


 const genres = [
   "blues",
   "jazz",
   "r&b (rhythm and blues)",
   "soul",
   "funk",
   "gospel",
   "rock",
   "metal",
   "pop",
   "pop alternativo",
   "country",
   "electronic",
   "hip hop",
   "reggae",
   "funk",
   "ska",
   "dancehall",
   "folk",
   "classical",
   "world",
   "experimental",
   "j-pop (japanese pop)",
   "k-pop (korean pop)",
   "progressive rock",
   "new wave",
   "disco",
   "samba",
   "bossa nova",
   "rap rock",
   "grime",
   "acid jazz",
   "post-punk",
   "power metal",
   "folk metal",
   "celtic music",
   "trap metal",
   "psychedelic rock",
   "ambient house",
   "funk metal",
   "electronic rock",
   "industrial metal",
   "nu metal",
   "melodic death metal",
   "symphonic metal",
   "electro swing",
   "chillstep",
   "vaporwave",
   "synthwave",
   "sertanejo",
 ];

  const [valueSongs, setValueSongs] = useState(initialSongs);
  const [valueSingers, setValueSingers] = useState(initialSingers)
  
  function deleteSong(e) {
    setValueSongs(valueSongs.filter((songItem) => songItem.id !== e))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        addSong={(songNew) => setValueSongs([...valueSongs, songNew])}
        addSinger={(singerNew) => setValueSingers([...valueSingers, singerNew])}
        singers={valueSingers}
        genres={genres}
      />

      {[...new Set(valueSingers.map((singer) => singer.genre))].map((genre, i) => (
        <Genre
        deleteSong={(e) => deleteSong(e)}
          key={i}
          nameGenre={genre}
          songsGenre={valueSongs.filter((songitem) => songitem.objectSinger.genre === genre)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

