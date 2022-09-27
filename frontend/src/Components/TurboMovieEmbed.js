import React from "react";
import PropTypes from "prop-types";

const TurboMovie = ({ embededMovieId }) => (
    <div className="turbo-movie">
        <iframe
            width="100vw"
            height="100vh"
            src={`https://www.youtube.com/embed/${embededMovieId}?autoplay=1&showinfo=0&controls=0"`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encyrpted-media; gyroscope: picture-in-picture"
            allowFullScreen
            title="Turbo Promo"
            autoplay="0"
        />
    </div>
);

TurboMovie.propTypes = {
    embededMovieId: PropTypes.string.isRequired
};


export default TurboMovie