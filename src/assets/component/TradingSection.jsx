import trading from './../images/Ideal base trading pic.jpg'
export default function TradingSection(){
    return(
        <>
        <div id="Groups1" className="container-fluid  mainSection3">
            <h2 className="text-center">GROUPS</h2>
       </div>


       <div className="container-fluid  maintrading">
       <div className="container">
       <section className="col-12">
          <div className="row mx-0 my-0 justify-content-evenly align-items-center">
             
           <div className="col-12   py-0 px-0 col-lg-6 col-xl-6  ">
              <h2 className='py-3'>Ideal Base Trading</h2>
              <h5 className='py-3 '>The first activated business sector of our Group was decorative stones; from Machinery and tools up to export from quarries and factories. Our main expertise became the hardest of all kinds which is Onyx, but working on Marbles and Travertines sounds easy to handle as well as some of unique high demanded Granites.Our collaboration as a regional base with European manufactures of this business went deep to an exclusivity in partnership through out the region such as with respected Solga Diamant, Inmar Group and Marmar Stones.</h5>

              <div className='maintrading_a py-3'>
                 <h4><a href="#">Go to<i class="bi bi-arrow-right-short"></i></a></h4>
              </div>
           </div>
           

           <div className="col-12 col-lg-6 col-xl-6  d-flex justify-content-center align-items-center">
            <img className='d-flex justify-content-center align-items-center' loading="lazy" src={trading} alt="trading" />
           </div>


          

          </div>

        </section>
       </div>
       </div>
        </>
        
    )
}