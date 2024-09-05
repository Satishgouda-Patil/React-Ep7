const Cards=(props)=>{
    let {resData}=props;
    let {name,cuisines,avgRating,devTime,cloudinaryImageId}=resData?.info;
    console.log(resData);
    return(
    <div className="card">
        <img alt="img" className="img card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p> {cuisines.join(",") }</p>
            <a href="#" class="btn btn-primary">{avgRating} Stars  & {devTime} Mins to Delivery</a>
        </div>
    </div>
    )
}

export default Cards;