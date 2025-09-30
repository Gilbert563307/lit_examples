
const elements = document.querySelectorAll("dynamic-content");
const lastElement = elements[elements.length -1];

lastElement.setAttribute("title", "i am changing you")
lastElement.setAttribute("content", "i have changed the content")
console.log(lastElement);

