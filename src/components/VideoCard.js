import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard(props) {
  const { video } = props;
  return (
    <div key={video._id} className="card">
      <Link to={`/video/${video._id}`}>
        <img className="medium" src={video.url} alt={video.name} />
      </Link>
      <div className="card-body">
        <Link to={`/video/${video._id}`}>
          <h2>{video.name}</h2>
        </Link>
      </div>
    </div>
  );
}
