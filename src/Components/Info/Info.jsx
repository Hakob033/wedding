import charch from "../../assets/charch.jpg";
import hall from "../../assets/hall.jpg";
import "./Info.css";

export default function Info(params) {
  return (
    <>
      <div className="Info">
        <div className="InfoChild">
          <div className="FirstStop">
            <h2>Օրվա ծրագիր</h2>
            <span className="time">15:00</span>
            <p className="name">Սուրբ Հովհաննես եկեղեցի</p>
            <p className="location">Հասցե՝ Արտաշատ, Երևանյան 2</p>
            <img src={charch} alt="" className="locImg" />
            <a
              href="https://maps.app.goo.gl/6h8VxwFQeeE3jSp8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Դիտել Քարտեզում</button>
            </a>
          </div>
          <div className="SecondStop">
            <span className="time">17:30</span>
            <p className="name">«Villa Hills» հանդիսությունների սրահ</p>
            <p className="location">
              Հասցե՝ Կոտայքի մարզ, գ․ Պտղնի 1-ին թ․, 35
            </p>
            <img src={hall} alt="" className="locImg" />
            <a
              href="https://maps.app.goo.gl/mFbg6odZ43BmnLuJ8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Դիտել Քարտեզում</button>
            </a>
          </div>
          <div className="End">
            <p>23:30</p>
            <span>Ավարտ</span>
          </div>
        </div>
      </div>
    </>
  );
}
