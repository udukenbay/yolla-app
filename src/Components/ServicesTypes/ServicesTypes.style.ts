import styled from 'styled-components';

export const ServicesTypesWrapper = styled.div`
  img {
    width: 400px;
    height: 300px;

    @media (max-width: 768px) {
      width: 200px;
      height: 150px;
    }
  }

  h2 {
    font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
    font-size: 20px;
  }

  p {
    font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
    font-size: 20px;
  }

  ul {
      list-style: none;
      margin: 0; padding: 0;
  }
`;