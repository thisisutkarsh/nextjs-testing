'use client';
import '../../assets/styles/loader.css';
export default function Loader() {
  return (
    <>
      <div className="scene bg-white">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-faces">
              <div className="cube-face shadow" />
              <div className="cube-face bottom" />
              <div className="cube-face top" />
              <div className="cube-face left" />
              <div className="cube-face right" />
              <div className="cube-face back" />
              <div className="cube-face front" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
