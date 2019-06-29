import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  margin-top: 24px;
  ul {
    padding: 0;
  }
  p {
    text-align: center;
    color: #777;
    font-size: 16px;
    font-weight: bold;
  }
  li {
    list-style: none;
    padding: 0;
    a { 
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50;
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #172c3f;
        text-decoration: underline;
      }
    }
    button {
      position: absolute;
      right: 8px;
      top: 12px;
      padding: 4px;
      border-radius: 3px;
      background-color: #ecf0f1;
      border: 1px solid #bdc3c7;
      color: #444;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      &:hover {
        background-color: white;
      }
    }
  }
  h1 {
    text-align: center;
    font-size: 26px;
  }
`;

const buttonsCommon = css`
    box-sizing: border-box;
    display: inline-block;
    padding: 8px;
    text-align: center;
    min-width: 56px;
    border: none;
    margin: 0 8px;
    border-radius: 4px;
    background-color: #ecf0f1;
    border: 1px solid #bdc3c7;
    text-decoration: none;
    font-size: 16px;
    color: #444;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
`;


export const Buttons = styled.div`
  text-align: center;
  margin-top: 24px;
  button {
    ${buttonsCommon}
    background-color: #ff4757;
    color: white; 
    border: 1px solid #ff2638;
    &:hover {
      background-color: #ff2638;
    }
  }
  a {
    ${buttonsCommon}
    background-color: #16a085;
    color: white;
    border: 1px solid #1abc9c;
    &:hover {
      background-color: #1abc9c;
    }
  }
`;