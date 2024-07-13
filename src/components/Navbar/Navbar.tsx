import React from 'react';
import Logo from "../../../public/RVCE-logo.png";
import Image from 'next/image';
import { CiBoxList } from "react-icons/ci";

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='w-full h-14 flex justify-between items-center shadow-inner hover:shadow-innerOnHover'>
        <div className='h-full p-2 ml-2 flex items-center gap-3'>
            <Image src={Logo} alt='RVCE logo' width={35}/>
            <p className='text-white text-2xl font-normal'>E-Record</p>
        </div>

        <div className='h-full flex p-2 mr-2 items-center'>
            <button className='bg-[#83B4FF] border border-[#83B4FF] rounded py-1 px-3 flex items-center gap-2 text-black font-medium transition duration-300 ease-in-out hover:text-[#83B4FF] hover:bg-transparent hover:shadow-gray-300'>
                <CiBoxList fill='currentColor'/>
                Experiments
            </button>
        </div>
    </div>
}
export default Navbar;