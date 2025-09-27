

const url = "http://127.0.0.1:8000/";
try {
    const response =  fetch(url);
    

    const result =  response.json();
    console.log(result);
} catch (error) {
    console.error(error.message);
}

var mainInput = document.getElementById("mainInput");
mainInput.textContent = "Hello world!";