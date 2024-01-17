import { Link } from "react-router-dom"
import { useLoaderData } from "react-router"

export default function CarIndex() {
  const cars = useLoaderData()

  return (
    <section className="Browse-cars">
      <h1 className='browse text-center'>Browse</h1>
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <Link to={`/carIndex/${car.id}`} className="car-link">
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
              <p className='make-model'>{car.make} {car.model}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
