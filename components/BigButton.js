import Image from 'next/image';
import accFrame from '../public/assets/acc-frame-big.webp';
import Play from '../public/assets/play.svg';

export default function BigButton({ text, width, height }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="relative flex justify-center text-center h-16.1  items-center cursor-pointer outline-none">
        <div className="z-10 absolute text-white uppercase flex align-middle justify-center items-center w-full font-montserrat font-bold">
          <div className='flex-1'>{text}</div>
          <div>
            <Play className="rotate-90 mr-5" />
          </div>
        </div>

        <Image
          layout="fill"
          objectFit="contain"
          src={accFrame}
          className=""
          alt="frame"
        />
      </div>
    </div>
  );
}
