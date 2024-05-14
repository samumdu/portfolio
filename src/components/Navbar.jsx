export function Navbar(){
    return(
        <nav className="hidden md:block">
            <div className="h-24 ">
                <ul className=" flex flex-row justify-end mr-60 space-x-24 mt-10 ">
                    <li><a href="#" className= "text-stone-800 hover:bg-stone-800 hover:rounded-full p-2 hover:p-3 hover:text-white hover:duration-300">HOME</a></li>
                    <li><a href="# " className="text-stone-800 hover:bg-stone-800 hover:rounded-full p-2 hover:p-3 hover:text-white hover:duration-300">PROJECTS</a></li>
                    <li><a href="#" className=" text-stone-800 hover:bg-stone-800 hover:rounded-full p-2 hover:p-3 hover:text-white hover:duration-300">CONTACT</a></li>
                </ul>
            </div>
        
        </nav >
    )
}