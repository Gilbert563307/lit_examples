console.log('Home Page loaded');
import '../components/hello-world.js';
import '../components/hello-attribute.js';
import "../components/point-of-interest.js"
import "../components/hello-shadowdom.js";

console.log(document.querySelector('hello-shadowdom'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('hello-shadowdom').shadowRoot.querySelector('h1'));
