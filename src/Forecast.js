export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="frame">
        <div className="container" id="forecast">
          <div className="row">
            <div className="col ">
              <div className="forecast-date"> </div>
              <img
                src="./icons/forecast/forecast1.png"
                alt=""
                className="forecast-icon"
              />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> </span>
                <span className="forecast-temp-min"> </span>
              </div>
            </div>

            <div className="col">
              <div className="forecast-date"> </div>
              <img src="./icons/forecast/forecast2.png" className="forecast-icon" />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> </span>
                <span className="forecast-temp-min"> </span>
              </div>
            </div>

            <div className="col">
              <div className="forecast-date"> </div>
              <img src="./icons/forecast/forecast3.png" className="forecast-icon" />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> </span>
                <span className="forecast-temp-min"> </span>
              </div>
            </div>

            <div className="col">
              <div className="forecast-date"> </div>
              <img src="./icons/forecast/forecast4.png" className="forecast-icon" />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> </span>
                <span className="forecast-temp-min"> </span>
              </div>
            </div>

            <div className="col">
              <div className="forecast-date"> </div>
              <img src="./icons/forecast/forecast5.png" className="forecast-icon" />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> </span>
                <span className="forecast-temp-min"> </span>
              </div>
            </div>

            <div className="col">
              <div className="forecast-date"> </div>
              <img src="./icons/forecast/forecast6.png" className="forecast-icon" />

              <div className="forecast-temp">
                <span className="forecast-temp-max"> </span>
                <span className="forecast-temp-min"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
