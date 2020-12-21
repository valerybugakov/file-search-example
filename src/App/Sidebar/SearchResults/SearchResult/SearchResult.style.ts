import styled from "styled-components";
import { ToggleIcon } from "./ToggleIcon";

export const ResultContainer = styled.div`
  color: var(--colors-grays-300);

  &:last-child {
    margin-bottom: var(--sizes-4);
  }
`;

type CollapsibleElementProps = {
  isCollapsed: boolean;
};

export const ResultHeaderIcon = styled(ToggleIcon)<CollapsibleElementProps>`
  margin-left: var(--space-1);
  margin-right: var(--space-4);
  color: var(--colors-grays-500);
  transform: rotate(${p => (p.isCollapsed ? 0 : 90)}deg);
  transition: color 100ms ease, transform 100ms ease;
`;

export const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 28px;
  transition: color 100ms ease;

  &:hover,
  &:hover ${ResultHeaderIcon} {
    color: var(--colors-white);
  }
`;

export const ResultContent = styled.div<CollapsibleElementProps>`
  padding-left: 28px;
  /* would be cool to animate height here */
  ${p => p.isCollapsed && "display: none;"}

  &:last-child {
    margin-bottom: var(--sizes-2);
  }
`;

export const ResultContentLine = styled.div`
  cursor: pointer;
  line-height: 28px;
  transition: color 100ms ease;

  &:hover {
    color: var(--colors-white);

    & mark {
      color: var(--colors-white);
    }
  }

  & mark {
    color: var(--colors-grays-300);
    background-color: var(--colors-yellow);
  }
`;
