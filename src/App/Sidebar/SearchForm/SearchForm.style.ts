import styled from "styled-components";

export const SearchFormHeader = styled.div`
  display: flex;
  align-items: center;
  height: var(--sizes-8);
  padding: 0 var(--space-4);
  border-bottom: 1px solid var(--colors-grays-600);
  flex-shrink: 0;
`;

export const SearchFormHeaderLabel = styled.span`
  font-weight: var(--fontWeights-medium);
  color: var(--colors-grays-200);
`;

export const SearchFormInputContainer = styled.div`
  flex-shrink: 0;
  padding: var(--space-3) var(--space-2);
  border-bottom: 1px solid var(--colors-grays-600);
`;
