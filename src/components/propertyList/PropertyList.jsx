import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="/src/assets/images/BC1.jpg" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>400 cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/src/assets/images/BC2.jpg" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>250 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/src/assets/images/BC3.jpg" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>1700 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/src/assets/images/BC4.jpg" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>1200 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="/src/assets/images/BC5.webp" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>2000 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
