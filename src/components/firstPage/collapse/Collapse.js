import './collapse.scss'
import {useState, useRef} from 'react';

function Collapse() {
    const [isToggle, setIsToggle] = useState(false);
    const scrollRef = useRef()


    const content = `  So you’ve got what it takes to open a small, local coffee shop: serious barista skills, recipes for a bunch of awesome beverages, and the know-how to whip up some delicious eats.
                       That’s all great and totally necessary, but what are you going to call your cafe? Brew up a big pot of coffee for this one because this is going to require your attention.`


  return (
    <div className='flex'>
        <div className='ffe2'>
        <button onClick={() => setIsToggle(!isToggle)}>More</button>
        </div>
        <div 
        ref={scrollRef}
        className='content-parent-collap' style={isToggle ? {
            height: scrollRef.current.scrollHeight + 'px'
        }: {
            height: '0px'
        } }>
         <div className='content_collap'>
            {content}
        </div>
        </div>
    </div>
        

  )
}

export default Collapse