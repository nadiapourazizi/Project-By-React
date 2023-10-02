import bakomba from './../images/Bakomba.jpg'
export default function BakombaSection(){
    return(
        <>
           <div className="container-fluid  maintrading">
             <div className="container">
               <section className="col-12">
                 <div className="row mx-0 my-0 justify-content-evenly align-items-center">
             
                    <div className="col-12   py-0 px-0 col-lg-6 col-xl-6  ">
                      <h2 className='py-3'>Bakomba</h2>
                      <h5 className='py-3 '>Branding our distribution arm in Outdoor/Sport/Lifestyle products required an energetic and funny name which is easily to remember for the suit minds of our target customers, especially kids! BAKOMBA has two retailing divisions; one through it's own shops and retailing contracted ones, and our online shopping platforms including Amazon,  and our upcoming solution 'bakomba.com'.</h5>

                      <div className=' maintrading_a py-3'>
                       <h4><a href="#">Go to<i class="bi bi-arrow-right-short"></i></a></h4>
                     </div>
                    </div>
           

                  <div className="col-12 col-lg-6 col-xl-6 py-3  d-flex justify-content-center align-items-center">
                   <img className='d-flex justify-content-center align-items-center' loading="lazy" src={bakomba} alt="bakomba" />
                 </div>


               </div>

            </section>
          </div>
        </div>
        </>
    )
}