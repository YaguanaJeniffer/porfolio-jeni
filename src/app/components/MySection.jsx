import React from 'react'

const MySection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'> 
                <div className='col-span-7 place-self-center'>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Jeniffer</h1>
                        <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                            "Bringing creativity to life through design and code"
                        </p>
                </div>    
            </div>
            <div className='col-span-5'>

            </div>
        </section>
    );
}

export default MySection;