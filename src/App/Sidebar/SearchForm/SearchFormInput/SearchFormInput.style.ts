import styled from "styled-components";
import { SearchIcon as RawSearchIcon } from "./icons/SearchIcon";
import { MatchCaseIcon } from "./icons/MatchCaseIcon";

type highlightableElementProps = { isHighlighted: boolean };

export const SearchContainer = styled.div<highlightableElementProps>`
  display: flex;
  align-items: center;
  height: 24px;
  border: 1px solid;
  border-color: var(--colors-grays-${p => (p.isHighlighted ? 400 : 500)});
  transition: border-color 200ms ease;
  border-radius: var(--radii-small);
  background: var(--colors-grays-600);
  color: var(--colors-grays-400);
`;

export const SearchIcon = styled(RawSearchIcon)<highlightableElementProps>`
  flex-shrink: 0;
  padding-left: var(--space-2);
  padding-right: var(--space-3);
  transition: color 200ms ease;
  ${p => p.isHighlighted && "color: var(--colors-white);"}
`;

export const SearchInput = styled.input`
  align-self: stretch;
  padding: 0;
  outline: none;
  color: var(--colors-white);
  width: 100%;
  transition: color 200ms ease;
  appearance: none;
  border: none;
  background: transparent;
`;

export const SearchMatchCaseButton = styled.button<highlightableElementProps>`
  display: flex;
  cursor: pointer;
  color: var(--colors-${p => (p.isHighlighted ? "white" : "grays-400")});
  transition: color 200ms ease;

  &:hover,
  &:focus {
    color: var(--colors-${p => (p.isHighlighted ? "white" : "grays-300")});
  }
`;

export const SearchMatchCaseIcon = styled(MatchCaseIcon)``;
