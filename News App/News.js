export default function News(props){
    console.log(props)
    return(
        <div className="News">
            <div className="news-img">
            <img src={props.article.urlToImage} alt="Image not found " />


            //get the data by the props

            </div>
            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")}
            <a  target="_blank" href={props.article.url}>Read more</a></p>
            <div className="source">
                <p>Author:{props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>
    )
}