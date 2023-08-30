import { useSelector } from "react-redux";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import genres from "./genres";
import { selectGenre } from "../../redux/features/searchFilter/selector";
import { MenuProps } from "antd";
import { useAppDispatch } from "../../redux/store";
import { searchFilterActions } from "../../redux/features/searchFilter";

export function GenreDropdown() {
  const genre = useSelector(selectGenre);
  const dispatch = useAppDispatch();

  const menu: MenuProps = {
    items: genres.map((genre) => ({ label: genre, key: genre })),
    onClick: (event) => dispatch(searchFilterActions.setGenre(event.key)),
  };

  return <Dropdown menu={menu}>{genre}</Dropdown>;
}
