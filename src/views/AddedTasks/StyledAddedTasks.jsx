import styled from "styled-components";

export const TaskListSection = styled.section`
    display: grid;
    grid: auto / 1fr;
    grid-gap: 2em;

    @media (min-width: 800px) {
          grid: auto / 1fr 1fr;
    }
`;
