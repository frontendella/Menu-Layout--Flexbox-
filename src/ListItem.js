export default function ListItem(props) {
  return (
    <li>
      {" "}
      <a href="/">
        <span className="icon"> {props.icon} </span> {props.item}{" "}
      </a>
      <p className="description">{props.description}</p>
    </li>
  );
}
