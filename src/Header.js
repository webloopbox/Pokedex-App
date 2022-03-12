import { useSelector, useDispatch } from 'react-redux';
import { setSearchType } from './pokedex';

const Header = ({handler, currentType}) => {

    const dispatch = useDispatch()
    const types = ['all','normal','bug','fire','grass','poison','flying','fighting','water','fairy']
    // console.log(currentType);

    return (
        <header>
            <input type="text" placeholder='Search...' className='search-form' onChange={(e) => dispatch(handler(e.target.value))} />
            <select className="type-select" value={currentType} onChange={(e)=>dispatch(setSearchType(e.target.value))}>
                {
                    types.map((item, index)=><option key={index} value={item}>{item}</option>)
                }
            </select>
        </header> 
    )
}

export default Header;