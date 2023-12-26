import React from "react";

const Videos = ({ exerciseVideos, name }) => {


  return (
    <section className="video">
      <div className="content">
        <h2>Watch <span>{name}</span> exercise videos</h2>
      </div>
      <div className="video-flex">
        {exerciseVideos?.slice(2, 5).map((video,index) => {
          return (

            <a
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="blank"
              key={index}
              className="video-card"
            >
              <div className="image">
                {video.video.thumbnails.slice(0,1).map((item,index) => {
                   return(
                    <div key={index}>
                    <img src={item.url} alt={video.video.channelName} />
                    </div>
                   )
                })}
              </div>
              <h4>{video.video.channelName}</h4>
            </a>

          );
        })}
      </div>
    </section>
  );
};

export default Videos;
