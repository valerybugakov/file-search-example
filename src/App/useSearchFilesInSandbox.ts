import { useEffect, useState } from "react";
import { mockResponse } from "./mockResponse";

type ModuleFromSandbox = {
  shortid: string;
  title: string;
  code: string;
  is_binary: boolean;
};

export type MatchedFile = {
  id: string;
  title: string;
  matchedLines: string[];
};

type UseSearchFilesInSandboxArgs = {
  sandboxId: string;
  searchQuery: string;
  isCaseSensitive: boolean;
};

type ExtractMatchedLinesArgs = {
  module: ModuleFromSandbox;
  searchQuery: string;
  isCaseSensitive: boolean;
};

type ExtractSubstringAroundMatchArgs = {
  searchQuery: string;
  line: string;
  matchIndex: number;
};

// should be dynamic depending on sidebar width
const MATCH_LENGTH = 24;

function extractSubstringAroundMatch(args: ExtractSubstringAroundMatchArgs) {
  const { searchQuery, line, matchIndex } = args;
  const matchLength = Math.max(MATCH_LENGTH, searchQuery.length);
  const maxIndex = line.length - 1;

  let startIndex = Math.max(0, matchIndex - matchLength / 2);
  let endIndex = Math.min(maxIndex, matchIndex + matchLength / 2);

  if (startIndex === 0) {
    const leftPartLength = matchIndex - startIndex;
    const rightPartLeftover = matchLength - leftPartLength;
    endIndex = Math.min(maxIndex, matchIndex + rightPartLeftover);
  }

  if (endIndex === maxIndex) {
    const rightPartLength = endIndex - matchIndex;
    const leftPartLeftover = matchLength - rightPartLength;
    startIndex = Math.max(0, matchIndex - leftPartLeftover);
  }

  const match = line.substring(startIndex, endIndex + 1);

  // maybe can be accomplished with `text-overflow: ellipsis;`
  if (endIndex + 1 !== maxIndex && match.length === matchLength) {
    return match + "...";
  }

  return match;
}

function extractMatchedLines(args: ExtractMatchedLinesArgs) {
  const { searchQuery, module, isCaseSensitive } = args;

  return module.code.split(/\r?\n/).reduce<string[]>((matches, rawLine) => {
    const line = rawLine.trim();
    const regexpFlags = `g${isCaseSensitive ? "" : "i"}`;
    const searchRegexp = new RegExp(searchQuery, regexpFlags);

    while (searchRegexp.exec(line)) {
      const matchIndex = searchRegexp.lastIndex - searchQuery.length;
      const matchSubstring = extractSubstringAroundMatch({
        line,
        matchIndex,
        searchQuery,
      });

      matches.push(matchSubstring);
    }

    return matches;
  }, []);
}

export const useSearchFilesInSandbox = (args: UseSearchFilesInSandboxArgs) => {
  const { sandboxId, searchQuery, isCaseSensitive } = args;
  const [matchedFiles, setMatchedFiles] = useState<MatchedFile[]>([]);

  useEffect(() => {
    async function searchFilesInSandbox() {
      // const response = await fetch(process.env.REACT_APP_API_URI + sandboxId);
      // const { data } = await response.json();
      const modules = mockResponse.modules;

      const matches = modules
        .filter(module => !module.is_binary && module.code?.length > 0)
        .map(module => ({
          id: module.shortid,
          title: module.title,
          matchedLines: extractMatchedLines({
            module,
            searchQuery,
            isCaseSensitive,
          }),
        }))
        .filter(file => file.matchedLines.length > 0);

      setMatchedFiles(matches);
    }

    if (searchQuery.length === 0) {
      setMatchedFiles([]);
    } else {
      searchFilesInSandbox();
    }
  }, [searchQuery, sandboxId, isCaseSensitive]);

  return matchedFiles;
};
