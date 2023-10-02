import festival from './../images/Ideal festival.jpg'
export default function FestivalSection (){
    return(
        <>
             <div id="Festival1" className="container-fluid mainlegal">
            <div className="container">
              <section className="col-12">
                <div className="row py-5   mx-0 my-0 justify-content-evenly align-items-center">

                <div className="col-12   col-lg-6 col-xl-6  d-flex justify-content-center justify-content-lg-start align-items-center mainlegal_img">
                   <img className='d-flex justify-content-start align-items-center'  loading="lazy" src={festival} alt="festival" />
                </div>
             
                 <div className="col-12    py-0 px-0 col-lg-6 col-xl-6 mainlegal_Services">
                  <h2>Ideal Festival</h2>
                  <h5 className='py-4 '>After participating and exhibiting in many International fairs and festivals since 1999, and planning for local events, we have become an alternative organizer for different industries such as Film Markets and Festivals to Cinema and filmmaking Equipments Exhibition in the region. Post Covid era, opened up some new opportunities of online gathering and events which became so reasonable plans to try. We are getting the license of presenting our unique semi International Film Festival called 'Ideal Festival' with luxurious substance of contents, with a first edition on 2023 which is majorly held online, but with the same opening and ending ceremony events as typical ones, to be announced.</h5>


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