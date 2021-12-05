import styled from 'styled-components';

export const Wrapper = styled.div`
    h2 {
        font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
        font-size: 20px;
        grid-column: span 3;

        margin-bottom: 30px;
    }

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
      display: block;
      
      div:nth-child(2) {
        img {
          width: 300px;
          height: 150px;
        }
      }
    }

    div:nth-child(-n+3) {
      grid-column: span 1;
    }

    div:nth-child(3) {
        margin-top: 20%;
        img {
          width: 250px;
        }
    }

    div:nth-child(4) {
      img {
        width: 200px;
        height: 200px;
      }
  }
`;

export const HowItWorksWrapper = styled.div`
img {
    width: 300px;
    height: 150px;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    color: #2F3033;

    @media (max-width: 768px) {
      font-size: 12px;
  }
`;
