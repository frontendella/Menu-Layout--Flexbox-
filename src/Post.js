export default function Post(props) {
  return (
    <li className="single_post">
      <a href="/">{props.post}</a>
    </li>
  );
}
