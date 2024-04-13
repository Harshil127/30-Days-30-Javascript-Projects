const accessKey =  "C5yuLOjTogXdMY_LZqJkxaWTV0aRBojlRcv4OwFlR8A";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
     keyword = searchBox.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

     const response = await fetch(url);
     const data = await response.json();

     const result = data.results;

     if (page === 1) {
          searchResult.innerHTML = "";
     } 

     result.map((result) =>{
          const image = document.createElement("img");
          image.src = result.urls.small;
          const imageLink = document.createElement("a");
          imageLink.href = result.links.html;
          imageLink.target = "_blank";

          imageLink.appendChild(image);
          searchResult.appendChild(imageLink);
     })
     showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e)=>{
     e.preventDefault();
     page = 1;
     searchImages();
})

showMoreBtn.addEventListener("click", () =>{
     page++;
     searchImages();
})




// Access key =  C5yuLOjTogXdMY_LZqJkxaWTV0aRBojlRcv4OwFlR8A;
// Secret key = 53is6lMg3Qn5bcAZizVnl7q-6APOPvp6DHZftC9skq4