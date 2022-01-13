import { useState } from 'react'
import * as C from '../style/AppStyles'

export const Calculator = () => {
    let [viewfinder, setViewFinder] = useState<string>('')

    const addValue = (num:string) => {
        setViewFinder(viewfinder + num)
    }

    const result = () => {
        let result = eval(viewfinder)
        setViewFinder(result)
    }

    const clear = () => {
        setViewFinder('')
    }

    return (
        <C.Calculator>
            <C.ViewFinder value={ viewfinder }/>

            <C.calcField>
                <C.Number onClick={() => addValue('7')}>7</C.Number>    
                <C.Number onClick={() => addValue('8')}>8</C.Number>
                <C.Number onClick={() => addValue('9')}>9</C.Number>
                <C.Operator onClick={() => addValue('/')}>/</C.Operator>
            </C.calcField>

            <C.calcField>
                <C.Number onClick={() => addValue('4')}>4</C.Number>
                <C.Number onClick={() => addValue('5')}>5</C.Number>
                <C.Number onClick={() => addValue('6')}>6</C.Number>
                <C.Operator onClick={() => addValue('*')}>*</C.Operator>
            </C.calcField>

            <C.calcField>
                <C.Number onClick={() => addValue('1')}>1</C.Number>
                <C.Number onClick={() => addValue('2')}>2</C.Number>
                <C.Number onClick={() => addValue('3')}>3</C.Number>
                <C.Operator onClick={() => addValue('-')}>-</C.Operator>
            </C.calcField>

            <C.calcField>
                <C.Number onClick={() => addValue('0')}>0</C.Number>
                <C.Result onClick={() => result()}>=</C.Result>
                <C.Number onClick={() => clear()}>C</C.Number>
                <C.Operator onClick={() => addValue('+')}>+</C.Operator>
            </C.calcField>
        </C.Calculator>
    )
}