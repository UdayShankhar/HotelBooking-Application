import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/242156093.jpg?k=231d14e620b675e7fbbe9a85b981a19df3536b1a44738e00f2dbcf01e7d62446&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Club Mahindra</span>
                <span className="fpCity">Chennai</span>
                <span className="fpPrice">Starting from <span>&#8377;</span>3020</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://foto.hrsstatic.com/fotos/0/3/545/350/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F7%2F2%2F5%2F0%2F725069%2F725069_a_20916662.jpg/voxI%2BwTBl8soQHq2U%2FvplA%3D%3D/2048,1323/6/Urban_Lodge_Hotel-Amsterdam-Aussenansicht-4-725069.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Urban Lodge Hotel</span>
                <span className="fpCity">Chennai</span>
                <span className="fpPrice">Starting from <span>&#8377;</span>2220</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://media.cntraveler.com/photos/591de25aef06530b93a51f39/16:9/w_2560%2Cc_limit/Burj-Al-Arab-Diplomatic-Suite-cr-courtesy.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Fab Hotel</span>
                <span className="fpCity">Kodaikanal</span>
                <span className="fpPrice">Starting from <span>&#8377;</span>1820</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://media.cntraveler.com/photos/5a29568bb70da5581cb857e4/16:9/w_1280,c_limit/hilton-memphis-cr-courtesy.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Canyon Sun</span>
                <span className="fpCity">Manali</span>
                <span className="fpPrice">Starting from <span>&#8377;</span>4000</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;