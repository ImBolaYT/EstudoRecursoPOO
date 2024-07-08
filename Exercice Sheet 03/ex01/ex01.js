console.log("---------------Ex a)---------------")
// a) Select all elements with id "p2" and print it to the console

const p2 = document.getElementById('p2');
console.log(p2);



console.log("---------------Ex b)---------------")
// b) Select all paragraphs and print them in the console

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);



console.log("---------------Ex c)---------------")
// c) Select all paragraphs and print their content

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}



console.log("---------------Ex d)---------------")
// d) Select all elements whose class attribute has the value "red"

const red = document.getElementsByClassName('red');
console.log(red);



console.log("---------------Ex e)---------------")
// e) Select and print a <p> element whose id is "p3"

const p3 = document.getElementById('p3');
console.log(p3);



console.log("---------------Ex f)---------------")
// f) Select and print all contents of <p> and <div> elements

const paragraphs2 = document.querySelectorAll('p') // const paragraphs = document.getElementsByTagName('p'); (Also Works)
const div = document.getElementsByTagName('div')
for (let i = 0; i < paragraphs2.length; i++) {
    console.log(paragraphs2[i].textContent);
}
for (let i = 0; i < div.length; i++) {
    console.log(div[i].textContent);
}



console.log("---------------Ex g)---------------")
// g) Select and print the text of <span> elements

const spanElements = document.getElementsByTagName("span");
for (let i = 0; i < spanElements.length; i++) {
    console.log(spanElements[i].textContent);
}



console.log("---------------Ex h)---------------")
// h) Select and print the text of the <span> elements inside the <div> elements

const divSpan = document.querySelector('div span')
console.log(divSpan.textContent);



console.log("---------------Ex h)---------------")
// i) Select and print text from <span> element outside <div> element

const spanOutsideDiv = document.querySelector("body > span");
console.log(spanOutsideDiv.textContent);