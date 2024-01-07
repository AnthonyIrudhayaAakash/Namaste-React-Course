

const Shimmer = () => {
    
    const shimmer_elements = [];
    
    for(let i=0; i<10;i++){
        shimmer_elements.push(
            <div id="shimmer-card" key={i}>

                <div id="shimmer-image">

                </div>
                <div id="shimmer-name">

                </div>
                <div id="shimmer-cuisine">

                </div>
                <div id="shimmer-details">

                </div>

            </div>
        )
    }
    

    return (
        <div id="shimmer-container">
            {shimmer_elements}

        </div>
    )
}

export default Shimmer;