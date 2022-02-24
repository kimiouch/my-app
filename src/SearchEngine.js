import axios from "axios";

export default function SearchEngine() {
  return (
    <div class="searchengine">
      <form>
        <img src="./icons/global-warming.png" width="90px" class="search-img" />
        <input
          type="search"
          placeholder="search a city or country"
          class="type"
          value=""
        />
        <button class="search">🔍</button>

        <button class="current" id="current">
          current
        </button>
      </form>
    </div>
  );
}
