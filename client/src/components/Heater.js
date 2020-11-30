import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHeater, getHeaterData } from '../redux/heater/heaterActions';
import { Line } from 'react-chartjs-2';

const Heater = ({
  id,
  client_name,
  address,
  readings,
  createdAt,
  updatedAt,
  deleteHeater,
  getHeaterData,
}) => {
  const isReadings = readings[0] ? (
    <ul>
      {readings.map((reading) => (
        <li
          key={reading._id}
          style={{
            width: '30%',
          }}
        >
          {reading.temperature}°C -{' '}
          {new Date(reading.timestamp).toLocaleString('de-DE', {
            hour12: false,
          })}
        </li>
      ))}
    </ul>
  ) : (
    <p>No readings sent</p>
  );

  const date = [];
  const temp = [];

  readings.map((reading) => {
    date.push(
      new Date(reading.timestamp).toLocaleString('de-DE', {
        hour12: false,
      })
    );
    temp.push(reading.temperature);

    return null;
  });

  const data = {
    labels: date,
    datasets: [
      {
        borderColor: 'rgba(75,192,192,1)',
        label: 'Smart Heater Readings ',
        fill: false,
        data: temp,
      },
    ],
  };

  console.log(data);

  return (
    <div className='mb-4'>
      <Card>
        <CardHeader
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <h5>
            <strong>CLIENT NAME</strong>:{` ${client_name}`}
          </h5>
          <h5>{`Heater sold on: ${new Date(createdAt).toDateString()}`}</h5>
        </CardHeader>
        <CardBody>
          <CardText>
            <strong>ADDRESS</strong>: {address}
          </CardText>
          <CardText>
            <strong>READINGS</strong>:
          </CardText>
          {isReadings}
          <CardText>
            Last updated at -{' '}
            {new Date(updatedAt).toLocaleString('de-DE', { hour12: false })}
          </CardText>
          <div style={{ textAlign: 'center' }}>
            <Line data={data} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link to='/update'>
                <Button
                  className='mr-2 mt-3'
                  color='primary'
                  onClick={() => getHeaterData(id)}
                >
                  Edit
                </Button>
              </Link>
              <Link to='/'>
                <Button
                  className='mr-2 mt-3'
                  color='danger'
                  onClick={() => deleteHeater(id)}
                >
                  Delete
                </Button>
              </Link>
            </div>
            <div>
              <Link to='/addReadings'>
                <Button
                  className='mr-2 mt-3'
                  color='danger'
                  onClick={() => getHeaterData(id)}
                >
                  Add Readings
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    heater: state.heater,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHeater: (id) => dispatch(deleteHeater(id)),
    getHeaterData: (id) => dispatch(getHeaterData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heater);
