import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { setModalStatus } from '../pokedex';
import { useEffect, useState } from "react";

const ModalBox = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
visibility: ${({open})=>{
    return open ? 'visible' : 'hidden'
}};
opacity: ${({open})=>{
    return open ? '1' : '0'
}};
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #000000b3;
z-index: 1000;
`

const Modal = ({open, id}) => {

    const [pokeInfo, setPokeInfo] = useState('')
    const dispatch = useDispatch()
    const poke = useSelector((state)=>state.poke)
    



    useEffect(()=>{
        for(let i=0;i<poke.pokeList.length;i++) {
            if(poke.pokeList[i].id==id) {
                setPokeInfo({
                    img: poke.pokeList[i].sprites.front_default,
                    name: poke.pokeList[i].name,
                    height: poke.pokeList[i].height,
                    weight: poke.pokeList[i].weight,
                })
            }
        }
    },[])

    console.log("modal: ", pokeInfo);

    if(open) {
        return (
            <ModalBox open={open}>
                <div className='modal-content'>
                  <button className="close-btn" onClick={()=>dispatch(setModalStatus({open: false}))}>close</button>
                  <img className="modal-image" src={pokeInfo.img} alt=''></img>
                  <h1>{pokeInfo.name}</h1>
                  <div>
                    <h4><span>Height:</span> {pokeInfo.height}m</h4>
                    <h4><span>Weight:</span> {pokeInfo.weight}kg</h4>
                  </div>
                </div>
            </ModalBox>
        )
    } else {
        return <></>
    }
    
}

export default Modal