import React from 'react';
import Image from 'next/image';
import ByteForgeLogo from '../../../public/ByteForge-logo.png';
import Link from 'next/link';
type LoginPageProps = {
    
};

const LoginPage:React.FC<LoginPageProps> = () => {
    return(
        <div className='h-screen w-screen flex justify-center items-center gap-48'>
            {/*sign up form*/}
            <div className='h-full flex flex-col justify-center'>
                <div className='login-card-wrapper h-[28rem] w-[22rem]'>
                        <div className='login-card-content flex items-center justify-center'>
                            <form className='flex flex-col h-[28rem] w-72 justify-center'>
                                <p className='animate-in slide-in-from-bottom-32 duration-1000  mb-4 font-normal text-3xl text-[#FDFFE2]'>Hi, there</p>
                                <input className='animate-in slide-in-from-bottom-36 duration-1000 h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]' type='email' id='email' name='email' placeholder='Email' required/>
                                <input className='animate-in slide-in-from-bottom-40 duration-1000 h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]' type='password' id='password' name='password' placeholder='Password' required/>
                                <input className='animate-in slide-in-from-bottom-44 duration-1000 h-12 p-3 mb-6 text-white rounded outline-none bg-[#1a2130]' type='password' id='password' name='confirmPassword' placeholder='Confirm Password' required/>
                                <button className='animate-in slide-in-from-bottom-52 duration-1000 bg-[#FDFFE2] h-10 border border-[#FDFFE2] rounded py-1 px-3 flex justify-center items-center gap-2 text-black font-semibold ease-in-out hover:text-[#FDFFE2] hover:bg-transparent' type='submit'>Sign Up</button>
                                <div className='animate-in slide-in-from-bottom-56 duration-1000 flex flex-col w-full items-center'>
                                    <p className='mt-8 text-sm font-semibold text-[#5f646e]'>Already have an account ?</p>
                                    <Link href={'/login'} className='text-[#83B4FF] underline hover:text-[#83B4FF]'>Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
            
            {/*ByteForgeLogo*/}
            <Image className='relative top-[-30px] animate-float' src={ByteForgeLogo} alt='Byte Forge Logo' />
        </div>
    );
}
export default LoginPage;