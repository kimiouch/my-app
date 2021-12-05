export default function Searched() {
  return (
    <div class="Searched">
      <div class="container searched">
        <div class="row">
          <div class="col" id="em">
            <h3 class="column-1">
              <span id="city">please search first:]</span>

              <br />

              <em id="time"> .. : .. </em>

              <br />

              <span id="des"> ... </span>
            </h3>
          </div>

          <div class="col">
            <div class="temratures">
              <em>
                <span id="temp">...</span>
                <span id="celsius" >°C🌡</span>
                <br />
                Humidity: <span id="humid">...</span> %💧
                <br />
                Wind: <span id="wind">...</span> km/h🌬
                <br />
              </em>
            </div>
          </div>
          <div class="col">
            <img
              src="./icons/mainrainbow.png"
              width="120px"
              class="rainbow"
              id="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
