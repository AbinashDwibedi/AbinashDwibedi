async function getQuote() {
    let rawData = await fetch("https://api.quotable.io/random?tags=technology");
    let data = await rawData.json();
    return data.content;
}

// Since getQuote() returns a promise, you need to use .then() or await to get the result.
getQuote().then(quote => {
    document.querySelector(".quote").append(`\"${quote}\"`)
});
getQuote().catch(error => {
    console.log(error);
})
