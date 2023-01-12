function App () {
  const cars = [
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
  ]

  return <>
    <h1>Hai Bambang</h1>

    {cars.map(car =>
      <p key={car.id}>
        {car.make} {car.model}
      </p>
    )}
  </>
}

export default App
