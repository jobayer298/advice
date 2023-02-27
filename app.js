const adviceContainer = document.getElementById("advice-container");

const loadAdvice = () =>{
    const URL = `https://api.adviceslip.com/advice`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayAdvice(data.slip));
}

const newLoadAdvice = (id) =>{
    const URL = `https://api.adviceslip.com/advice/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => displayAdvice(data.slip));
}

const searchAdvice = () => {
  const searchText = document.getElementById("search-text").value;
  newLoadAdvice(searchText);
};


const displayAdvice = (advice) =>{
    console.log(advice);
    adviceContainer.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-2xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Advice ID: ${advice.id}</h2>
                <p>${advice.advice}</p>
                <div class="card-actions">
                    <button onclick="newQuotes()"  class="btn btn-primary">New Advice</button>
                </div>
            </div>
        </div>
    `;
}



// window.onload =() =>{
//     loadAdvice()
// }


const newQuotes = () =>{
    location.reload()
}


loadAdvice()