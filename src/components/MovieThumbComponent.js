import React from 'react'

const MovieThumb = (props) => {
    return (
        <>
            <div className="movie-thumb">
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default MovieThumb;