import { useState } from "react";
import { AppLayout } from "./App.style";
import { Sidebar } from "./Sidebar";
import { SearchContext } from "./SearchContext";
import { useSearchFilesInSandbox } from "./useSearchFilesInSandbox";

const SANDBOX_ID = "84jkx";

export const App = () => {
  const [isCaseSensitive, setIsCaseSensitive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const matchedFiles = useSearchFilesInSandbox({
    searchQuery,
    isCaseSensitive,
    sandboxId: SANDBOX_ID,
  });

  const searchContextValue = {
    searchQuery,
    matchedFiles,
    isCaseSensitive,
    onChangeSearchQuery: (searchQuery: string) => setSearchQuery(searchQuery),
    onToggleMatchCase: () => setIsCaseSensitive(!isCaseSensitive),
  };

  return (
    <SearchContext.Provider value={searchContextValue}>
      <div className="App">
        <AppLayout>
          <Sidebar />
          <div className="Editor" />
        </AppLayout>
      </div>
    </SearchContext.Provider>
  );
};
