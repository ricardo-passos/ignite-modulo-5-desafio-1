import { memo } from 'react'

// components
import { Button } from './Button'

// contexts
import { useSelectedMovieContext } from '../contexts/selectedMovie'

function SideBarComponent() {
  // hooks
  const { changeMovieCategory, selectedGenreId, memoizedGenres } =
    useSelectedMovieContext()

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {memoizedGenres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => changeMovieCategory(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}

const SideBar = memo(SideBarComponent)

export { SideBar }
