import React from "react";
import ReactDOM from "react-dom/client";

// React Element - these are object - when render it becomes html element 

const heading = React.createElement
("h1",
 {}, 
 "Namaste React"
 );
 

 // JSX - it is a syntax which is easier to create ReactElement - not a part of React - merge js and html - it is a html-like or xml-like syntax
// it is transpiled (by Parcel and it dependecy Babel) before it reaches to JS engine

const jsxHeading = (
   <h1 id="heading" className="heading">
      Namaste React using JSX
    </h1>
    );

// React Components: 
  // Class based components: old way of writing code
  
  // Functional components: New way - function that returns a JSX code - always starts with caps
const Title = () => (
     <h1 className="heading">Namaste React Using JSX</h1>
);

const title =  (
    <h1 className="heading">Namaste React Using JSX</h1>
);

const number = 1000;
// Component Composition
  const HeadingComponent = () => (
    <div id="container">
        <Title />
        {title}
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);