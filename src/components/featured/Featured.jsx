import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/hotels/countByCity?cities=Pokhara,Kathmandu,Bangkok"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src="/src/assets/images/pokhara.jpg" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Pokhara</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="/src/assets/images/kathmandu.jpg"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kathmandu</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="/src/assets/images/bangkok.jpg" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Bangkok</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
