import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="/src/assets/images/pokhara.jpg" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Pokhara</h1>
          <h2>NayaGaun Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="/src/assets/images/kathmandu.jpg" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Kathmandu</h1>
          <h2>Sundhara Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="/src/assets/images/bangkok.jpg" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Bangkok</h1>
          <h2>BK properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
