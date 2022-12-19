import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
//import Movie from '../component/Movie';

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movieDetail,setMovieDetail] = useState([]);

    const {id}  = useParams();
    console.log(id); 

    const getSingleMovie = async ()=>{
        const response = await ( await fetch( 
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        ));
        const json = await response.json();
        setMovieDetail(json.data.movie);
        setLoading(false);
        
    }
    console.log(movieDetail.id, movieDetail.title);

    useEffect( ()=>{getSingleMovie();}
        ,[])
    return (
        <div>
            <h1>Detail</h1>
            {
                loading ? <h2>Loading..</h2>:
                  <h2>
                    <p>Title : {movieDetail.title}</p>
                    <p>Year : {movieDetail.year}</p>
                    <p>Rating : {movieDetail.rating}</p>
                    <p>Runtime : {movieDetail.runtime}</p>
                    <p>Download Count : {movieDetail.download_count}</p>
                    <p>Description : {movieDetail.description_full}</p>
                    <img src = {movieDetail.medium_cover_image} />
                  </h2>
            }
        </div>
    );
}
export default Detail;