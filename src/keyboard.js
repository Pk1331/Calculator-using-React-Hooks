import './App.css'
function Keyboard({Keyclick,Clear,Calculate})
{
    return(
        <div className='keypad'>
            <div className='row1'>
                <button className='digit' onClick={
                    ()=>{
                        Keyclick('7')
                    }
                }>7</button>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('8')
                    }
                }>8</button>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('9')
                    }
                }>9</button>
                <button className='Operator' onClick={
                    ()=>{
                        Keyclick('/')
                    }
                }>/</button>
            </div>
            <div className='row2'>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('4')
                    }
                }>4</button>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('5')
                    }
                }>5</button>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('6')
                    }
                }>6</button>
                <button className='Operator' onClick={
                    ()=>{
                        Keyclick('*')
                    }
                }>*</button>
            </div>
            <div className='row3'>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('1')
                    }
                } >1</button>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('2')
                    }
                }>2</button>
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('3')
                    }
                }>3</button>
                <button className='Operator' onClick={
                    ()=>{
                        Keyclick('-')
                    }
                }>-</button>
            </div>
            <div className='row4'> 
                <button className='digit'onClick={
                    ()=>{
                        Keyclick('0')
                    }
                }>0</button>
                <button className='func-key'onClick={
                    ()=>{
                        Calculate()
                    }
                }>=</button>
                <button className='func-key' onClick={
                    ()=>{
                        Clear()  
                    }
                }>C</button>
                <button className='Operator' onClick={
                    ()=>{
                        Keyclick('+')
                    }
                }>+</button>
            </div>
        </div>
        
    )
}
export default Keyboard