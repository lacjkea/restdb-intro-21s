const url = "https://kea21s-40a5.restdb.io/rest/superheroes?max=20";
const mediaurl = "https://kea21s-40a5.restdb.io/media/";

//560263607f98025500000000?s=t
//The API-key:
const options = {
  headers: {
    "x-apikey": "602b17975ad3610fb5bb609b",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //We have the data
    // console.log(data);
    handleData(data);
  })
  .catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleData(superheroes) {
  superheroes.forEach((hero) => {
    console.log(hero);
    // 1 make a template
    // 2. grab it
    const template = document.querySelector("template").content;
    // 3. clone it
    const clone = template.cloneNode(true);
    // 4. populate with data
    clone.querySelector("h2").textContent = hero.alias;

    const imgurl = mediaurl + hero.img[0];
    clone.querySelector("img:nth-child(3)").src = imgurl + "?s=t";
    clone.querySelector("img:nth-child(3)").alt = hero.alias;
    console.log(imgurl);

    clone.querySelector("h3").textContent = hero.mission;

    // 5 append it to the DOM
    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}
