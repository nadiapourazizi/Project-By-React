import cinema from './../images/Ideal cinema.jpg'
export default function CinemaSection(){
    return(
        <>
            <div id="Cinema1" className="container-fluid maincinema">
            <div className="container">
              <section className="col-12">
                <div className="row py-5  mx-0 my-0 justify-content-evenly align-items-center">

                <div className="col-12  col-lg-6 col-xl-6  d-flex justify-content-center justify-content-lg-start align-items-center maincinema_img">
                   <img className='d-flex justify-content-start align-items-center'  loading="lazy" src={cinema} alt="cinema" />
                </div>
             
                 <div className="col-12  py-0 px-0 col-lg-6 col-xl-6 maincinema_Ic">
                  <h2>Ideal Cinema</h2>
                  <h5 className='py-4 '>IC become a major film exhibitor of foreign films in Persian territory who did the first digital 3D project in the country, releasing titles such as Hugo 'Scorsese', Sanctum 'James Cameron', Chinese Zodiac 'Jackey Chan', Nut Job and many more Action, Adventure and Animations. Recently we are involved in productions as well, but training and events are also two other divisions we are heavily looking and licensed for. Moreover is our owned licensed VOD platform which remained frozen till the local cases against official pirates in Persian territory forced to stop infringement. So we have been the one and only company acts and invests heavily on protecting foreign films rights in the region.</h5>


                  <div className='py-3  maincinema_a'>
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