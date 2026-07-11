import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../Data";
import moment from "moment";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import { decode } from "html-entities";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [error, setError] = useState(false);

  const [showComments,setShowComments] = useState(false);
  const [showDescription,setShowDescription] = useState(false);

  //Fetching Video Data
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setApiData(data.items[0]);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  //Fetching Channel Data
  const fetchOtherData = async () => {
    if (!apiData) return;
    try {
      const ChannelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

      const channelRes = await fetch(ChannelData_url);
      const channelJson = await channelRes.json();

      setChannelData(channelJson.items?.[0] || null);

      //Fetching Comments Data
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

      const commentRes = await fetch(comment_url);
      const commentJson = await commentRes.json();

      setCommentData(commentJson.items || []);
    } catch (error) {
      console.log(error);
      setCommentData([]);
    }
  };


  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  if (error) {
    return <Error />;
  }

  return (
    <div className="play-video">
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16k"}{" "} Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span><BiSolidLike className="icon"/>{apiData ? value_converter(apiData.statistics.likeCount) : 155}</span>
          <span><BiSolidDislike className="icon" /></span>
          <span><IoMdShareAlt className="icon" />share</span>
          <span><MdOutlineBookmarkAdd className="icon" />save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url || user_profile}/>
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "DarkVector"}</p>
          <span>{channelData? value_converter(channelData.statistics.subscriberCount): "1M"}{" "}Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{showDescription ? apiData?.snippet?.description:apiData?.snippet?.description?.slice(0, 250)}</p>
        <span className="description-toggle" onClick={()=>setShowDescription(!showDescription)}>
            {showDescription ? "Show less" : "Show more"}
        </span>
        <hr />
        <div className="comment-toggle" onClick={()=>setShowComments(!showComments)}>
            {showComments ? "Hide Comments" : "View Comments"}
        </div>
        <div className={`comments ${showComments ? "show" : ""}`}>
          <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 0}{" "}Comments</h4>

          {commentData.map((item, index) => {
            const comment = item.snippet.topLevelComment.snippet;

            return (
              <div className="comment" key={index}>
                <img src={comment.authorProfileImageUrl || user_profile} />

                <div className="comment-content">
                  <h3>{comment.authorDisplayName}
                  <span>{moment(comment.publishedAt).fromNow()}</span>
                  </h3>
                  <p>{decode(comment.textDisplay)}</p>
                  <div className="comment-action">
                    <span><BiSolidLike /> {comment.likeCount}</span>
                    <span><BiSolidDislike /></span>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
