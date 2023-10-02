import film from './../images/Ideal film.jpg'
export default function FilmSection(){
    return(
        <>
            <div id="Media1" className="container-fluid  mainfilm">
               <div className="container">
                 <section className="col-12">
                   <div className="row py-3 mx-0 my-0 justify-content-evenly align-items-center">
             
                    <div className="col-12   py-0 px-0 col-lg-6 col-xl-6  ">
                      <h2 className='py-3'>Ideal Film Media</h2>
                      <h5 className='py-3 '>A motion pictures business base in the Middle East hub who has cooperation agreements with regional and International major companies and studios looking after Independent producers and young filmmakers. We do manage territorial rights of acquired titles and also handling global sales and distributions of the selective local contents. Our platform of services includes acquisition, pitching and production to post production, such as technical jobs and dubbing, up to distributions and legal services.</h5>

                      <div className=' mainfilm_a py-3'>
                       <h4><a href="#">Go to<i class="bi bi-arrow-right-short"></i></a></h4>
                      </div>
                  </div>
           

                  <div className="col-12 col-lg-6 col-xl-6  d-flex justify-content-center align-items-center">
                   <img className='d-flex justify-content-center align-items-center' loading="lazy" src={film} alt="film" />
                 </div>


            </div>

        </section>
       </div>
       </div>
        </>
    )
}

