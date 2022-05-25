// Will generate the number of accordions set in "numAccordionItemsToGenerate" 
// Accordions are part of Bootstrap 5
// I ran it as a Snippet in Chrome dev tools and copied the output from console

function generateAccordionItem(index) {
  return `
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        Button ${index}
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionTemplate">
      <div class="accordion-body">
        Body ${index}
      </div>
    </div>
  </div>
`;
}

const numAccordionItemsToGenerate = 10;
const containerBeginning = `<div class="accordion" id="accordionTemplate">`;
const containerEnding = `</div>`;

let fullHtml = '';
fullHtml = fullHtml.concat(containerBeginning);

for (let index = 1; index < numAccordionItemsToGenerate + 1; index++) { 
  fullHtml = fullHtml.concat(generateAccordionItem(index));
}

fullHtml = fullHtml.concat(containerEnding);

console.log(fullHtml);

