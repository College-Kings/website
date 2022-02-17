import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import nora from '../public/assets/Nora_acc.png';
import chloe from '../public/assets/Chloe_acc.webp';
import lauren from '../public/assets/Lauren_acc.png';
import aubrey from '../public/assets/Aubrey_acc.webp';
import penelope from '../public/assets/Penelope_acc.png';
import riley from '../public/assets/Riley_acc.png';
import lindsey from '../public/assets/Lindsey_acc.png';
import chloeSmall from '../public/assets/Chloe_website_small.png';
import laurenSmall from '../public/assets/Lauren_website_small.png';
import noraSmall from '../public/assets/Nora_website_small.png';
import rileySmall from '../public/assets/Riley_website_small.png';
import aubreySmall from '../public/assets/Aubrey_website_small.png';
import lindseySmall from '../public/assets/Lindsey_small.png';
import penelopeSmall from '../public/assets/Penelope_website_small.png';
const AccordionButton = dynamic(() => import('./AccordionButton'));
// import AccordionButton from './AccordionButton';
import { AccMemoized } from './AccordionItemBig';

const VerticalAccordion = () => {
  const [activeGirlIndexNames, setActiveGirlIndexNames] = useState(0);
  const [activeGirl, setActiveGirl] = useState(0);

  const [activeNames, setActiveNames] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [effectImg, setEffectImg] = useState(false);

  const names = [
    {
      name: 'Nora',
      text: 'Nora wants to travel the world and experience new things, but currently she’s stuck with her boyfriend, who leads the Wolves fraternity.',
      img: nora,
      id: 0,
      small: noraSmall,
      title: 'The Dreamer',
    },
    {
      name: 'Chloe',
      text: 'The most popular girl in San Vallejo is always up for some fun. Leading the biggest sorority with a great passion, she is the number one. ',
      img: chloe,
      id: 1,
      small: chloeSmall,
      title: "The 'It Girl",
    },
    {
      name: 'Lauren',
      text: 'She’s the most vanilla girl you’ll find and will always love you for who you are. Just don’t try to betray her, as you will definitely regret it. ',
      img: lauren,
      id: 2,
      small: laurenSmall,
      title: 'The Innocent',
    },
    {
      name: 'Aubrey',
      text: 'She is the most open girl in San Vallejo, making always sure everyone has fun. Living in the moment, Aubrey is the first to undress you and tie you up.',
      img: aubrey,
      id: 3,
      small: aubreySmall,
      title: ' The Open',
    },
    {
      name: 'Penelope',
      text: 'She has very little friends, but cares even more for them. Even though Penelope is a little introverted and cautious, she is always four steps ahead of everyone else. ',
      img: penelope,
      id: 4,
      small: penelopeSmall,
      title: 'The Lone Wolf ',
    },
    {
      name: 'Riley',
      text: 'Bored in your dorm? Don’t worry. Riley is here to explore the world with you. If you ever feel down, she is the one to cheer you up. ',
      img: riley,
      id: 5,
      small: rileySmall,
      title: 'The Passionate',
    },
    {
      name: 'Lindsey',
      text: 'Friends with the hottest girls in college, Lindsey is a nice girl with a naughty side. You need to treat her right if you want to be her College King.',
      img: lindsey,
      id: 6,
      small: lindseySmall,
      title: 'The Popular',
    },
  ];

  useEffect(() => {
    const firstNamesSlice = names.slice(
      activeGirlIndexNames,
      activeGirlIndexNames + 3
    );
    setActiveNames(firstNamesSlice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (index) => {
    if (index === names.length - 2) {
      const resetNames = names.slice(0, 3);
      setActiveNames(resetNames);
      setActiveId(0);
      setActiveGirlIndexNames(0);
      return;
    }
    const newNames = names.slice(activeGirlIndexNames + 1, index + 3);

    setActiveId(newNames[0].id);
    setActiveNames(newNames);
    setActiveGirlIndexNames((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="h-full flex align-top items-center w-full 5xl:h-154.25 5xl:mr-5 z-10">
      <div
        className={`${
          effectImg && 'm:animate-fadeIn'
        }   m:relative m:-top-8 lg:-top-32 xl-top-32 2xl:-top-44 5xl:-top-40 w-full h-full z-0`}
        onAnimationEnd={() => setEffectImg(false)}
      >
        <div className="z-0">
          <Image src={names[activeId].img} className="z-0" alt="active" />
        </div>
      </div>
      <div>
        <div className="hidden m:flex  flex-col">
          <h2 className="uppercase text-orange-main text-steam pb-2 font-bebas ">
            meet the girls
          </h2>
          <div className="w-67.25 ">
            <span className="text-white font-montserrat m:text-base">
              College Kings has a lot of gorgeous romancable characters. Here
              are some of our favorites.
            </span>
          </div>
        </div>
        <div className="flex mr-2 xl:mr-10">
          {activeNames &&
            activeNames.map((girl, index) => (
              <AccMemoized
                key={index}
                index={index}
                name={girl.name}
                title={girl.title}
                text={girl.text}
                activeGirlIndexNames={activeGirlIndexNames}
                setActiveGirl={setActiveGirl}
                activeGirl={activeGirl}
                setActiveId={setActiveId}
                imageId={girl.id}
                setEffectImg={setEffectImg}
                small={girl.small}
              />
            ))}
          <AccordionButton
            handleChange={handleChange}
            activeGirlIndexNames={activeGirlIndexNames}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalAccordion;
