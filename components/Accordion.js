import { useState } from 'react';
import Button from './Button';

export default function Accordion({
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
    <div
      onClick={toggle}
      className="flex flex-col justify-center align-middle items-center"
    >
      <div className="flex items-center mb-5">
        <Button width={width} height={height} text={buttonText} />
      </div>

      <div
        style={{
          display: isShowing ? 'block' : 'none',
          height: `${textHeight}`,
          color: '#FC56FF',
          width: `${width}`,
          height: 'auto',
          paddingLeft: '20%',
          paddingRight: '20%',
          paddingBottom: '5%',
        }}
      >
        {content}
      </div>
    </div>
  );
}
