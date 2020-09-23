import React, { useState } from 'react';
import './SearchResult.css';
import StarIcon from '@material-ui/icons/Star';
import { FavoriteRounded } from '@material-ui/icons';

function SearchResult({ img, location, title, description, star, price, total }) {
  const [like, setLike] = useState(false);

  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteRounded className="searchResult_heart" color={like ? 'error' : 'action'} onClick={() => setLike(!like)} />
      <div className="searchResult_info">
        <div className="searchResult_infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult_infoBottom">
          <div className="searchResult_stars">
            <StarIcon className="searchResult_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
