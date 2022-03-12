import { useSelector, useDispatch } from 'react-redux';

const Header = ({handler}) => {

    const dispatch = useDispatch()
    const types = ['normal','bug','fire','grass','poison','flying','fighting','water','fairy']
    // console.log(handler);

    return (
        <header>
            <input type="text" placeholder='Search...' className='search-form' onChange={(e) => dispatch(handler(e.target.value))} />
            <select name="pets" className="type-select">
                {
                    types.map((item, index)=><option key={index} value={item}>{item}</option>)
                }
            </select>
        </header> 
    )
}

export default Header;