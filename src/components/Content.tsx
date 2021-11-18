import { memo } from 'react'

// components
import { MovieCard } from './MovieCard'

// contexts
import { useSelectedMovieContext } from '../contexts/selectedMovie'

function ContentComponent() {
  const { movies, selectedGenre } = useSelectedMovieContext()

  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

const Content = memo(ContentComponent)

export { Content }
