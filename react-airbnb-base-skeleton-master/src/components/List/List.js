import React, { Component } from 'react';

import style from './List.module.css';

const Hotel = [
    {
        category: 'Apartment',
        city: 'Rome',
        name: 'Pettinatori Campo de FIORI',
        star: '****',
        image: 'https://travelji.com/wp-content/uploads/Hotel-Tips-696x399.jpg'
    },
    {
        category: 'Apartment',
        city: 'Minsk',
        name: 'Minsk Belarus Studio in historical center',
        star: '****',
    },
    {
        category: 'Cottage',
        city: 'Governador Celso Ramos',
        name: 'Exceptional property private beach',
        star: '*****',
    },
    {
        category: 'Room',
        city: 'Marrakesh',
        name: 'The cozy Palace',
        star: '****',
    },
    {
        category: 'Treehouse',
        city: 'Volcano',
        name: 'Treehouse at Kilauea Volcano',
        star: '**',
    },
    {
        category: 'Treehouse',
        city: 'Florence',
        name: "Splendida Casa sull'Albero",
        star: '***',
    },
    {
        category: 'Camper',
        city: 'Wimberley',
        name: 'Super Cute Retro Airstream',
        star: '*****',
    },
    {
        category: 'Room',
        city: 'Casablanca',
        name: 'Green Oasis Bougainvillea in Casa',
        star: '****',
    },
];

const List = () => {
    return (
        <section className={style.mainSection}>
            <h1>Homes around the world</h1>
            {Hotel.map(item => (
                <ListItem
                image={item.image}
                category={item.category}
                city={item.city}
                />
            ))}
        </section>
    )
}

const ListItem = (props) => {
    return (
        <div >
            <img src={props.image}/>
            <div>{props.category}</div>
            <div>{props.city}</div>
        </div>
    )
}

export default List;



/* de citit distructuring */