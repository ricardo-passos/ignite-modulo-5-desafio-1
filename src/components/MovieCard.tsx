import { memo } from 'react'
import { Star as StarComponent, Clock as ClockComponent } from 'react-feather'

// styles
import '../styles/movie-card.scss'

interface MovieCardProps {
  title: string
  poster: string
  rating: string
  runtime: string
}

const Star = memo(StarComponent)
const Clock = memo(ClockComponent)

export function MovieCard(props: MovieCardProps) {
  return (
    <div className='movie-card'>
      <img src={props.poster} alt={props.title} />

      <div>
        <div className='movie-info'>
          <span>{props.title}</span>
          <div className='meta'>
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
