import React from "react";
import ReactDOM from "react-dom/client";

// // React Elements

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "React Essentials"
// );

// console.log(heading);

// // React Element basically creates an object --> Now when we render this element onto DOM it becomes an html element

// // React.createElement => ReactElement-JS Object => HTMLElement(render);

// // JSX - is not HTML in javascript(HTML like Syntax or XML)

// // const jsxHeading = <h1 id="heading">React Essentials using JSX</h1>

// // const jsxHeading = (<h1 className="head">
// //     React Essentials using JSX
// //     </h1>);

// const jsxHeading = <h1 className="head">React Essentials using JSX</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(jsxHeading);

// // JSX code is transpiled before it reaches the JS Engine
// // PARCEl is transpiling our code
// // parcel doesnt do on its own - it do with its own super powers comes in nodemodules while installing(with its cabinet ministers)
// // It gives the responsibility of transpilation to Babel(Its a normal js package)
// // parcel installs Babel along with it when we install parcel(u can find diff in nodemodules)

// // JSX =>Babel transpiles it to React.createElement =>
// // Babel is a javascript compiler and we also called it as transpiler
// // Babel is converting JSX code to React.createElement, React.createElement now understands your code
// // JS Engine understands only EcmaScript(ES6) language


// React functional component
const Title = () => (
    <h1 className="head">
        React Essentials JSX
    </h1>
);

const element = <span>React Element</span>

// React Element
const Title2 = (
  <h1 className="head">
        {element}
        React Essentials JSX
    </h1>
);

// React Component - 2 types
/**
 * 1.Class Based Component - OLD Way
 * 2.Functional Based Component - NEW Way
 */

// React Functional Component - Just a normal javascript function
// A function that returns a JSX Code is called a functional component
// A func that returns a react element

const HeadingComponent4 = () => {
    return <h1 className="heading">React Essentials Functional Component</h1>
};

const HeadingComponent2 = () => <h1 className="heading">React Essentials Functional Component</h1>;

const HeadingComponent3 = () => (
  <h1 className="heading">React Essentials Functional Component</h1>
);

// const data = api.getdata();
// Suppose even if api passes some malicious data into code JSX will escape it
// Assume {} -> this curly braces is sanitizing the data
// Any data wrapped in curly braces the jsx wont blindly run it, it will sanitize the data whatever is coming and then pass it
// It prevents cross-site-scripting for you -> this is how powerful jsx is


const HeadingComponent = () => (
  <div className="container">
    <Title />
    {Title2}
    {data}
    {Title()} 
    <h1 className="heading">React Essentials Functional Component</h1>
  </div>
);

// At the End of the day Title is also normal js function along with functional component
// so we can call normal function in curly braces {Title()}
// Note: {} Any piece of js code can be written in curly braces
/**
 * The below 3 things are same things
 * 1.<Title />
 * 2.<Title></Title>
 * {Title()}
 */



const root = ReactDOM.createRoot(document.getElementById("root"));


// rendering of React Elements
// root.render(heading);
// root.render(jsxHeading);

// rendering of Functional Component or Any component
root.render(<HeadingComponent />);

// React is readable because we are writting code in JSX
// JSX makes React faster