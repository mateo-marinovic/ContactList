import { NavLink } from "react-router-dom";
import "./NavMenu";

const NavMenu = ({ items }: Props) => {
  const content = items.map(({ name, path }) => (
    <NavLink
      key={name}
      to={path}
    >
      {name}
    </NavLink>
  ));

  return <nav className="nav-menu">{content}</nav>;
};

type Props = {
  items: NavItem[];
};

type NavItem = {
  name: string;
  path: string;
};

export default NavMenu;
