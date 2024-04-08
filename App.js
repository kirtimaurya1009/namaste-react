const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "child_heading"}, "I'm an h1 tag")))
const heading = React.createElement("h1", {id: "heading"}, "Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);