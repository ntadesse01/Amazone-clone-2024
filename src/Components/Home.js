import React from 'react'
import Product from './Product';
import './Home.css'


function Home() {
  return (
    <div className='home'>
    <img className="home__image"
    src="https://m.media-amazon.com/images/I/71yZSPxKSHL._SX3000_.jpg" alt='#'/>

 
<div className='home__row'>
<Product 
    id="12321341"
    title="  The Software Engineer's Guidebook: Navigating senior, tech lead, and staff engineer positions at tech companies and startups "
    price={25.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61vZlI3gBtL._AC_UY218_.jpg"
    />
<Product 
    id="12321341"
    title="Bethany Housewares Teflon Grill"
    price={169.95}
    rating={5}
    image="	https://m.media-amazon.com/images/I/714QcBlfT4L._AC_SX450_.jpg"
    />
    <Product 
    id="12321341"
    title="Bonsenkitchen Handheld Blender, Electric Hand Blender 12-Speed & Turbo Mode, Immersion Blender Portable Stick Mixer with Stainless Steel Blades for Soup, Smoothie, Puree, Baby Food"
    price={14.44}
    rating={5}
    image="	https://m.media-amazon.com/images/I/61DQw9naiCL._AC_UF1000,1000_QL80_FMwebp_DpWeblab_.jpg"
    />
</div>
       <div className='home__row'>
       <Product 
    id="12321341"
    title="Authentic Ethiopian Hand-Embroidered Coffee Dress with Scarf and Belt: A Traditional and Timeless Work of Art"
    price={120.01}
    rating={5}
    image="https://m.media-amazon.com/images/I/41psry4C0jL._AC_SY550_.jpg"
    />
          <Product 
    id="12321341"
    title="FIXY Makeup Repair Kit - Makeup Set with Eyeshadow Pressing Tool | Fix, Depot Blush & Highlighter | Magnetic Makeup Palette Empty with Mirror & Pans | Makeup Artist Must Haves"
    price={59.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61G6XgS8liL._SX679_.jpg"
    />
    <Product 
    id="12321341"
    title="Gnvviwl Men's Muscle V Neck Polo Shirts Slim Fit Short Long Sleeve Cotton Golf T-Shirts Ribbed Knit Soft Tees"
    price={29.99}
    rating={5}
    image="https://m.media-amazon.com/images/I/61v268msz1L._AC_SX569_.jpg"
    />
    
    <Product 
    id="12321341"
    title="Ekouaer Womens Silk Satin Tank Tops V Neck Casual Cami Sleeveless Camisole Blouses Summer Basic Tank Shirt"
    price={19.54}
    rating={5}
    image="	https://m.media-amazon.com/images/I/71y2aY4ej7L._AC_SY550_.jpg"
    />
       </div>
       <div className='home__row'>
       <Product 
    id="34"
    title="SAMSUNG 65-Inch Class QLED 4K UHD Q70A Series Dual LED Quantum HDR Smart TV with Alexa Built-In, Motion Xcelerator Turbo+, Multi View Screen (QN65Q70AAFXZA, 2021 Model)"
    price={1177.95}
    rating={5}
    image="https://m.media-amazon.com/images/I/71Fgu8+wfRL._AC_SX679_.jpg"
    />
          <Product 
    id="12321341"
    title="TCL 65-Inch Class S4 4K LED Smart TV with Fire TV (65S450F, 2023 Model), Dolby Vision HDR, Dolby Atmos, Alexa Built-in, Apple Airplay Compatibility, Streaming UHD Television,Black"
    price={379.99}
    rating={5}
    image="	https://m.media-amazon.com/images/I/81ubqC5PfRL._AC_SX679_.jpg"
    />
       </div>
    </div>
  );
}

export default Home

 