import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listVideos } from "../actions/videoActions";
import ThemeList from "../components/ThemeList";
import Video from "../components/VideoCard";

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const videoList = useSelector((state) => state.videoList);
  const { videos } = videoList;
  
  useEffect(() => {
    dispatch(listVideos());
    console.log(listVideos());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div>
          <ThemeList />
        </div>
        <div className="col-3">
          <div className="row center">
            {videos.map((video) => (
              <Video key={video._id} video={video}></Video>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
