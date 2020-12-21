import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useState } from "react";
import { SearchContextValue } from "App/SearchContext";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchMatchCaseButton,
  SearchMatchCaseIcon,
} from "./SearchFormInput.style";

export const SearchFormInput: React.FC<SearchContextValue> = props => {
  const { onChangeSearchQuery, onToggleMatchCase, isCaseSensitive } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => setIsFocused(true), [setIsFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [setIsFocused]);

  const handleInputChange = useCallback(
    debounce(
      (event: ChangeEvent<HTMLInputElement>) =>
        onChangeSearchQuery(event.target.value),
      250
    ),
    []
  );

  return (
    <SearchContainer isHighlighted={isFocused}>
      <SearchIcon isHighlighted={isFocused} />
      <SearchInput
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="search"
        autoComplete="off"
        placeholder="Search"
      />
      <SearchMatchCaseButton
        type="button"
        title="Match case"
        isHighlighted={isCaseSensitive}
        onClick={onToggleMatchCase}
      >
        <SearchMatchCaseIcon />
      </SearchMatchCaseButton>
    </SearchContainer>
  );
};
