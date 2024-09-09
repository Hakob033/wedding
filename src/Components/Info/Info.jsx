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
            <span className="time2">15:00</span>
            <p className="name">
              Սուրբ Հովհաննես <br /> եկեղեցի
            </p>
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
            <span className="time2">17:30</span>
            <p className="name">
              «Vahagn Hall» <br /> հանդիսությունների <br /> սրահ
            </p>
            <p className="location">Հասցե՝ Այգավան, Թումանյան 29 </p>
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
