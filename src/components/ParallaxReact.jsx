import { Parallax } from 'react-parallax';

export default function ParallaxReact() {
  return (
    <>
      <Parallax
        bgImage="https://source.unsplash.com/1600x900/?mountains"
        strength={400}
      >
        <div style={{ height: 500 }} className="flex justify-center items-center">
          <h1 className="text-black text-5xl font-bold">React Parallax</h1>
        </div>
      </Parallax>

      <div className="bg-base-200 p-20 text-center text-xl">
        Scroll down to continue
      </div>

      <Parallax
        bgImage="https://source.unsplash.com/1600x900/?sky"
        strength={300}
      >
        <div style={{ height: 500 }} className="flex justify-center items-center">
          <h1 className="text-black text-5xl font-bold">Another Section</h1>
        </div>
      </Parallax>
    </>
  );
}
