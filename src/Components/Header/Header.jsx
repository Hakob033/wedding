import "./Header.css";
import BackImg from "../../assets/mainImg.jpg";
export default function Header(params) {
  return (
    <>
      <div className="header">
        <img src={BackImg} alt="" />
        <div className="headerDiv">
          <h1>ՆԱՐԵԿ ԵՎ ՍՈՒՍԻԿ</h1>
          <p>
            Սիրով հրավիրում ենք Ձեզ մեր կյանքի ամենակարևոր տոնակատարությանը՝ մեր
            հարսանիքին
          </p>
          <span>27.10.2024</span>
        </div>
      </div>
    </>
  );
}
