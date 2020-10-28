import React, { useEffect, useState } from "react";
import firebase from "firebase";
import FlipNumbers from "react-flip-numbers";
import { firebaseConfig } from "../../utils/config";
import { useAudioPlayer } from "react-use-audio-player";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const BigButton = (props) => {
  const [num, setNum] = useState(1234);
  const { togglePlayPause, play, ready, loading, playing } = useAudioPlayer({
    src: require("../../assets/sounds/click.mp3"),
    format: "mp3",
    autoplay: false,
  });

  useEffect(() => {
    firebase
      .database()
      .ref("count")
      .on("value", (snapshot) => {
        if (snapshot.val()) {
          setNum(snapshot.val());
        }
      });
  });

  const onClick = () => {
    if (ready) {
      play();
    }
    console.log("playing", playing);
    console.log("loading", loading);
    console.log("ready", ready);

    setNum(num + 1);
    firebase
      .database()
      .ref()
      .transaction((trans) => {
        if (trans) {
          if (!trans.count) {
            trans.count = 0;
          }
          trans.count++;
        }
        return trans;
      });
  };

  return (
    <div>
      <button className="btn-juicy" onClick={onClick}>
        VOTE
      </button>
      <FlipNumbers
        play
        color="#eceded"
        background="#6163ff"
        width={80}
        height={80}
        numberStyle={{ fontSize: "56px" }}
        numbers={`${num}`}
      />
    </div>
  );
};

export default BigButton;
