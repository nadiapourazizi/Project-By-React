import { useFormik } from "formik"
import * as Yup from 'yup'
export default function TouchSection(){
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues:{
      name:"",
      phone:"",
      email:"", 
      website:"",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20,'must be 20 characters or less').required('Please enter name'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please enter phone'),
      email:Yup.string().email('invalid email').required('Please enter email'),
      website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,'Enter correct url!').required('Please enter website')
    })
  })
    return(
        <>
          <div id="Contact1" className="container-fluid px-0  mainSection10">
             <div className="container">
               <h3 className="text-center">LET'S BE IN TOUCH</h3>
             </div>
         </div>

         <div className="container-fluid  mainSection10-2">
            <div className="container">
                
                    <form onSubmit={formik.handleSubmit}  className="row justify-content-evenly align-items-center ">
                    <div className="col-md-5 col-12 ">
                      <div>
                         <label htmlFor="subject" className=" d-flex h6">Subject</label>
                         <select name="subject"id="subject" class="form-select mainSection10-select" aria-label="Default select example">
                           <option value="1">Information Request</option>
                           <option value="2">Business Proposal</option>
                           <option value="3">Job Offer</option>
                           <option value="4">General</option>
                         </select>
                         
                      </div>
                      <div>
                        <br/>
                      <label htmlFor="name" className=" d-flex h6">Name</label>
                        <div class="col">
                           <input id="name" type="text" class="form-control"  placeholder="name" aria-label="Last name" {...formik.getFieldProps('name')}/>
                           {formik.touched.name && formik.errors.name ? (<span>{formik.errors.name}</span>) : null}
                        </div>
                      </div>
                      <div>
                        <br/>
                      <label htmlFor="phone" className=" d-flex h6">Phone</label>
                        <div class="col">
                           <input id="phone" type="tel" class="form-control"  placeholder="+1" aria-label="Last name" {...formik.getFieldProps('phone')}/>
                        </div>
                      </div>
                      <br/>
                      <div>
                        <label htmlFor="email" className="d-flex h6" class="form-label">Email address</label>
                        <input id="email" type="email" class="form-control" placeholder="name@example.com" {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : null}

                      </div>
                    </div>
                    <div className="col-md-5 col-12">
                        <div>
                        <label htmlFor="website" className="d-flex h6"  class="form-label">Website</label>
                        <input id="website" type="url"  class="form-control"  placeholder="https://"  {...formik.getFieldProps('website')}/>
                        <span  className="col-5"></span>
                      </div>
                      <br/>
                      <div>
                       <label htmlFor="details" className="d-flex h6 form-label" >Details</label>
                       <textarea name="details"  class="form-control" id="details" rows="4"></textarea>
                     </div>

                     <button type="submit" className="send  d-flex justify-content-end align-items-center buttonsend">
                      <a href="#">Send<i class="bi bi-arrow-right-short"></i></a>
                     </button>



                     <div className="d-flex justify-content-end align-items-center emaill">
                        <p className="d-flex justify-content-center align-items-center">Please Kindly</p>
                        <p className="d-flex justify-content-center align-items-center px-2"><a className="emailbtn" href="mailto:Idealmaterial@yahoo.com">Email</a></p>
                        <p className="d-flex justify-content-center align-items-center">us</p>
                     </div>

                     
                      
                    </div>
                    </form>


            </div>

         </div>
        </>
    )
}