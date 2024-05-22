function CarList(){
    const cars = ['Mercedes', 'BMW', 'Audi', 'Porsche', 'Ferrari'];

    const LIs = cars.map((c) => {
        return <li key={c}>{c}</li>
    });

    return <ul>
        {LIs}
    </ul>

}

export default CarList;