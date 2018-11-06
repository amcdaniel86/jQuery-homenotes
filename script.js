$(document).ready(function() {

// examples to initialize jQuery in javascript files

// function executeWhenLoaded () {
//   alert("DOM is loaded");
// };

// $(document).ready(executeWhenLoaded);
// -----------------------------

// $(document).ready(function() {
//   alert("DOM is loaded");
// }); ---------- with anonymous function makes it shorter

// $(function() {
//   alert("DOM is loaded");
// });
// ---------- commonly used, so jQuery allows this shorthand.

// $( window ).on( "load", function() {
//   alert("DOM & Images are Loaded");
// })
// code runs once entire page including images are loaded, not only the DOM.

// EXAMPLE BELOW


//   $("a").click(function(event) {
//     alert( "Hi jQuery! what's up" );
//  

// // Basic DOM Element Selectors - easiest way to select elements from the DOM
// $("*") - selects all elements
// example - $("*")

// $("element") - selects all elements with given tag name
// example - $("p")

// $(".class-name"); - selects all elements with given class name;
// example - $(".main")

// $("#id"); - selects a single element with given id attribute
// example - $("#main-section")

// // Hierarchy CSS Selectors - methods borrowed from CSS
// Child - $("parent > child")
// example - $("body > p")

// Descendant - $("ancestor descendant")
// example - $(".main-nav .nav-links")

// Next Adjacent - $("prev + next")
// example  - $("form + label")

// Next siblings - $("prev ~ siblings")
// example - $(".first-list ~ item")

// // Filters - keep in mind, they return an array.
// First selector - $("body p:first") first matched element

// Last selector - $("nav ul li:last") last matched element

// Even selector - $("#main-menu li:even") even elements; zero index

// Not selector - $("p:not(.ironhack)") all elements that don't match given selector.

// Contains - $(":contains('iornhack')"); all elements that contain specific text.

// empty - $(".selector:empty") all elements that have no children.

// parent - $(".selector:parent") all elements that have at least one child node.

// Has - $("*:has(p)"); elements that contain at least one element that matches selector.

// // Attribute Selectors - return an array.

// has $("[attribute]") $("a[href]");
// contains $("[attribute*='value']") $("a[href~='ironhack']")
// contains word $("[attribute~='value']")
// not equal $("[attribute!='value']")
// starts with $("[attribute^='value']")

// // Child selectors
// first child $(".selector:first-child") $("#menu:first-child")
// last child $(".selector:last-child") $("#menu:last-child");
// nth child $(":nth-child(index/even/odd/equation)")
// $("#list:nth-child(odd)")

// // Form selectors
// button $(":button") example $("form *:input");
// too many to list. check week 2 - DOM selectors ironhack module for entire list.

// // CSS Attribute Selectors - to manipulate DOM elements by adding, changing CSS properties
// // parameters between the brackets are optional, meaning, the function can receive 0 or said parameter.

// Value - $(".selector").val([value]) gets current value of first matched element or sets value of all matched eles.

// Attribute - $(".selector").attr(attributeName[, value]) get attribute value for first matched element, or sets one/more attributes for every matched element.

// Remove Attribute - $(".selector").removeAttr(attributeName) remove attribute from each element in the set of matched elements.

// Property - $(".selector").prop(propertyName[, value]) get property value for first matched element or sets one/more properties for every matched element.

// Remove property - $(".selector").removeProp(propertyName)
// removes property for a set of matched elements.

// //Definitions
// Property: representation of attribute in the DOM
// // better one to work with ^^^^
// Attribute: represents the same value that is in the HTML

// attr() gives value of element as defined in the HTML, better to use prop(), because it modifies the element's current state, and not the HTML state.


// EXAMPLE 2
// console.log($("#test").attr("value"));
// console.log($("#test").prop("value"));

// $("input .test").val();

// CSS Selectors to change styles

// CSS style apply - $(".selector").css(propertyName[, value])
// add class to element - $(".selector").addClass(className)
// remove class from element - $(".selector").removeClass([className])

// check if has class - $(".selector").hasClass(className)
// returns true if any matched element has assigned indicated class.

// Toggle classes - $(".selector").toggleClass(className)
// add/remove class/es to all matched elements.

// //syntax changes from CSS to jQuery
// to match class elements, dot-notation must be present for jQuery to identify the correct class.

// When calling class methods however, dot notation isn't necessary.
// example - $("p").removeClass("clicked moved") - shows 2 separate classes separated by a space. no dots necessary to identify them.
// name of the class is sufficient, dot is not.

// Toggle Class examples
// $("#btn-send").toggleClass("disabled")
// // button id="btn-send" class=""

// $("#btn-send").toggleClass("disabled")
// button id="btn-send" class="disabled"
// Toggle works like below 

// The .toggleClass() method is used often to show/hide elements in our layout. Toggle helps us to avoid the use of this:
// <<<<<<<<<<
// EXAMPLE 3 
// if ($(".element").hasClas("visible")) {
//   $(".element").removeClass("visible");
// } else {
//   $(".element").addClass("visible");
// } >>>>>>>>>>>>
// because it’s the equivalent of this:

// $(".element").toggleClass("visible");

// if ($(".parent").hasClass("disabled")) {
//   $(".parent .element").addClass("white-color");
// }

// $("*").removeClass();
// Practice
// Add the “selected” class to the first element of the menú
$("#menu li:first").addClass("selected");


// Add the “middle” class to the middle articles in the <section> tags
$(".container > article:nth-child(2)").addClass("middle");

// Add the “highlighted” class to the .list-item even elements
$(".list-item:nth-child(even)").addClass("highlighted");

// Add a “1px solid #eee” border to the last .list-item element
$(".list-item:last-child").css({ "border": "8px solid #eee" });

//In the form, change the border color of the focused input
$("#form-container:input").
}); come back to this

});
