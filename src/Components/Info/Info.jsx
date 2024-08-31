import charch from "../../assets/charch.webp";
import hall from "../../assets/hall.webp";
import "./Info.css";

export default function Info(params) {
  return (
    <>
      <div className="Info">
        <div className="InfoChild">
          <div className="FirstStop">
            <h2>Օրվա ծրագիր</h2>
            <span className="time">15:00</span>
            <p className="name">Սուրբ Խաչ եկեղեցի</p>
            <p className="location">Հասցե՝ ք. Երևան, Կոմիտասի 64</p>
            <img src={charch} alt="" className="locImg" />
            <button>Դիտել Քարտեզում</button>
          </div>
          <div className="SecondStop">
            <span className="time">17:30</span>
            <p className="name">«Villa Hills» հանդիսությունների սրահ</p>
            <p className="location">
              Հասցե՝ Կոտայքի մարզ, գ․ Պտղնի 1-ին թ․, 35
            </p>
            <img src={hall} alt="" className="locImg" />
            <button>Դիտել Քարտեզում</button>
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
