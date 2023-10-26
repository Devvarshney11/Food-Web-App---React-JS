const Shrimmer = () => (
    <div className="Restaurant-List">
        {Array(12).fill("").map((e,index) => (
            <div key = {index} className="shimmer-card"></div>
        ) )}
    </div>
)

export default Shrimmer;