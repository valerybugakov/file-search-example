import styled from "styled-components";

export const ResultsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--sizes-8);
  border-bottom: 1px solid var(--colors-grays-600);
  flex-shrink: 0;
`;

export const ResultsHeaderLabel = styled.span`
  color: var(--colors-white);
`;

export const ResultsHeaderLabelEmpty = styled.span`
  color: var(--colors-grays-500);
`;

export const ResultsContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin-top: var(--space-4);
`;

export const ResultsContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-right: 8px;
`;
