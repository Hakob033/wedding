import "./Header.css";
import BackImg from "../../assets/mainImg.jpg";
import Flover from "../../assets/flover.svg";

export default function Header(params) {
  return (
    <>
      <div className="header">
        <img className="back" src={BackImg} alt="" />
        <div className="headerDiv">
          <h1>
            ՆԱՐԵԿ <br /> ԵՎ <br /> ՍՈՒՍԻ
          </h1>
          <p>
            Սիրով հրավիրում ենք Ձեզ մեր կյանքի ամենակարևոր տոնակատարությանը՝ մեր
            հարսանիքին
          </p>
          <img className="flover" src={Flover} alt="" />
          <span>29.09.2024</span>
        </div>
      </div>
    </>
  );
}
