import React from 'react';
import dynamic from 'next/dynamic';
//assets
const DiscordSVG = dynamic(() => import('../public/assets/discordSVG.svg'));


// const data = [
//   {
//     icon: <DiscordSVG />,
//     btnText: 'JOIN COLLEGE KINGS DISCORD',
//     title: 'LIVE BUG CHAT SUPPORT',
//     text: 'If you encountered a bug or have problems running the game, please join our Discord server and connect with our support team on the #bugs-help channel.',
//   },
// ];

const SupportOptions = () => {
  return (
    <div>
      svg
      <h2>title</h2>
      <p>paragraph</p>
      <button>Batenga</button>
    </div>
  );
};

export default SupportOptions;
