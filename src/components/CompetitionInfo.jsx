import comp from "../assets/comp1.webp"

function CompetitionInfo(){
    return (
        <div className="flex flex-row mt-16 p-10 justify-around gap-10">
            <img className="w-2/6" src={comp}/>
            <div className="w-3/6">
                <h1 className="text-[#3a4cb4] text-5xl font-bold mb-5">CIRCUIT DESIGN BATTLE</h1>
                <h2 className="text-neutral-900 font-bold text-2xl mb-5">Rs 2,000</h2>
                <p>Teams will compete to design and build functional electronic circuits based on given specifications. Participants will demonstrate their knowledge of circuit components, circuit analysis, and breadboarding techniques. The challenge will assess teams’ ability to troubleshoot circuits and optimize designs for performance and efficiency.</p>
            </div>
        </div>
    )
}
export default CompetitionInfo;