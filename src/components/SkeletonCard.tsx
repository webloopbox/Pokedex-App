import { useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { RootState } from '../store';

const SkeletonCard = ({ load }: {load: string}) => {

    const poke = useSelector((state: RootState) => state.poke)

    if (load == 'init') {
        return (
            <>
                <SkeletonTheme baseColor={poke.darkTheme ? "#2C3E50" : "#ebebeb"} highlightColor={poke.darkTheme ? "#1f2a36" : "#f5f5f5"}>
                    <div className='skeleton-element'><Skeleton height={300} width={250} borderRadius={10} /></div>
                    <div className='skeleton-element'><Skeleton height={300} width={250} borderRadius={10} /></div>
                    <div className='skeleton-element'><Skeleton height={300} width={250} borderRadius={10} /></div>

                    <div className='skeleton-element'><Skeleton height={50} width={250} borderRadius={10} /></div>
                    <div className='skeleton-element'><Skeleton height={50} width={250} borderRadius={10} /></div>
                    <div className='skeleton-element'><Skeleton height={50} width={250} borderRadius={10} /></div>
                </SkeletonTheme>
            </>
        )
    } else {
        return (
            <>
                <SkeletonTheme baseColor={poke.darkTheme ? "#2C3E50" : "#ebebeb"} highlightColor={poke.darkTheme ? "#1f2a36" : "#f5f5f5"}>
                    <div className='skeleton-element more'><Skeleton height={50} width={250} borderRadius={10} /></div>
                    <div className='skeleton-element more'><Skeleton height={50} width={250} borderRadius={10} /></div>
                    <div className='skeleton-element more'><Skeleton height={50} width={250} borderRadius={10} /></div>
                </SkeletonTheme>
            </>
        )
    }
}

export default SkeletonCard;