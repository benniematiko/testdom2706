function changeTitle(){
    const title = document.getElementById("title")
    title.textContent = "Heading changed"
    title.style.color = "red"
}




  function getSelected() {
    const radios = document.getElementsByName("color");
    radios.forEach(radio => {
      if (radio.checked) alert("Selected: " + radio.value);
    });
  }
