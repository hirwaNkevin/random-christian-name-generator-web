import { generateFullName } from './generate-fullname'
import './style.css'


let generatedFullName: string = '';
let namesHistory: string[] = [];
let historyCounter: number = 1; // Works like a pointer that points to what is up in the history array

function nextName(): void {
  if (historyCounter <= 1) {
    generatedFullName = generateFullName();
    namesHistory.push(generatedFullName);
    reBuild();
  } else {
    historyCounter--; // move the pointer one place to the right
    generatedFullName = namesHistory[namesHistory.length - historyCounter];
    reBuild();
  }
}

function previousName() {
  if (historyCounter <= namesHistory.length - 1) { // Don't allow the previous to add to history if you reach to begining of the array. 
    historyCounter++; // move the pointer one place to the left
    generatedFullName = namesHistory[namesHistory.length - historyCounter];
    console.log('history counter: ' + historyCounter);
    console.log(namesHistory);
    console.log(namesHistory[namesHistory.length - historyCounter]);
    console.log(generatedFullName);
    reBuild();
  } else {
    console.error("History bound exeeded!");
  }
}

function reBuild() { // function to enter the generated name into the DOM at #generated-name
  const generatedFullNameElement = document.querySelector('#generated-name');
  if (generatedFullName) {
    generatedFullNameElement!.innerHTML = `${generatedFullName}`;

  } else {
    console.error("Element with id 'generated-name' not found");
  }
}

function likeName(): void {

}

function bookmarkName(): void {

}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <main>
      <div class="container">
        <h1>Generate a random christian name</h1>
        <div id="wrapper">
          <button id="previous"><</button>
          <div id="slide">
            <div id="slide-item">
              <p id="generated-name"></p>
              <div id="actions">
                <button id="btn-like">
                  <img src="../assets/heart.svg"/>
                </button>
                <button id="btn-save">
                  <img src="../assets/bookmark.svg"/>
                </button>
              </div>
            </div>
          </div>
          <button id="next">></button>
        </div>
      </div>
    </main>
  </div>
`;
  nextName(); // generate name and add it to #generated-name when the page loads
  document.querySelector('#next')!.addEventListener('click', nextName);
  document.querySelector('#previous')!.addEventListener('click', previousName);
});



/* TODO: 
* add the like functionality 
* add the save functionality
* add the description / how to use of the app.
*/