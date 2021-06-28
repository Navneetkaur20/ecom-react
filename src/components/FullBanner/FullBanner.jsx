import React from 'react';
import { Link } from 'react-router-dom';

const  FullBanner=()=>{
    const img="full_screen.jpg";
    return(
        <section className="fullbanner-block">
<div className="full-banner" style={ {backgroundImage:`url(images/${img})`} } >
    <div className="container">
        <h2>The Perfect Match</h2>
        <p>Vitae posuere urna blandit sed. Praesent ut dignissim risus</p>
        <Link to="/shop"><button className="site-btn">shop now</button></Link>
    </div>
    </div>
</section>

    )
}
export default FullBanner;