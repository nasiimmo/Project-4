import Background from '../images/gt3-new.jpeg'


export default function Home() {
  return (
    <>
    <div className='Main-page'>
    <h1 className='porsche text-center'>Porsche 911 GT3 R</h1>
    <img src={Background} alt="background" className="background-image"/>
    </div>
    <div className='home-container'>
      <h3 className='h3-dream'>The Driver's Dream</h3>
    <p className='main-description'>The Porsche 911 GT3 R embodies the perfect blend of timeless design and state-of-the-art technology, meticulously crafted to deliver an unparalleled driving experience.
Drawing inspiration from the iconic 911 series, the GT3 R showcases the distinctive Porsche silhouette. Inside, the meticulously designed interior, highlighted by the sophisticated analog chronocluster, stands as a masterpiece. Beneath the surface, every innovation, from the precision of the engage shift system (ESS) to the seamless light-speed transmission (LST), is engineered to elevate the joy of driving.</p>
    </div>
    </>
  )
}