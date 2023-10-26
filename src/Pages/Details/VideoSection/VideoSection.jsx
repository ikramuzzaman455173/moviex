import React, { useState } from "react";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import VideoPopup from "../../../Components/VideoPopup/VideoPopup";
import Img from "../../../Components/LazyLoadImage/LazyLoadImage";
import PlayBtn from "../PlayBtn";
const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <>
      {/* ====proper validation added===== */}
      
      {data===null||data.results.length===0?'':<div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {!!data && <>
              {data?.results?.map(video => (
                <div className="videoItem" onClick={() => {
                  setVideoId(video.key)
                  setShow(true)
                }} key={video.id}>
                  <div className="videoThumbnail">
                    <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt="video thumbanail img" />
                    <PlayBtn/>
                  </div>
                  {video.name.length>=30?<div className="videoTitle">{video.name.slice(0,30)}...</div>:<div className="videoTitle">{video.name}</div>}
                </div>
              ))}
            </>}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>}
    </>
  );
};

export default VideosSection;
