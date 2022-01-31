import './Filter.css';

function Filter() {
  return(
    <div class="filter-selector">
      <label for="years">Filter by year</label>
      <select name="years" id="year-select">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default Filter;