
export function Profile(){

    return(
      
      <div className="flex justify-center items-center h-screen -mt-72">

        <div className="flex flex-col h-96">
            

            <div className="flex flex-col md:flex-row   ">

              <div className="md:mr-40">
              {/* Picture */}
              <img src="src/assets/1.png" className="mt-16 mx-auto h-56 w-56 rounded-full hover:scale-105 shadow-lg md:mt-40 md:h-80 md:w-80 md:mr-15" />
              </div>
              {/* Titles */}
              <div className="mx-auto md:mt-44 ">
                <h2 className="text-lg md:text-xl font-bold mt-7 text-stone-500 text-center">Hello, Hola! </h2>
                <h1 className="text-3xl md:text-5xl mt-3 text-center font-bold text-stone-800">Samuel Madrigal</h1>
                <h1 className="text-xl md:text-2xl mt-3 text-slate-500 text-center font-bold">Fullstack Developer</h1>

              {/*Buttons*/}
                <div className="md:ml-16 mt-10 flex flex-row space-x-5">
                 {/* Download PDF */}
                 
                 <div className="bg-white rounded-full p-3 text-stone-800 w-32 h-30 text-center shadow-md hover:bg-stone-800  hover:text-white hover:duration-200 text-sm hover:cursor-pointer">Download CV</div>
                 
                 
                 
                 <div className="bg-stone-800 rounded-full p-3 text-white w-32 h-30 text-center shadow-md hover:bg-white hover:text-black hover:duration-200 text-sm hover:cursor-pointer">Contact Info</div>
               </div>

               <div className=" md:ml-40 ml-24  mt-10 flex flex-row space-x-5 ">
                <a href="https://github.com/samumdu"><img src="src/assets/git.png" className="h-10 w-10 hover:cursor-pointer" /></a>
                <a href="https://www.linkedin.com/in/samuel-mduu/"><img src="src/assets/linkedin.png" className="h-10 w-10 hover:cursor-pointer" /></a>
              </div>

              </div>

   
            </div>
            
            


            
        </div>

        

      </div>
 
    )
}
