import Highlighter from "react-highlight-words";
import { SearchContextValue } from "App/SearchContext";
import { MatchedFile } from "App/useSearchFilesInSandbox";
import {
  ResultContainer,
  ResultHeader,
  ResultHeaderIcon,
  ResultContent,
  ResultContentLine,
} from "./SearchResult.style";
import { useState } from "react";

type SearchResultProps = Pick<
  SearchContextValue,
  "isCaseSensitive" | "searchQuery"
> & {
  matchedFile: MatchedFile;
};

export const SearchResult: React.FC<SearchResultProps> = props => {
  const {
    searchQuery,
    isCaseSensitive,
    matchedFile: { title: fileName, matchedLines },
  } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleIsCollapsedToggle = () => setIsCollapsed(!isCollapsed);

  console.log(matchedLines);

  return (
    <ResultContainer>
      <ResultHeader onClick={handleIsCollapsedToggle}>
        <ResultHeaderIcon isCollapsed={isCollapsed} />
        <span>{fileName}</span>
      </ResultHeader>
      <ResultContent isCollapsed={isCollapsed}>
        {matchedLines.map((line, index) => (
          <ResultContentLine key={index}>
            <Highlighter
              textToHighlight={line}
              searchWords={[searchQuery]}
              caseSensitive={isCaseSensitive}
              autoEscape={true}
              highlightClassName="mark"
            />
          </ResultContentLine>
        ))}
      </ResultContent>
    </ResultContainer>
  );
};
