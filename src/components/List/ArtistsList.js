import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';

const ArtistsList = ({ artists }) => {
    return (
        <React.Fragment>
            {Object.keys(artists).length > 0 && (
                <div className="artists">
                    {artists.items.map((artist, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Card style={{ width: '18rem' }}>
                                    <a
                                        target="_blank"
                                        href={artist.external_urls.spotify}
                                        rel="noopener noreferrer"
                                        className="card-image-link"
                                    >
                                        {!_.isEmpty(artist.images) ? (
                                            <Card.Img
                                                variant="top"
                                                src={artist.images[0].url}
                                                alt=""
                                            />
                                        ) : (
                                            <img alt="No Pic" />
                                        )}
                                    </a>
                                    <Card.Body>
                                        <Card.Title>{artist.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </React.Fragment>
    );
};

export default ArtistsList;