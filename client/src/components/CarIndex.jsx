import { Link } from "react-router-dom"
import { useLoaderData } from "react-router"
import { useState } from "react"

export default function CarIndex() {
  const cars = useLoaderData()
  const [filters, setFilters] = useState({
    region: 'All',
    search: ''     
  })

  const filteredCars = cars.filter((car) => {
    const matchesRegion = filters.region === 'All' || car.manufacturer === filters.region

    const carMakeLower = car.make.toLowerCase()
    const carModelLower = car.model.toLowerCase()
    const searchLower = filters.search.toLowerCase()

    const matchesSearch = carMakeLower.includes(searchLower) || carModelLower.includes(searchLower)

    return matchesRegion && matchesSearch
  })

  const handleSearchChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: e.target.value,
    }))
  }


  return (
    <section className="Browse-cars">
      <div className="filter-bar">
        <input id="search" name="search" placeholder="Search..."
        value={filters.search} onChange={handleSearchChange} className="search-filter"/>
      </div>
      <h1 className="browse text-center">Browse</h1>
      <ul className="car-list">
        {filteredCars.map((car) => (
          <li key={car.id} className="car-item">
            <Link to={`/carIndex/${car.id}`} className="car-link">
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
              <p className="make-model">
                {car.make} {car.model}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

