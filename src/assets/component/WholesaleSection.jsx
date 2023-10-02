import Wholesale from './../images/Ideal base wholesales pic.jpg'
export default function WholesaleSection(){
    return(
        <>
          <div id="wholesales1" className="container-fluid mainwholesale">
            <div className="container">
              <section className="col-12">
                <div className="row py-5   mx-0 my-0 justify-content-evenly align-items-center">

                <div className="col-12   col-lg-6 col-xl-6  d-flex justify-content-center justify-content-lg-start align-items-center mainwholesale_img">
                   <img className='d-flex justify-content-start align-items-center'  loading="lazy" src={Wholesale} alt="Wholesale" />
                </div>
             
                 <div className="col-12  py-0 px-0 col-lg-6 col-xl-6 mainwholesale_Sellers">
                  <h2>Ideal Base Wholesale Sellers</h2>
                  <h5 className='py-4'>Having a long term plan in the Middle East with a passionate young team to operate in offices and a well based warehouse facilitated in the heart of Dubai 'Al Qouz 1”, will give us an upper hand to expand and multiplies quicker than old timers! The only bumper is our board who believes in turtles, not Rabbits! <br/>We remain responsible to the tasks we committed to fulfil but meantime, hoping to get the green light of flying much higher in post Covid era.</h5>


                  <div className='py-3  mainwholesale_a'>
                   <h4><a href="#">Go to<i class="bi bi-arrow-right-short"></i></a></h4>
                 </div>
                </div>

                
               </div>

           </section>
         </div>
       </div>
        </>
    )
}