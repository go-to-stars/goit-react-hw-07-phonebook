import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  gap: 12px;

  list-style: inside;

  @media (max-width: 1023.98px) {
    gap: 10px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1023.98px) {
    gap: 10px;
  }

  @media (max-width: 767.98px) {
    gap: 5px;
  }
`;
