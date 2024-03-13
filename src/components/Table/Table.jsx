import React, { Component } from 'react';
import './Table.css';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Table extends Component {

    state = { ...this.props ,isActiveHalf:'',isActiveAll:''}

    componentDidMount() {
        const removeSet = setInterval(() => {
            const filteredAnimals = this.state.animals.filter(animal => !animal.isActive);
            const randomIndex = getRandomInt(0, filteredAnimals.length - 1);
            const selectedItem = filteredAnimals[randomIndex];

            // console.log(`in interval`);
            this.setState({
                animals: this.state.animals.map((item) => {
                    if (item === selectedItem) item.isActive = true;
                    return item;
                })
            }, () => {
                const activeItems = this.state.animals.filter(item => item.isActive);

                if (activeItems.length === Math.round( this.state.animals.length/2)) {
                    this.setState({ isActiveHalf: 'table__active_half ' }, () => {
                        console.log(this.state.isActiveHalf);
                    })
                }

                if (activeItems.length === this.state.animals.length) {

                    this.setState({ isActiveHalf:false, isActiveAll: 'table__active_all ' }, () => {
                        console.log(this.state.isActiveAll);
                    })
                    clearInterval(removeSet);
                }

            });
        }, 2000);
    }

    render() {
        const { animals = [], isActiveHalf, isActiveAll, } = this.state;

        return (
            <table className={isActiveHalf || isActiveAll}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Icon</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal, index) => (
                        <tr key={index} className={animal.isActive && 'active'}>
                            <td>{animal.type}</td>
                            <td><span role="img" aria-label={animal.type}>{animal.icon}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;
