import emotion from 'emotion/dist/emotion.umd.min.js';

const { css } = emotion;

export const characterPage = css`
  padding: 12px;
`;

export const characterPageHeader = css`
  width: 100%;
  height: auto;
  text-align: center;
  img {
    margin: 0 auto;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  h1 {
    font-size: 32px;
    font-weight: lighter;
    letter-spacing: 2px;
    position: relative;
    z-index: 1;
    overflow: hidden;
    &:before, &:after {
      position: absolute;
      top: 51%;
      overflow: hidden;
      width: 50%;
      height: 1px;
      content: '\a0';
      background-color: #1555bd;
    }
    &:before {
      margin-left: -60%;
      text-align: right;
    }
    &:after {
      margin-left: 10%;
    }
  }
`;

export const backstoryEvents = css`
  padding: 16px;
  h2 {
    margin-bottom: 16px;
    font-weight: normal;
  }
  div {
    padding: 16px;
    background-color: #06060d;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
`;