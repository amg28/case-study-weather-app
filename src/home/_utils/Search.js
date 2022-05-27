import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: 2rem 2rem 1rem;
  position: relative;
  input {
    border-radius: 2rem;
    padding: 1.5rem 3rem 1.5rem 6rem;
    outline: none;
    box-shadow: none;
    margin: 0;
    border: none;
    width: 100%;
    font-size: 1.6rem;
    box-shadow: 0 15px 20px #e6e8f2;
    font-family: "OpenSans-Regular", Arial, Helvetica, sans-serif;
    &::placeholder {
      // @include font(#6e6e6e, "OpenSans-Regular", 1.6rem, 400);
      font-family: "OpenSans-Regular", Arial, Helvetica, sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: #6e6e6e;
    }
  }
  .search-icon {
    position: absolute;
    top: 1.3rem;
    left: 2rem;
    font-size: 22px;
  }
`;

const Search = props => {
  return (
    <SearchWrapper>
      <input
        type="text"
        placeholder="Search City"
        value={props.search}
        onChange={props.onChange}
      />
    </SearchWrapper>
  );
};

export default Search;
