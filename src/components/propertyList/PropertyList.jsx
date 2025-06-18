import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "/src/assets/images/BC1.jpg",
    "/src/assets/images/BC2.jpg",
    "/src/assets/images/BC3.jpg",
    "/src/assets/images/BC4.jpg",
    "/src/assets/images/BC5.webp",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
