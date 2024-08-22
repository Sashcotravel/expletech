import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  label {
    flex: 1;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    select, input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      box-sizing: border-box;
    }
  }

    @media (max-width: 768px) {
        flex-direction: column;

        label {
            width: 90%;
            margin: 10px 0;
        }
    }
`;