import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
import ButtonAppBar from "./ButtonAppBar";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId="1677137419500679169" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="subtlefraud"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="www.twitch.tv/subtlefraudulence"
          options={{ text: "Twitch link test", via: "SubtleFraud" }}
        />
      </div>
      <ButtonAppBar />
    </div>
  );
}

export default Widgets;
