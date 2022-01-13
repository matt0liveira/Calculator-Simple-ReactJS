import styled from 'styled-components'

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Calculator = styled.div`
    width: 25vw;
    height: 90vh;
    display: grid;
    grid-template-rows: 1.7fr 1fr 1fr 1fr 1fr;
    grid-template-column: 1fr;
    grid-template-areas: 'viewfinder' 'calcField' 'calcField' 'calcField' 'calcField';
    background-color: #282c34;
    border-radius: 20px;
`

export const ViewFinder = styled.input`
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-radius: 20px;
    grid-area: viewfinder;
    border: 0;
    text-align: right;
    font-size: 3rem;
    color: #444;
    pointer-events: none;
`

export const calcField = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Number = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid #555;
    background-color: transparent;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        background-color: #555;
        transition: all 0.3s ease-in-out;
    }
`

export const Operator = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #555;
    border: 0;
    color: #ccc;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;
`

export const Result = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #0B5ED7;
    border: 0;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
`