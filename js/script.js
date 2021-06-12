/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `Sometimes life hits you in the head with a brick. Don't lose faith`,
    source: `Steve Jobs`,
    citation: `Standford University Commencement Speech`,
    year: 2005
  },
  {
    quote:`The very word "secrecy" is repugnant in a free and open society; and we are as a people inherently and historically opposed to secret societies, to secret oaths and to secret proceedings`,
    source: `John F.Kennedy`,
    citation: `Address Before The American Newspaper Publishers Association`,
    year: 1961,
    tags: `Politics`
  },
  {
    quote: `The chains of habit are too light to be felt until they are too heavy to be broken`,
    source: `Warren Buffet`,
    citation: `YouTube: Warren Buffett: This Is The Difference Between Those Who Achieve Their Dreams And Those Who Don't`,
    year: 2007
  },
  {
    quote: `I’d rather play video games, write software, and read books than try and get an A if there’s no point in getting an A`,
    source: `Elon Musk`,
    citation: `Elon Musk: How the Billionaire CEO of Spacex and Tesla is Shaping our Future is an important`,
    year: 2015
  },
  {
    quote: `But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will tun wild and cause you grief`,
    source: `Robert Greene`,
    citation: `The 48 Laws of Power`,
    year: 1998
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  // Obtained code from https://css-tricks.com/snippets/javascript/random-hex-color/
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let html = `<p class="quote"> ${randomQuote.quote} </p>`;
  html += `<p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }
  if (randomQuote.tags) {
    html += `<span class="tags"> ${randomQuote.tags} </span>`;
  }
  html += `</p>`;
  // Obtained code from https://css-tricks.com/snippets/javascript/random-hex-color/
  document.body.style.backgroundColor = "#" + randomColor;
  document.getElementById('quote-box').innerHTML = html;           
}


/***
 * Page automatically updates at regular intervals
***/
setInterval(printQuote, 4000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
