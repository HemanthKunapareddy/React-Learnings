const heading = React.createElement(
  "div", 
  {id : "heading"},
  [React.createElement(
    "h1", 
    {id : "heading1"},
    "I'm Learning React!"), 
  React.createElement(
    "h2", 
    {id : "heading2"},
    "Heading inside Heading1")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);