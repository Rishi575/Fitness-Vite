import '@/assets/css/carousel.css'

export default function Carousel() {
    return (
        <div className="app">
            <div className="hcontainer">
               
                <div class="card">
                <img src='https://ik.imagekit.io/wgp1xe3yu/Home/carousel-1?updatedAt=1723207799016' alt="My Image" />
                    <div className="card__head font-serif font-bold">Feel Like U</div>
                </div>
                <div className="card">
                <img src='https://ik.imagekit.io/wgp1xe3yu/Home/carousel-2?updatedAt=1723209487198' alt="My Image" />
                    <div className="card__head font-serif font-bold">Find Your Strength</div>
                </div>
                <div className="card">
                    <img src='https://ik.imagekit.io/wgp1xe3yu/Home/asta.png?updatedAt=1723098638030' alt="My Image" />
                    <div className="card__head font-serif font-bold">Train Like Asta</div>
                </div>
                <div className="card">
                <img src='https://ik.imagekit.io/wgp1xe3yu/Home/carousel-3?updatedAt=1723209686421' alt="My Image" />
                    <div className="card__head font-serif font-bold">Build Your Body</div>
                </div>

                <div className="card">
                <img src='https://ik.imagekit.io/wgp1xe3yu/Home/carousel-4?updatedAt=1723209799684' alt="My Image" />
                    <div className="card__head font-serif font-bold">Shape it</div>
                </div>
            </div>

        </div>

    );
}
