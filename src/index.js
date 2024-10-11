const init = () => {
  const inputForm = document.querySelector("form");
  console.log(inputForm)
  //Add ivent listener to input
  inputForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const input = document.querySelector("input#searchByID")
    console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((r)=>r.json())
    .then((data)=> {
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")
        title.innerHTML = data.title;
        summary.innerHTML = data.summary;
        console.log(data.title);
        console.log(data.summary);
    })
  })
}

document.addEventListener('DOMContentLoaded', init);