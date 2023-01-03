const test = () => {
  document.getElementById("test").addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
  })
}

test();