import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { sayHelloToNext } from '../store/init';
import { TAppStore } from '../store';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const { name } = useSelector((state: TAppStore) => state.init);

    useEffect(() => {
        dispatch(sayHelloToNext());
    }, []);

    return <Wrapper>Hello {name}</Wrapper>;
};

const Wrapper = styled.div`
    font-weight: bold;
    margin: 0 auto;
    width: 100%;
    font-size: 200px;
`;

export default App;
