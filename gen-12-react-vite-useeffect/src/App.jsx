import { useState } from "react"

function App () {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: 'Subaru',
      model: 'Impreza',
      year: '1992'
    },
    {
      id: 2,
      make: 'Nissan',
      model: 'R34 Skyline GT-R Spec V',
      year: '2002'
    },
    {
      id: 3,
      make: 'Mazda',
      model: 'RX 7',
      year: '2002'
    }
  ])

  const addCar = () => {
    const newCar = {
      id: 4,
      make: 'Toyota',
      model: 'Supra MK4',
      year: '1993'
    }
    const carsCopy = [...cars, newCar]
    setCars(carsCopy)
  }

  const removeCar = removeId => {
    const carIndex = cars.findIndex((car) => car.id === removeId)
    const copyCars = [...cars]
    copyCars.splice(carIndex, 1)
    setCars(copyCars)
  }

  return <>
    <h1>JDM List</h1>

    {cars.map(car =>
      <p key={car.id}>
        {car.make} {car.model} &nbsp;
        <button onClick={() => removeCar(car.id)}>
          - remove
        </button>
      </p>
    )}

    <button onClick={addCar}>
      Add New Car
    </button>
  </>
}

export default App
