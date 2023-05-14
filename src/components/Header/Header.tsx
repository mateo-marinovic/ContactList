import "./Header.css";

const Header = (props: Props) => {
  return <h1 className="header">{props.title}</h1>;
};

type Props = {
  title: string;
};
export default Header;
