import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchField,
  searchMovie,
} from "../../redux/actions/search.actions";
import { removeSideNav } from "../../redux/actions/navigation.actions";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchField(search));
    dispatch(searchMovie(search));

    // remove sidenav
    dispatch(removeSideNav());
  };
  return (
    <div className="search">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
