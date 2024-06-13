import styled, { css } from "styled-components";

const StyledButton = styled.button`
    ${(p) => p.sizeStyle}
    ${(p) => p.variantStyle}

    margin: 0;
    border: none;
    cursor: pointer;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    // background-color: var(--button-bg-color, #94e8ff);
    color: var(--button-color, #ffffff);

    &:hover {
        background-color: var(--button-hover-bg-color, #42a4ff);
    }

    &:disabled {
        cursor: default;
        opacity: 0.5;
        background-color: var(--button-bg-color, #42a4ff);
    }
`
const SIZES = {
    sm: css`
      --button-font-size: 0.875rem;
      --button-padding: 0.15rem 0.65rem;
      --button-radius: 1.75rem;
    `,
    md: css`
      --button-font-size: 1rem;
      --button-padding: 0.5rem;
      --button-radius: 2.15rem;
    `,
    lg: css`
      --button-font-size: 1.25rem;
      --button-padding: 0 1.15rem;
      --button-radius: 2.75rem;
    `,
};

const VARIANTS = {
    login: css`
        background-color: var(--button-bg-color, #94e8ff);
        border-radius: var(--border-radius, 5px);
    `,
    signed: css`
        background-color: var(--button-bg-color, #4dd9ff);
        border-radius: var(--border-radius, 50px);
    `,
    save: css`
    
    `,
    modify: css`
    
    `,
    delete: css`
    
    `,
    search: css`
    
    `,
    diary: css`
    
    `,
    account: css`
    
    `,
    home: css`
    
    `,
    darkmode: css`
    
    `,
    up: css`
    
    `,
    add: css`
    
    `,
};

function Button({ disabled, children, size, variant }) {
    const sizeStyle = SIZES[size];
    const variantStyle = VARIANTS[variant];

    return (
        <StyledButton
            disabled={disabled}
            sizeStyle={sizeStyle}
            variantStyle={variantStyle}
        >
            {children}
        </StyledButton>
    );
}
export default Button;