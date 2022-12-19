//  npm i react-router-dom@5.3.0
import PropTypes from "prop-types";
// link 를 만들어 줌.<href 대신 사용
import {Link} from "react-router-dom";
// props 설정 
function Movie({id, coverImg,title,summary,genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
            <p>{summary}</p>
            <ul>
                {
                    genres.map(g => <li key={g}>{g}</li>)
                }
            </ul>
        </div>
    )
}
// prop types 정의 array prop type 도 정의 
Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;