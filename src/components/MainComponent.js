import React, {useState} from 'react'
import Home from './HomeComponent';

const Main = () => {
    const [watchList, setWatchList] = useState([]);

    return (
        <Home watchList={watchList} setWatchList={setWatchList} />
    )
}

export default Main;