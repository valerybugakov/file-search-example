import { SearchContext } from "App/SearchContext";
import { SearchForm } from "./SearchForm";
import { SearchResults } from "./SearchResults";

import { SidebarContainer } from "./Sidebar.style";

// TOOD: make sidebar resizable by dragging border
export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SearchForm />
      <SearchContext.Consumer>
        {({ matchedFiles, searchQuery, isCaseSensitive }) => (
          <SearchResults
            matchedFiles={matchedFiles}
            searchQuery={searchQuery}
            isCaseSensitive={isCaseSensitive}
          />
        )}
      </SearchContext.Consumer>
    </SidebarContainer>
  );
};
