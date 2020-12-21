import { SearchContext } from "App/SearchContext";
import { SearchFormInput } from "./SearchFormInput";
import {
  SearchFormHeader,
  SearchFormHeaderLabel,
  SearchFormInputContainer,
} from "./SearchForm.style";

export const SearchForm: React.FC = () => {
  return (
    <>
      <SearchFormHeader>
        <SearchFormHeaderLabel>Search</SearchFormHeaderLabel>
      </SearchFormHeader>
      <SearchFormInputContainer>
        <SearchContext.Consumer>
          {searchContextValue => <SearchFormInput {...searchContextValue} />}
        </SearchContext.Consumer>
      </SearchFormInputContainer>
    </>
  );
};
