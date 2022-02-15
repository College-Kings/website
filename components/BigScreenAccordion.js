import { useState } from 'react';
import BigButton from './BigButton';

export default function BigScreenAccordion({
  content,
  buttonText,
  width,
  height,
  textHeight,
}) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="flex m:w-182.5 2xl:w-215.75 5xl:w-325 flex-col justify-start align-middle items-start outline-none cursor-pointer">
      <div onClick={toggle} className="w-full h-full mb-2">
        <BigButton width={width} height={height} text={buttonText} />
      </div>

      <div
        style={{
          display: isShowing ? 'block' : 'none',
          textAlign: 'left',
          color: '#FC56FF',
          width: '800px',
          height: 'auto',
          paddingRight: '5%',
          paddingLeft: '2%',
          paddingBottom: '5%',
        }}
      >
        {content}
      </div>
    </div>
  );
}
