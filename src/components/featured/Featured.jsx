import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/p179.png"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Manali</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img
                    src="https://image3.mouthshut.com/images/Restaurant/Photo/-46522_8805.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Kodaikanal</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Ooty-In-Summer-cover_17th-Jan.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Ooty</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;