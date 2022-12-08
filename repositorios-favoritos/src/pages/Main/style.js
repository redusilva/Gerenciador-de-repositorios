import styled, {keyframes, css} from "styled-components";

// criando animação
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;


export const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 88px auto;

    h1{
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    svg {
        margin-right: 10px;
    }
`;


export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: ${props => props.error ? '3px solid #ff0000' : '1px solid #DDD'};
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;


export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
}))`
    background-color: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left:2px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    svg {
        margin: 0 auto;
    }

    ${props => props.loading && css`
        svg{
            animation: ${animate} 2s linear infinite;
        }
    `}
`;


export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        padding:15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    & + li {
        border-top: 1px solid #eee;
    }

    a{
        color:#0d2636;
        text-decoration: none;
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    background: transparent;
    border: 0;
    color:#0d2636;
    padding: 0;
    outline: 0;
    border-radius: 4px;
`;