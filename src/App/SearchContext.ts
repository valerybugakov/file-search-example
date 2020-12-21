import { createContext } from "react";
import { MatchedFile } from "./useSearchFilesInSandbox";

export type SearchContextValue = {
  searchQuery: string;
  isCaseSensitive: boolean;
  matchedFiles: MatchedFile[];
  onChangeSearchQuery(searchQuery: string): void;
  onToggleMatchCase(): void;
};

export const SearchContext = createContext<SearchContextValue>({
  searchQuery: "",
  matchedFiles: [],
  isCaseSensitive: false,
  onChangeSearchQuery() {},
  onToggleMatchCase() {},
});
