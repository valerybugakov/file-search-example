import { SearchContextValue } from "App/SearchContext";
import { SearchResult } from "App/Sidebar/SearchResults/SearchResult/SearchResult";
import {
  ResultsHeader,
  ResultsHeaderLabel,
  ResultsHeaderLabelEmpty,
  ResultsContainer,
  ResultsContent,
} from "./SearchResults.style";

type SearchResultsProps = Pick<
  SearchContextValue,
  "searchQuery" | "matchedFiles" | "isCaseSensitive"
>;

export const SearchResults: React.FC<SearchResultsProps> = props => {
  const { matchedFiles, searchQuery, isCaseSensitive } = props;

  if (searchQuery.length === 0) {
    return null;
  }

  if (matchedFiles.length === 0) {
    return (
      <ResultsHeader>
        <ResultsHeaderLabelEmpty>No results found</ResultsHeaderLabelEmpty>
      </ResultsHeader>
    );
  }

  const numberOfMatchedLines = matchedFiles.reduce(
    (acc, file) => acc + file.matchedLines.length,
    0
  );

  return (
    <>
      <ResultsHeader>
        <ResultsHeaderLabel>
          {numberOfMatchedLines} result{numberOfMatchedLines > 1 ? "s" : ""} in{" "}
          {matchedFiles.length} file{matchedFiles.length > 1 ? "s" : ""}
        </ResultsHeaderLabel>
      </ResultsHeader>
      <ResultsContainer>
        <ResultsContent>
          {matchedFiles.map(match => (
            <SearchResult
              key={match.id}
              matchedFile={match}
              searchQuery={searchQuery}
              isCaseSensitive={isCaseSensitive}
            />
          ))}
        </ResultsContent>
      </ResultsContainer>
    </>
  );
};
