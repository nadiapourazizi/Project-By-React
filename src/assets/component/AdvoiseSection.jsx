import adviose from './../images/Advoise pic.jpg'
export default function AdvoiseSection(){
    return(
        <>
            <div className="container-fluid  mainfilm">
               <div className="container">
                 <section className="col-12">
                   <div className="row mx-0 my-0 justify-content-evenly align-items-center">
             
                    <div className="col-12   py-0 px-0 col-lg-6 col-xl-6  ">
                      <h2 className='py-3'>Advoise</h2>
                      <h5 className='py-3 '>An active fusion of a creative sound studio system with a high demanded Voice over from artistic side and a deep knowledge of know how in the fields of media, commerce and productivity as well as the marketing proficiency, made the Advoise an impressive platform of Audiovisual Ads which is drilling the target minds by a right advise. <br/>Every and each Advertisement will be engineered in a perfect type, technic and format for the medium and social platform it shall design for, to have the maximum efficiency to its potential audiences depend on generation, culture and believes.</h5>

                      <div className=' mainfilm_a py-3'>
                       <h4><a href="#">Go to<i class="bi bi-arrow-right-short"></i></a></h4>
                      </div>
                  </div>
           

                  <div className="col-12 col-lg-6 col-xl-6 py-3  d-flex justify-content-center align-items-center">
                   <img className='d-flex justify-content-center align-items-center' loading="lazy" src={adviose} alt="adviose" />
                 </div>


            </div>

        </section>
       </div>
       </div>
        </>
    )
}