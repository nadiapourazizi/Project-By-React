import logo from './../images/Ideal-Base-Logo1.png'
export default function Header(){
    function clickMenu(){
       let list = document.getElementById('selectmenu')
       list.classList.toggle('d-flex')
    }
     function groupId(){
        document.getElementsByClassName('mainHeader2')[0].style.top='0'
     }
    
     document.getElementsByTagName('body')[0].addEventListener('click' , function(){
        document.getElementsByClassName('mainHeader2')[0].style.top='-360px'
     })
    return(
        <>
          <div className="mainHeader">
                <div className="row ">
                    <figure className='col-md-3 col-5  my-2 '>
                        <img className='imgdiv' title='Ideal Base' src={logo} alt="logoIdeal" />
                    </figure>
                    <nav className='col-9 d-none  d-md-flex justify-content-end align-items-center mainHeaderMenu'>
                        <ul className='d-flex justify-content-end align-items-center mainHeaderUl'>
                            <li><a href="#">Home</a></li>
                            <li onMouseOver={groupId}><a href="#Groups1">Groups</a></li>
                            <li><a href="#about1">About</a></li>
                            <li className='li4'><a href="#Contact1">Contact</a></li>
                        </ul>
                    </nav>
                    <div className='col-7 d-md-none  d-flex justify-content-end align-items-center mainHeader-icon'>
                        <span onClick={clickMenu} className='d-flex  justify-content-end align-items-center'><i class="bi bi-list display-5"></i></span>
                    </div>
                    <nav className='d-md-none' id='selectmenu'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#Groups1">Groups</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    
                </div>

       </div>
       <nav className='container-fluid  mainHeader2'>
        <ul className='mainHeader2Ul'>
            <li><a href="#Groups1">Ideal Base Trading</a></li>
            <li><a href="#wholesales1">Ideal Base Wholesales</a></li>
            <li><a href="#Media1">Ideal Film Media</a></li>
            <li><a href="#Cinema1">Ideal Cinema</a></li>
            <li><a href="#Legal1">Ideal Copyright</a></li>
            <li><a href="#Festival1">Ideal Festival</a></li>
        </ul>

       </nav>
    </>
    )
}