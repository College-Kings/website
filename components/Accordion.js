import { useState } from 'react';
import Button from './Button';

const acc = [
  {
    buttonText: 'Who makes College Kings?',
    width: 329.86,
    height: 66,
    textHeight: 133,
    content:
      'College Kings started out being made by me! (Undergrad Steve), but now I have a team of people that help me out with things like rendering, transcription, writing and coding to create the best product possible for you guys.',
    show: false,
  },
  {
    buttonText: 'WHEN IS THE GAME COMING OUT?',
    width: 329.86,
    height: 66,
    textHeight: 133,
    content:
      'There is no set release date for a full v1.0 but I try and release updates as much as I have time to.',
    show: false,
  },
  {
    buttonText: 'What do you do with the Patreon money?',
    width: 329.86,
    height: 66,
    textHeight: 133,
    content:
      'All Patreon money is used to develop the game further, you can find a more specific breakdown on the Patreon Goals section.',
    show: false,
  },
  {
    buttonText: 'why should i donate on patreon',
    width: 329.86,
    height: 66,
    textHeight: 133,
    content:
      'Patreon is the games only source of income, so if you would like to see the game developed further and faster please consider donating. As a show of appreciation, Patrons get many benefits which you can find on the Patreon page.',
    show: false,
  },
];

export default function Accordion() {
  const [data, setData] = useState(acc);

  const toggle = (index) => {
    const copy = [...data];
    copy[index].show = !copy[index].show;
    setData(copy);
  };

  return (
    <div className="bg-black-secondary -mt-23.75 m:hidden ">
      {data &&
        data.map((el, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="relative flex flex-col justify-center align-middle items-center"
          >
            <div className="flex items-center mb-5">
              <Button
                width={el.width}
                height={el.height}
                text={el.buttonText}
              />
            </div>

            <div
              style={{
                display: el.show ? 'block' : 'none',
                height: `${el.textHeight}`,
                color: '#FC56FF',
                width: `${el.width}`,
                height: 'auto',
                paddingLeft: '20%',
                paddingRight: '20%',
                paddingBottom: '5%',
              }}
            >
              {el.content}
            </div>
          </div>
        ))}
    </div>
  );
}
