import logo from '../assets/logo.svg';
import sunIcon from '../assets/icon-sun.svg';

const Navbar = () => {
    
    
  return (
    <div class="flex items-center justify-between bg-neutral-700 rounded-lg px-3 py-2 w-full space-x-3">
        <img src={logo} alt="" className=''/>
        {/* <button><img src={sunIcon} alt=""/></button> */}
    </div>
  )
}

export default Navbar
