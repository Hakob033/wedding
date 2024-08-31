import Img1 from "../../assets/img1.jpeg";
import Img2 from "../../assets/img2.jpeg";
import "./Main.css";

export default function Main(params) {
  return (
    <>
      <div className="Main">
        <div className="MainChild">
          <img src={Img1} alt="" className="first" />
          <img src={Img2} alt="" className="second" />
        </div>
      </div>
    </>
  );
}
