import legal from './../images/Legal services.jpg'
export default function LegalSection (){
    return(
        <>
             <div id="Legal1" className="container-fluid mainlegal">
            <div className="container">
              <section className="col-12">
                <div className="row py-5   mx-0 my-0 justify-content-evenly align-items-center">

                <div className="col-12   col-lg-6 col-xl-6  d-flex justify-content-center justify-content-lg-start align-items-center mainlegal_img">
                   <img className='d-flex justify-content-start align-items-center'  loading="lazy" src={legal} alt="legal" />
                </div>
             
                 <div className="col-12    py-0 px-0 col-lg-6 col-xl-6 mainlegal_Services">
                  <h2>Ideal Copyright</h2>
                  <h5 className='py-4 '>We are providing legal services and consultancies including litigations, but our major proficiency is in Intellectual Property rights including Copyright, Trademarks, Trade Secrets, Industrial Designs and Patents. Our mission has been to reach the position of licensing and supervising long term deals and representing our international clients in our regions of which we have legal bases and strong roots. Our demanding vision would be a trustworthy collective management organization which will be reachable by local and global rightholders by an International recognition and supported networks.</h5>


                  <div className='py-3  mainlegal_a'>
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