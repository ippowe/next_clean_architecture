import React from 'react';
import styled from 'styled-components';

interface IButton {
    className?: string;
}

const Button: React.FC<IButton> = props => {
    const { className, children } = props;
    return <Wrapper className={className}>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button``;
