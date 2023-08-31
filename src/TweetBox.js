import { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button, Input } from "@mui/material";
import db from "./firebase";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sentTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "The New Greatest Tester",
      username: "DBneoclonetester5",
      Verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://static1.personality-database.com/profile_images/e301d7ccc922412e94d1e1788ee2947d.png",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://64.media.tumblr.com/1cecb53ebf12d943a0e29c9e190c1a34/3d93b3a22bfdba57-a0/s400x600/81297275e671f12e569575259d54cadccfe261b4.png" />
          <Input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sentTweet}
          className="tweetBox__tweetButton"
          type="button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
