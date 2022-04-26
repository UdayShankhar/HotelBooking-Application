import "./propertyList.css";

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img
                    src="https://i.pinimg.com/originals/95/00/bc/9500bc1621aead4517e6bf38fc696726.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://www.livechennai.com/businesslistings/News_photo/flat26717.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://www.bjtonline.com/sites/bjtonline.com/files/time_tide-miavana-web.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://q-xx.bstatic.com/xdata/images/hotel/max500/158169649.jpg?k=04b4295425f451ad0286c1c5585b404ff9b81296b0a8edf949bf4d8ef268d945&o="
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    src="https://wallpapercave.com/wp/wp2649847.jpg"
                    alt=""
                    className="pListImg"
                />
                <div className="pListTitles">
                    <h1>Boat house</h1>
                    <h2>23 houses</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;