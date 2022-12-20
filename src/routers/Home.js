import {useState, useEffect} from "react"   // 한번만 실행하게 만들고 싶다.
import { isCompositeComponent } from 'react-dom/test-utils';
import Movie from '../component/Movie';
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    //getMoveis 함수를 async()로 만듦(이전 내용에 없었는데) awiat 를 3번 사용 
    //getMoveis 함수를 useEffect에 넣음. ()=>{} 이 안에 넣음
    const getMovvies = async ()=>{
      const response = await ( await fetch( 
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=yea`
      ));
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect( ()=> {
        getMovvies();
      } 
    ,[]);
      console.log(movies);
    //select tag 안에서는 최근 선택한 값이 나옴.
    //array.map 연습 
     return (
        <div className={styles.container}>
        {loading ? <h1 className={styles.loader}>Loading...</h1>  :
          <div className={styles.movies}>
          {
            movies.map( (movie) => (
              <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              year={movie.year}
              genres={movie.genres}
              />
            ))
          }
          </div>
        }
        </div>
    );
}
export default Home;