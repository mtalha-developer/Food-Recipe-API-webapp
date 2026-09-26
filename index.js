let food = document.querySelector(".foodmenu");

// buttons

let russain = document.querySelector("#russain");
let british = document.querySelector("#british");
let indian = document.querySelector("#indian");
let american = document.querySelector("#american");
let thai = document.querySelector("#thai");
let chiniese = document.querySelector("#chiniese");

// fetch data

const fetchdata = async (category) => {
  try {
    let api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );

    let data = await api.json();

    console.log(data);

    showData(data.meals);
  } catch (error) {
    console.log(error);
  }
};

// show data

const showData = (items) => {
  if (!items) {
    food.innerHTML = "<h2>No Recipe Found</h2>";
    return;
  }

  food.innerHTML = items
    .map((meal) => {
      return `

        <div class="card">

            <img src="${meal.strMealThumb}" 
            alt="${meal.strMeal}">

            <h3>${meal.strMeal}</h3>

        </div>

        `;
    })
    .join("");
};

// default

fetchdata("Chicken");

// buttons

russain.onclick = () => {
  fetchdata("Beef");
};

british.onclick = () => {
  fetchdata("Breakfast");
};

indian.onclick = () => {
  fetchdata("Chicken");
};

american.onclick = () => {
  fetchdata("Dessert");
};

thai.onclick = () => {
  fetchdata("Seafood");
};

chiniese.onclick = () => {
  fetchdata("Pasta");
};

// search

const search = () => {
  let input = document.querySelector("#search");
  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputval = input.value;
      console.log("input value", inputval);
      const api = await fetch(
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputval}`,
      );
      const data = await api.json();
      console.log(data);

      showData(data.meals);
    }
  });
};
search();