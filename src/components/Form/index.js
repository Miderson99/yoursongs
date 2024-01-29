import { useState } from 'react';
import Button from '../Button';
import DropDownList from '../DropDownList'
import Field from '../Field'
import './form.css'
import { v4 as uuidv4 } from "uuid";



const Form = ({ addSong, singers, addSinger, genres }) => {
  const [valueNameMusic, setValueNameMusic] = useState("");
  const [valueLinkMusic, setValueLinkMusic] = useState("");
  const [valueDropSinger, setValueDropSinger] = useState("");

  const [name, setValueNameSinger] = useState("");
  const [image, setValueLinkImgSinger] = useState("");
  const [genre, setValueGenre] = useState("");

  const onSubmitSong = (event) => {
    event.preventDefault();

    const id = uuidv4();

    const objectSinger = singers.find(
      (singer) => valueDropSinger.toUpperCase() === singer.name.toUpperCase()
    );

    setValueNameMusic("");
    setValueLinkMusic("");
    setValueDropSinger("");

    console.log({ id, valueNameMusic, valueLinkMusic, objectSinger });
    addSong({ id, valueNameMusic, valueLinkMusic, objectSinger });
  };

  const onSubmitSinger = (e) => {
    e.preventDefault();

    const id = uuidv4();

    addSinger({ id, name, genre, image });

    setValueNameSinger("");
    setValueLinkImgSinger("");
    setValueGenre("");
  };

  function fixLink(link) {
    // Verifica se o link fornecido é um link comum do YouTube
    var padraoLinkComum =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    var correspondencia = link.match(padraoLinkComum);

    // Se o link corresponder ao padrão, construa o link de incorporação
    if (correspondencia && correspondencia[1]) {
      var idVideo = correspondencia[1];
      var linkEmbed = "https://www.youtube.com/embed/" + idVideo;
      return linkEmbed;
    } else {
      // Se o link não corresponder ao padrão, retorne uma mensagem de erro
      return link;
    }
  }

  return (
    <div className="content-form">
      <section className="form">
        <form className="song" onSubmit={onSubmitSong}>
          <Field
            requiredInput={true}
            typeInput={"text"}
            valueInput={valueNameMusic}
            placeHolderInput={"Insira o nome da música"}
            labelInput={"Nome da música"}
            handleInputChange={(value) => setValueNameMusic(value)}
          />
          <Field
            requiredInput={true}
            typeInput={"text"}
            valueInput={valueLinkMusic}
            placeHolderInput={"Insira o link música"}
            labelInput={"Link da música"}
            handleInputChange={(value) => setValueLinkMusic(fixLink(value))}
          />
          <DropDownList
            listOptions={["", ...singers.map((sing) => sing.name)]}
            requiredDrop={true}
            valueDrop={valueDropSinger}
            labelDrop={"Insira o Cantor"}
            handleDropChange={(value) => setValueDropSinger(value)}
          />
          <Button />
        </form>
      </section>
      <section className="form" onSubmit={onSubmitSinger}>
        <form className="song">
          <div className="same-line-field">
            <Field
              typeInput={"text"}
              valueInput={name}
              placeHolderInput={"Insira o nome do cantor"}
              labelInput={"Nome do cantor"}
              handleInputChange={(value) => setValueNameSinger(value)}
            />

            <DropDownList
              listOptions={["", ...genres]}
              requiredDrop={true}
              valueDrop={genre}
              labelDrop={"Insira o Gênero"}
              handleDropChange={(value) => setValueGenre(value)}
            />
          </div>

          <Field
            typeInput={"text"}
            valueInput={image}
            placeHolderInput={"Insira o link da imagem"}
            labelInput={"Link do endereço da imagem"}
            handleInputChange={(value) => setValueLinkImgSinger(fixLink(value))}
          />

          <img
            onError={(e) => {
              e.target.src = "./images/user.png";
            }}
            className="img-link"
            src={image}
          />

          <Button />
        </form>
      </section>
    </div>
  );
};

export default Form