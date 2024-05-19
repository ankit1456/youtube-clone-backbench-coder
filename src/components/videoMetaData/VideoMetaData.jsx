import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HelmetCustom from "./../HelmetCustom";
import {
  getChannelDetails,
  checkSubscriptionStatus,
} from "./../../redux/actions/channel.action";
import { formatNumber } from "../../utils";

const VideoMetaData = ({ video, videoId }) => {
  const history = useHistory();
  const { channelId, channelTitle, description, title, publishedAt } =
    video?.snippet;
  const { viewCount, likeCount, dislikeCount } = video?.statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className='py-2 videoMetaData'>
      <HelmetCustom title={title} description={description} />
      <div className='videoMetaData__top'>
        <h5>{title} </h5>
        <div className='py-1 d-flex justify-content-between align-items-center'>
          <span>
            {formatNumber(viewCount)} views •{" "}
            {moment(publishedAt).fromNow()}{" "}
          </span>

          <div>
            <span className='mr-3 videoMetaData__likes'>
              <MdThumbUp size={25} /> {formatNumber(likeCount)}
            </span>
            <span className='mr-3 videoMetaData__likes'>
              <MdThumbDown size={25} /> {formatNumber(dislikeCount)}
            </span>
          </div>
        </div>
      </div>
      <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
        <div className='d-flex justify-content-between video__metaData'>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => history.push(`/channel/${channelId}`)}
            src={channelSnippet?.thumbnails?.default?.url}
            alt=''
            className='rounded-circle'
          />
          <div className='d-flex flex-column'>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push(`/channel/${channelId}`)}
            >
              {channelTitle}
            </span>

            <span>
              {" "}
              {formatNumber(channelStatistics?.subscriberCount)}{" "}
              Subscribers
            </span>
          </div>
        </div>

        <button
          className={`p-2 m-2 border-0 btn ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className='videoMetaData__description'>
        <ShowMoreText
          lines={2}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
