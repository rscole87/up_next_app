import React, {useState} from 'react'
import Home from './HomeComponent';
import MediaProfile from './MediaProfileComponent';
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
    const [watchList, setWatchList] = useState([]);
    const [activeMedia, setActiveMedia] = useState(null);

    return (
        <>
        <hr />
        <Switch>
            <Route exact path="/" render={() => <Home watchList={watchList} setWatchList={setWatchList} setActiveMedia={setActiveMedia} />} />
            <Route
            path="/media/:mediaId"
            render={() =>
                <MediaProfile media={activeMedia} setActiveMedia={setActiveMedia} /> }
            />
            <Redirect to="/" />
        </Switch>
        </>
    )
}

export default Main;