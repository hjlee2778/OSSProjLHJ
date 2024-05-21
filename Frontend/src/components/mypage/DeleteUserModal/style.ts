import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
`;

export const Info = styled.p`
  margin-top: 0.8rem;
  padding: 0.6em;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.blue_gray_200};
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  list-style-type: disc;
  list-style-position: inside;
`;

export const InfoText = styled.li`
  margin: 0.5rem 0.4rem;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 0.75rem;
`;

export const InputContainer = styled.div`
  margin-top: 1rem;
`;

export const InputContainerStyles = css`
  padding: 0.65rem 0.45rem;
`;
