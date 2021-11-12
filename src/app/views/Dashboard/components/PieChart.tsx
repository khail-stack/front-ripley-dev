import React from 'react';
import { Pie } from 'react-chartjs-2';
import { AverageMaleFemaleResponse } from '../../../services/customer/models';

interface Props {
    data: AverageMaleFemaleResponse
}

const PieChart: React.FC<Props> = ({data}) => {

    const pie = data ? <Pie data={{
        labels: ['Hombres', 'Mujeres'],
        datasets: [
            {
            label: 'Número de clientes por género',
            data: [data.male.count, data.female.count],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            },
        ],
    }} options={{ responsive: true }} /> : null;

    return (
        <>
            <div className='header'>
                <h3 className='title'>Pie Chart</h3>
            </div>
            <div className="chart_container">
                {pie}
            </div>
        </>
    )
  
};

export default PieChart;