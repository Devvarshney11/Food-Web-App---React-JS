const Shrimmer = () => (
    <div className="Restaurant-List">
        {Array(18).fill("").map((e,index) => (
            <div key = {index} className="shimmer-card"></div>
        ) )}
    </div>
)

export default Shrimmer;