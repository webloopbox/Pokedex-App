import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setModalStatus } from "../store/pokeSlice";
import { useEffect, useState } from "react";
import { ModalStyledProps } from "../models/Modal";
import { RootState } from "../store";
import { ModalPokeInfo } from "../models/Poke";

const ModalBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props: ModalStyledProps) => {
    return props.transition ? "visible" : "hidden";
  }};
  opacity: ${(props: ModalStyledProps) => {
    return props.transition ? "1" : "0";
  }};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000b3;
  transition: 0.2s;
  z-index: 1000;
`;

const ModalContent = styled.div.attrs((props: ModalStyledProps) => ({
  className: props.className,
}))`
  position: relative;
  width: 100%;
  height: 80%;
  max-width: 400px;
  max-height: 400px;
  background-color: ${(props: ModalStyledProps) => {
    return props.darkTheme ? "#34495E" : "white";
  }};
  border-radius: 8px;
  transition: 0.2s;
  transform: ${(props: ModalStyledProps) => {
    return props.transition ? "scale(1)" : "scale(0.8)";
  }};
`;

const Modal = ({ id } : {id: number|null}) => {
  const [pokeInfo, setPokeInfo] = useState<ModalPokeInfo>({});
  const [transition, setTransition] = useState<boolean>(false);

  const dispatch = useDispatch();
  const poke = useSelector((state: RootState) => state.poke);

  useEffect(() => {

    let types: Array<string> = [];

    poke.pokeList.forEach((pokemon) => {
      if (pokemon.id === id) {

        pokemon.types.forEach((item) => {
          types.push(item.type.name)
        })

        setPokeInfo({
          img: pokemon.image,
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
            <span>Height:</span> {pokeInfo.height ? pokeInfo.height / 10 : ' - '}m
          </h4>
          <h4>
            <span>Weight:</span> {pokeInfo.weight ? pokeInfo.weight / 10 : ' - '}kg
          </h4>
          <div className="desc-type">
            {pokeInfo.types ? (
              pokeInfo.types.map((item: string) => <p>{item}</p>)
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
