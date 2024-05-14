export function Projects(){

    return(
        
            <div className="flex flex-col    items-center h-full md:h-screen mt-72 bg-black  md:mt-40 md:justify-start">
                
                {/*Title*/}
                    <h1 className="text-xl text-slate-300 mt-16 ">Discover!</h1>
                    <h1 className="text-5xl text-white ">My Journey</h1>
                 
                {/*Panels*/}
                <div className="flex flex-col md:flex-row   md:space-x-6 mt-16">
                    <div className="h-72 w-72 bg-white mt-10 rounded-xl"></div>

                    <div className="h-72 w-72 bg-white mt-10 rounded-xl"></div>

                    <div className="h-72 w-72 bg-white mt-10 rounded-xl"></div>

                    <div className="h-72 w-72 bg-white mt-10 rounded-xl"></div>
                </div>
               

            </div>


       
    )
}