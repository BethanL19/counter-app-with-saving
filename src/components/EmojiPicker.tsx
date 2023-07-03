import { useState } from "react";

export function EmojiPicker(): JSX.Element {
  const [EmojiFromCurrentRender, queueRerenderWithNewEmoji] =
    useState<string>();
  const [PrevEmojiFromCurrentRender, queueRerenderWithPrevNewEmoji] =
    useState<string>();

  const handleSki = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("⛷️");
  };
  const handleBeach = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("🏝️");
  };
  const handleFairy = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("🧚🏻‍♀️");
  };
  const handleTennis = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("🎾");
  };
  const handleStrawb = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("🍓");
  };
  const handleSparkle = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("✨");
  };
  const handleSass = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("💁‍♀️");
  };
  const handleHeartE = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("😍");
  };
  const handleUpsidedown = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("🙃");
  };
  const handleTongue = () => {
    queueRerenderWithPrevNewEmoji(EmojiFromCurrentRender);
    queueRerenderWithNewEmoji("😝");
  };

  return (
    <>
      <h1>Emoji Picker ✌️</h1>
      <p>
        Previous Emoji: {PrevEmojiFromCurrentRender} Current Emoji:{" "}
        {EmojiFromCurrentRender}
      </p>
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
