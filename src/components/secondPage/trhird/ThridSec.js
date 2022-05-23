import './thridSec.scss'
import Cards from './card/Cards'
import {useState} from 'react'
import styled from 'styled-components'
const  FlexWrap = styled.div`
    display: flex;
    flex-flow: wrap;
    margin-left: 319px;
    
`


function ThridSec() {
   const [goods, setGoods] = useState([
       {img: 'https://pristineorganics.com/wp-content/uploads/2020/01/Front-3-500x500.jpg', country:'Brasil', title:'AROMISTICO Coffee 1 kg', price:'33$'},
       {img: 'https://pristineorganics.com/wp-content/uploads/2020/01/Front-3-500x500.jpg', country:'Kenya', title:'Arbi Coffee 1 kg', price:'3$'},
       {img: 'https://pristineorganics.com/wp-content/uploads/2020/01/Front-3-500x500.jpg', country:'Columbia', title:'AROMISTICO Coffee 1 kg', price:'23$'},
       {img: 'https://pristineorganics.com/wp-content/uploads/2020/01/Front-3-500x500.jpg', country:'Brasil', title:'CoffeStory Coffee 1 kg', price:'33$'},
       {img: 'https://pristineorganics.com/wp-content/uploads/2020/01/Front-3-500x500.jpg', country:'Columbia', title:'AROMISTICO Coffee 1 kg', price:'26$'},
       {img: 'https://pristineorganics.com/wp-content/uploads/2020/01/Front-3-500x500.jpg', country:'Brasil', title:'MisterMax Coffee 1 kg', price:'33$'}
   ]);

   const [filter, setFilter] = useState();
   const [term, setTerm] = useState('');
  
   let filtered = goods.filter(i =>{
     if(filter){
      return i.country === filter
     }else{
       return i
     }
   })
  filtered = filtered.filter(i =>{
    if(term.length > 2){
      return i.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    }else return i
  }) 
  const  items = filtered.map(i =>{
       return <Cards img={i.img} country={i.country} price={i.price} title={i.title}/>
   })

  

  return (
    <div className='wrapp'>
    <div className='seacrh'>
    <div className='inp_wrap'>
      <span>Looking for</span>
      <input value={term}  onChange={(e) =>{setTerm(e.target.value)}} type="text" placeholder='start typing here...'/>
    </div>
    <div className='btn_wrap'>
      <span>Or filter</span>
      <button name='Brasil' onClick={(e) =>{
        setFilter(e.target.name)
      } }>Brazil</button>
      <button name='Kenya' onClick={(e) => setFilter(e.target.name)}>Kenya</button>
      <button name='Columbia' onClick={(e) => setFilter(e.target.name)}>Columbia</button>
    </div>
    </div>
    <FlexWrap>{items}</FlexWrap>
    </div>
  )
}

export default ThridSec