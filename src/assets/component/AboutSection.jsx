import aboutpic from './../images/About Ideal base.png'
import './../styles/master.css'
export default function AboutSection(){
    return(
    <>
      <div id="about1" className="container-fluid  text-dark  mainSection2">
        
            <div className="col-12 d-lg-flex d-md-flex justify-content-evenly align-items-center mainSection2-div">
               <section className=" col-md-6 col-lg-6 col-xl-6  col-12 mainSection2-section1">
                  <h2 className='text-center text-lg-start'>About Ideal Base</h2>
                  <h4 className='text-center text-lg-start'>Since 1999, establishing an Ideal Base to support creativity, productivity and development, particularly in the fields critical to a fair globalization for Middle East region, was the lifetime mission of its founder, Mr. Behnam Varasteh  aka Base. Media activities such as Film production and distributions 'Intellectual Sector' from one hand, and trading niche global friendly products 'Commercial Sector' from the other side , plus an individual body of protections and consultancies, made us a diamond structured organization. Our team gathered up from young economists, engineers and designing artists as well as lawyers to cover all necessities internally for maintaining our Ideal base.</h4>
               </section>
               <section className=" col-md-6 col-lg-6  col-xl-5 col-12 mainSection2-section2">
                  <img className='w-100' src={aboutpic} alt="aboutpic" />
               </section>
            </div>
        
    </div>
    </>
    )
}