import "./GreetUser.css"; // Importerar vår CSS-fil.

export const GreetUser = (props) => {
  const showAlert = () => alert("Header clicked");
  return (
    <h1 className="myHeader" onClick={() => showAlert()}>
      Welcome to my website, {props.name} {props.title}
    </h1>
  );
};

// export const GreetUser = ({name}) => {
//     const showAlert = () => alert("Header clicked");
//     return (
//       <h1 onClick={() => showAlert()}>
//         Welcome to my website, {name}
//       </h1>
//     );
//   };
