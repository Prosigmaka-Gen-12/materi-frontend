function App () {
  const cars = [
    'Gymkhana',
    'Ford',
    'BMW'
  ]

  return <>
    <h1>Hai Bambang</h1>

    {cars.map((car) =>
      <em>{car}</em>
    )}
  </>
}

export default App
