import React from 'react'
import Product from './Product';
import './Home.css'
// import ShareLayout from './ShareLayout';


function Home() {
  return (
   
    <div className='home'>
    <img className="home__image"
    src="https://m.media-amazon.com/images/I/61i92411VBL._SX3000_.jpg" alt='#'/>

 <div className='home__row_container'> 
 <div className='home__row'>
<Product 
    id="63536737"
    title="  The Software Engineer's Guidebook: Navigating senior, tech lead, and staff engineer positions at tech companies and startups "
    price={25.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61vZlI3gBtL._AC_UY218_.jpg"
    />
<Product 
    id="12748488"
    title="Bethany Housewares Teflon Grill"
    price={169.95}
    rating={5}
    image="	https://m.media-amazon.com/images/I/714QcBlfT4L._AC_SX450_.jpg"
    />
    <Product 
    id="87531234"
    title="Bonsenkitchen Handheld Blender, Electric Hand Blender 12-Speed & Turbo Mode,  ...."
    price={14.44}
    rating={5}
    image="	https://m.media-amazon.com/images/I/61DQw9naiCL._AC_UF1000,1000_QL80_FMwebp_DpWeblab_.jpg"
    />
    
    <Product 
    id="87531234"
    title="Women's Heels Chunky Block Strappy Square Open Toe Ankle Buckle Heeled Sandals ..."
    price={42.99}
    rating={5}
    image="	https://m.media-amazon.com/images/I/619eL75vNKL._AC_UL320_.jpg"
    />
    
    <Product 
    id="87531234"
    title="DRESSTELLS Women's Cocktail Dresses 2024 Modest Weddin, ..."
    price={41.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61DSeFPZanL._MCnd_AC_UL320_.jpg
    "
    />
    <Product 
    id="87531234"
    title="FURTALK Womens Mens Wide Brim Straw Panama Hat Fedora Summer Beach..."
    price={14.44}
    rating={5}
    image="https://m.media-amazon.com/images/I/71YStBBGR5L._AC_UL320_.jpg"
    />
</div>
       <div className='home__row'>
       <Product 
    id="32456217"
    title="Authentic Ethiopian Hand-Embroidered Coffee Dress with Scarf and Belt:.."
    price={120.01}
    rating={5}
    image="https://m.media-amazon.com/images/I/41psry4C0jL._AC_SY550_.jpg"
    />
          <Product 
    id="98654345"
    title="FIXY Makeup Repair Kit - Makeup Set with Eyeshadow Pressing Tool | Fix, Depot Blush & Highlighter....."
    price={59.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61G6XgS8liL._SX679_.jpg"
    />
    <Product 
    id="5432175"
    title="Gnvviwl Men's Muscle V Neck Polo Shirts Slim Fit Short Long Sleeve Cotton Golf T-Shirts Ribbed ..."
    price={29.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61v268msz1L._AC_SX569_.jpg"
    />
    
    <Product 
    id="76543287"
    title="Ekouaer Womens Silk Satin Tank Tops V Neck Casual Cami Sleeveless Camisole Blouses Summer Basic Tank Shirt"
    price={19.54}
    rating={5}
    image="	https://m.media-amazon.com/images/I/71y2aY4ej7L._AC_SY550_.jpg"
    />
       </div>
       <div className='home__row'>
       <Product 
    id="34254321"
    title="SAMSUNG 65-Inch Class QLED 4K UHD Q70A Series Dual LED Quantum HDR Smart TV with Alexa Built-In,.."
    price={1177.95}
    rating={5}
    image="https://m.media-amazon.com/images/I/71Fgu8+wfRL._AC_SX679_.jpg"
    />
          <Product 
    id="98745321"
    title="TCL 65-Inch Class S4 4K LED Smart TV with Fire TV (65S450F, 2023 Model), Dolby Vision HDR,.."
    price={379.99}
    rating={5}
    image="	https://m.media-amazon.com/images/I/81ubqC5PfRL._AC_SX679_.jpg"
    />
         <Product 
    id="98745321"
    title="Apple
    2023 MacBook Pro Laptop M3 chip with 8‑core CPU, 10‑core GPU: 14.2-inch Liquid .... "
    price={1449.99}
    rating={5}
    image="	https://m.media-amazon.com/images/I/61HUaSA6c0L._AC_UY218_.jpg"
    />
         <Product 
    id="98745321"
    title="Microsoft Surface Pro 2-in-1 Laptop/Tablet (2024), Windows 11 Copilot+ PC, 13" 
    price={999.99}
    rating={5}
    image="	https://m.media-amazon.com/images/I/71TiDZATR-L._AC_UY218_.jpg"
    />
       </div>
 </div>

    </div>
     
  );
}

export default Home

 