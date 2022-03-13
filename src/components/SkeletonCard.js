import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = ({load}) => {

    if (load=='init') {
        return (
            <>
                <div className='skeleton-element'><Skeleton height={300} width={250} borderRadius={10}/></div>
                <div className='skeleton-element'><Skeleton height={300} width={250} borderRadius={10}/></div>
                <div className='skeleton-element'><Skeleton height={300} width={250} borderRadius={10}/></div>

                <div className='skeleton-element'><Skeleton height={50} width={250} borderRadius={10}/></div>
                <div className='skeleton-element'><Skeleton height={50} width={250} borderRadius={10}/></div>
                <div className='skeleton-element'><Skeleton height={50} width={250} borderRadius={10}/></div>
            </>
        )
    } else {
        return (
            <>
                <div className='skeleton-element more'><Skeleton height={50} width={250} borderRadius={10}/></div>
                <div className='skeleton-element more'><Skeleton height={50} width={250} borderRadius={10}/></div>
                <div className='skeleton-element more'><Skeleton height={50} width={250} borderRadius={10}/></div>
            </>
        )
    }

    

}
export default SkeletonCard;