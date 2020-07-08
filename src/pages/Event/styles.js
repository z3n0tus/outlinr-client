import emotion from 'emotion/dist/emotion.umd.min.js';

const { css } = emotion;

export const eventPage = css`
  padding: 16px;
  
  h1 {
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: normal;
  }

  section {
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 8px 0;
    p {
      margin: 0;
    }
  }
`;

export const note = css`
  padding: 8px 16px;
  margin: 16px 0;
  border-left: 3px solid #1555bd;
`;

export const characterLink = css`
  cursor: pointer;
`;
