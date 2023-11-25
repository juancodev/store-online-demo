import notFoundImage from "@/assets/error404/error404-notfound.jpg";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <>
      <div className="divImage">
        <img className="notFoundImage" src={notFoundImage} alt="Not Found" />
      </div>
      <div>
        <button>Go to back!</button>
      </div>
    </>
  );
};

export { NotFound };
