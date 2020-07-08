import emotion from 'emotion/dist/emotion.umd.min.js';

const { css } = emotion;

export const characters = css`
  padding: 16px;
  h1 {
    font-weight: normal;
    text-align: center;
  }
`;

export const characterCard = css`
  color: #1555bd;
  width: 100%;
  padding: 16px;
  display: flex;
  margin-bottom: 16px;
  background-color: rgba(0, 0, 0, 0.75);
  border-right: 10px solid #1555bd;
  border-left: 10px solid #1555bd;
  cursor: pointer;
  h1 {
    margin: 0;
    font-weight: lighter;
    letter-spacing: 1px;
    font-size: 24px;
    margin-left: 25px;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }
`;