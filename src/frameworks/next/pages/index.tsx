import React from 'react';
import styled from 'styled-components';

const App: React.FC = () => <Wrapper>Hello Next.tsx</Wrapper>;

const Wrapper = styled.div`
    font-weight: bold;
    margin: 0 auto;
    width: 100%;
    font-size: 200px;
`;

export default App;
