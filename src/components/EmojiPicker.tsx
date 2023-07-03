import { useState } from "react";

export function EmojiPicker(): JSX.Element {
  const [EmojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState<string>("");
  const [PrevEmojiFromCurrentRender, queueRerenderWithPrevNewEmoji] = useState<
    string[]
  >([]);

  const handleSki = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("⛷️");
  };
  const handleBeach = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("🏝️");
  };
  const handleFairy = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("🧚🏻‍♀️");
  };
  const handleTennis = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("🎾");
  };
  const handleStrawb = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("🍓");
  };
  const handleSparkle = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("✨");
  };
  const handleSass = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("💁‍♀️");
  };
  const handleHeartE = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("😍");
  };
  const handleUpsidedown = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("🙃");
  };
  const handleTongue = () => {
    queueRerenderWithPrevNewEmoji(
      [...PrevEmojiFromCurrentRender, EmojiFromCurrentRender].slice(-6)
    );
    queueRerenderWithNewEmoji("😝");
  };

  return (
    <>
      <h1>Emoji Picker ✌️</h1>
      <p>Current Emoji:{EmojiFromCurrentRender}</p>
      <ul>
        Previous Emojis:{" "}
        {PrevEmojiFromCurrentRender.slice(1).map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
      <button onClick={handleSki}>⛷️</button>
      <button onClick={handleBeach}>🏝️</button>
      <button onClick={handleFairy}>🧚🏻‍♀️</button>
      <button onClick={handleTennis}>🎾</button>
      <button onClick={handleStrawb}>🍓</button>
      <button onClick={handleSparkle}>✨</button>
      <button onClick={handleSass}>💁‍♀️</button>
      <button onClick={handleHeartE}>😍</button>
      <button onClick={handleUpsidedown}>🙃</button>
      <button onClick={handleTongue}>😝</button>
    </>
  );
}
