const http = XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/posts";

http.open("GET", url);
http.send();


http.onreadystatechange =  (error) => {
    console.log(http.responseText);
}