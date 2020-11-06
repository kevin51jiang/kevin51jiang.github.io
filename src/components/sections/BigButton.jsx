import React, { createRef, useEffect, useRef, useState } from "react";
import firebase from "firebase";
import FlipNumbers from "react-flip-numbers";
import { firebaseConfig } from "../../utils/config";
import { useAudioPlayer } from "react-use-audio-player";
import { Howl } from "howler";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const availSounds = {
  click: {
    src: require("../../assets/sounds/click.mp3"),
  },
  get100: {
    src: require("../../assets/sounds/get-100.mp3"),
  },
  get500: {
    src: require("../../assets/sounds/get-500.mp3"),
  },
  get1000: {
    src: require("../../assets/sounds/get-1000.mp3"),
  },
};

const BigButton = (props) => {
  const [num, setNum] = useState(1234);
  const { play, ready } = useAudioPlayer({
    src: require("../../assets/sounds/click.mp3"),
    format: "mp3",
    autoplay: false,
  });
  const soundRef = useRef();

  useEffect(() => {
    soundRef.current = [];

    Object.keys(availSounds).forEach((sound) => {
      soundRef.current.push(
        new Howl({ ...availSounds[sound], format: "mp3", autoplay: false })
      );
    });
  }, []);

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

  // plays a bunch of sounds depending on number
  useEffect(() => {
    if (soundRef?.current) {
      if (num % 500 === 0) {
        soundRef.current[3].play();
      } else if (num % 100 === 0) {
        soundRef.current[2].play();
      } else if (num % 50 === 0) {
        soundRef.current[1].play();
      }
    }
  }, [num]);

  const onClick = () => {
    if (ready) {
      play();
    }

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
