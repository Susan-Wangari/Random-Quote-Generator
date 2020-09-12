// quotes to be displayed when a user clicks on the button
let quotes = [
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "That which does not kill us makes us stronger. - Friedrich Nietzsche",
    "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind. - Bernard M. Baruch",
    "We must not allow other people's limited perceptions to define us. - Virginia Satir",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "This above all: to thine own self be true. - William Shakespeare",
    "If you cannot do great things, do small things in a great way. - Napoleon Hill",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Wise men speak because they have something to say; fools because they have to say something. - Plato",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference. - Robert Frost",
    "Do not let what you cannot do interfere with what you can do. - John Wooden",
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect. - Mark Twain",
    "I haven't failed. I've just found 10,000 ways that won't work. - Thomas Edison"
];

// function newQuote() {
//     let randomNumber = Math.floor(Math.random() * (quotes.length));
//     document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
// }

// function to display quote on button click
const newQuote = () => {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
};