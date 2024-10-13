function InnovateSection(){
    return(
        <div className="bg-neutral-900 text-white py-12">
            <h1 className="text-4xl text-center font-bold">INNOVATE, PITCH, & LAUNCH</h1>
            <p className="text-center my-5 mx-auto w-3/6">
            Welcome to the groundbreaking mega project exhibition, "My Project - My Startup,"
             part of Teknofest Pakistan 2024! This platform is designed for innovators, 
             tech enthusiasts, and future entrepreneurs to showcase cutting-edge projects across a variety of fields, 
             including:
            </p>
            <h2 className="text-center text-2xl font-bold">In projects, there are two categories</h2>

            <div className="flex flex-row gap-5 justify-center mt-10">
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-700 rounded-lg p-10 w-2/6 shadow-gray-900">
                    <h3 className="text-lg font-bold mb-5">Student Projects & Startup Ideas Competition</h3>
                    <p>Participants in this category will have the opportunity to showcase their innovative projects and ideas, as well as compete in various competitions. This is a platform for students and aspiring entrepreneurs to demonstrate their creativity, problem-solving skills, and potential to make an impact in their chosen field.</p>
                    <p className="text-lg font-bold mt-5">Registration fee: PKR 3000/=</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-700 rounded-lg p-10 w-2/6">
                    <h3 className="text-lg font-bold mb-5">Advanced Startups Exhibition</h3>
                    <p>Established startups will be provided with a standard-size stall to demonstrate their products or services. This is a chance for mature startups to attract attention from investors and industry leaders, helping them secure further investment and grow their business.</p>
                    <p className="text-lg font-bold mt-5">Registration fee: PKR 15000/=</p>
                </div>
            </div>
        </div>
    )
}
export default InnovateSection;