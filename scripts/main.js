const url = "http://127.0.0.1:8000/";

async function getApiResult() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.data);
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

var apiResult = getApiResult();

var mainInput = document.getElementById("mainInput");
mainInput.textContent = "Hello world!";