import { useLoaderData } from "react-router"

export default function CarIndex(){

  const cars = useLoaderData()

  return (
    <>
    <section className="Browse-cars">
    <h1>Browse</h1>
    <ul>
      {cars.map(car => (
        <li key={car.id}>
          <h3>{car.image}</h3>
          <p>{car.make} {car.model} </p>
        </li>
      ))}
    </ul>
    </section>
    </>
  )
}