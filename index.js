// Change color
const setBg = (color) => {

    const body = document.querySelector("body");
    body.style.backgroundColor = color;

    const quote = document.getElementById("quote");
    quote.style.color=color;

    const quoteAuthor = document.getElementById("quote-author");
    quoteAuthor.style.color = color;
}

// Change text
const setText = (content, author) => {

    const quote = document.getElementById("quote");
    quote.innerText=content;
    const quoteAuthor = document.getElementById("quote-author");
    quoteAuthor.innerHTML = author;
}

// found button (Element) with id
const btn = document.getElementById("new-quote");

// Add event when clicking on button
btn.addEventListener('click', ()=>{
    setBg(`red`);
    setText(`Live is the rarest thing in the world. Most people exist, that is all`, `― Oscar Wilde`);
});