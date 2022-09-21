import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setModalStatus } from "../store/pokeSlice";
import { useEffect, useState } from "react";

const ModalBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ transition }) => {
    return transition ? "visible" : "hidden";
  }};
  opacity: ${({ transition }) => {
    return transition ? "1" : "0";
  }};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000b3;
  transition: 0.2s;
  z-index: 1000;
`;

const ModalContent = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  width: 100%;
  height: 80%;
  max-width: 400px;
  max-height: 400px;
  background-color: ${({ darkTheme }) => {
    return darkTheme ? "#34495E" : "white";
  }};
  border-radius: 8px;
  transition: 0.2s;
  transform: ${({ transition }) => {
    return transition ? "scale(1)" : "scale(0.8)";
  }};
`;

const Modal = ({ id }) => {
  const [pokeInfo, setPokeInfo] = useState("");
  const [transition, setTransition] = useState(false);

  const dispatch = useDispatch();
  const poke = useSelector((state) => state.poke);

  useEffect(() => {

    let types = [];

    poke.pokeList.forEach((pokemon) => {
      if (pokemon.id === id) {

        pokemon.types.forEach((item) => {
          types.push(item.type.name)
        })

        setPokeInfo({
          img: pokemon.sprites.front_default,
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          types: types,
        });
      }
    })
    setTransition(true);
  }, []);

  const handleClose = () => {
    setTransition(false);
    setTimeout(() => dispatch(setModalStatus({ open: false })), 300);
  };

  return (
    <ModalBox transition={transition}>
      <ModalContent
        className="modal-content"
        transition={transition}
        darkTheme={poke.darkTheme}
      >
        <button className="close-btn" onClick={() => handleClose()}>
          close
        </button>
        <img className="modal-image" src={pokeInfo.img} alt=""></img>
        <h1>{pokeInfo.name}</h1>
        <div>
          <h4>
            <span>Height:</span> {pokeInfo.height / 10}m
          </h4>
          <h4>
            <span>Weight:</span> {pokeInfo.weight / 10}kg
          </h4>
          <div className="desc-type">
            {pokeInfo.types ? (
              pokeInfo.types.map((item) => <p>{item}</p>)
            ) : (
              <></>
            )}
          </div>
        </div>
      </ModalContent>
    </ModalBox>
  );
};

export default Modal;
