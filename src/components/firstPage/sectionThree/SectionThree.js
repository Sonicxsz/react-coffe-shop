import './sectionThree.scss'
import Card from './card/card'
import styled from 'styled-components'
import {useState} from 'react'
const LogoTitle = styled.div`
    display: block;
    width: 103px;
    height: 26px;
    font-family: 'Merienda';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #000000;
    margin: 0 auto;
    margin-bottom: 40px;
`

function SectionThree() {
    const [goods, setGoods] = useState([
        {descr:'Solimo Coffee Beans 2 kg',img:'https://elex.ru/upload/resize_cache/iblock/64c/1920_1080_1/64c2298e2c32989d6f6a85c3fdf29d7b.jpg', price:'10.73$', id:'342'},
        {descr:'Presto Coffee Beans 1 kg',img:'https://koropt.ru/wa-data/public/shop/products/04/webp/76/18/41876/images/83794/image.970.webp', price:'15.99$', id:'34ew2'},
        {descr:'AROMISTICO Coffee 1 kg',img:'https://irmag.ru/media/cache/catalog_element_popup/uploads/files/2019/07/03/cad1e0b07222fa527c275c262da86e7255adb2b8.jpeg', price:'6.99$', id:'3w342'}

    ]);
    
    const goodsItems = goods.map(i =>{
        return <Card descr={i.descr} price={i.price} key={i.id} img={i.img}/>
    })

  return (
    <div className='secTrheeWrapp'>
        <LogoTitle>Our best</LogoTitle>
       
        <div className='wrapped_flex'>
        {goodsItems}
        </div>
    </div>
  )
}

export default SectionThree