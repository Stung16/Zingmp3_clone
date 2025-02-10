import "./playmucis.css";

const PlayMusic = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loading-wave">
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div>
    </div>
  );
};

export default PlayMusic;
