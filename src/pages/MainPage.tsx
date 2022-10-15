import bg from '../assets/images/bg.png';
import {useState, TouchEvent} from 'react';
import FirstPage from '../components/FirstPage';
import SecondPage from './SecondPage';
import home from '../assets/images/home.svg';


export default function MainPage () {
    const [currPage, setCurrPage] = useState<number>(0);    
    const [x, setX] = useState<number | null>(0);
    const [y, setY] = useState<number | null>(0);
    const [y2, setY2] = useState<number | null>(0);
    const [x2, setX2] = useState<number | null>(0);
    
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setX(e.touches[0].clientX);
        setY(e.touches[0].clientY);
    }

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        setX2(e.touches[0].clientX);
        setY2(e.touches[0].clientY);
        
    }

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        x && x2 && y && y2 && Math.abs(x - x2) > Math.abs(y - y2) 
        ? (x > x2 
            ? currPage > -2 && setCurrPage(prev => prev - 1) 
            : currPage < 0 && setCurrPage(prev => prev + 1)) 
        : (y && y2 && y > y2 
            ? console.log('up')
            : console.log('down')
            )
        setX(null);
        setX2(null);
        setY(null);
        setY2(null);
    }

    const handleChangeNextPage = () => {
        setCurrPage(prev => prev - 1)
    }

    return (
        <div
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            className={'app'}
        >
            <div
                onClick={() => setCurrPage(0)}
                    className='wrapper__navigation'
                >
                    <img src={home} />
                    <span>|</span>
                    <p>project</p>
                </div>
           <div className="wrapper" style={{transform: `translateX(calc(1024px * ${currPage}))`}}>
                
                <FirstPage setCurrPage={handleChangeNextPage}/>
                <SecondPage currPage={currPage}/>
           </div>
        </div>
    )
}