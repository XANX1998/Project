import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Graph } from './graph.jsx'; 
import { dijkstra } from './djikstra.jsx'; 

const App = () => {
  const [graph] = useState(new Graph());
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [result, setResult] = useState(null);
  const [filteredStartStations, setFilteredStartStations] = useState([]);
  const [filteredEndStations, setFilteredEndStations] = useState([]);
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);

  const stations = [
    'Nagasandra', 'Dasarahalli', 'Jalahalli', 'Peenya Industry', 'Peenya', 'Yeshwanthpur',
    'Sandal Soap Factory', 'Mahalakshmi', 'Rajajinagar', 'Kuvempu Road', 'Srirampura',
    'Mantri Square Sampige Road', 'Majestic', 'Chickpete', 'KR Market', 'National College',
    'Lalbagh', 'South End Circle', 'Jayanagar', 'Rashtreeya Vidyalaya Road', 'Banashankari',
    'JP Nagar', 'Yelachenahalli'
  ];

  const ratePerKm = 1.76; 

  useEffect(() => {
    stations.forEach(station => graph.addNode(station));

    const routes = [
      ['Nagasandra', 'Dasarahalli', 3],
      ['Dasarahalli', 'Jalahalli', 2],
      ['Jalahalli', 'Peenya Industry', 2],
      ['Peenya Industry', 'Peenya', 2],
      ['Peenya', 'Yeshwanthpur', 3],
      ['Yeshwanthpur', 'Sandal Soap Factory', 2],
      ['Sandal Soap Factory', 'Mahalakshmi', 2],
      ['Mahalakshmi', 'Rajajinagar', 2],
      ['Rajajinagar', 'Kuvempu Road', 2],
      ['Kuvempu Road', 'Srirampura', 2],
      ['Srirampura', 'Mantri Square Sampige Road', 1],
      ['Mantri Square Sampige Road', 'Majestic', 1],
      ['Majestic', 'Chickpete', 1],
      ['Chickpete', 'KR Market', 1],
      ['KR Market', 'National College', 1],
      ['National College', 'Lalbagh', 1],
      ['Lalbagh', 'South End Circle', 2],
      ['South End Circle', 'Jayanagar', 2],
      ['Jayanagar', 'Rashtreeya Vidyalaya Road', 2],
      ['Rashtreeya Vidyalaya Road', 'Banashankari', 2],
      ['Banashankari', 'JP Nagar', 3],
      ['JP Nagar', 'Yelachenahalli', 3],
    ];

    routes.forEach(route => graph.addEdge(route[0], route[1], route[2]));
  }, [graph]);

  const handleInputChange = (e, setFunction, setFilteredFunction, setShowDropdown) => {
    const query = e.target.value;
    setFunction(query);
    if (query) {
      const filtered = stations.filter(station => station.toLowerCase().includes(query.toLowerCase()));
      setFilteredFunction(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleDropdownClick = (station, setFunction, setShowDropdown) => {
    setFunction(station);
    setShowDropdown(false);
  };

  const findShortestRoute = () => {
    if (!start || !end || start === end) {
      alert('Please select valid start and end stations.');
      return;
    }
    
    const { path, distance } = dijkstra(graph, start, end);
    const travelTime = distance * 60 / 35; // In minutes
    const travelCharges = distance * ratePerKm;

    const generateRandomTime = () => {
      const hours = Math.floor(Math.random() * 2) + 8; 
      const minutes = Math.floor(Math.random() * 60);
      return { hours, minutes };
    };

    const formatTime = (hours, minutes) => `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    const generateTrainSchedules = () => {
      const trainSchedules = [];
      for (let i = 0; i < 3; i++) {
        const trainCode = ` ${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        
        // Generate random departure time
        const departure = generateRandomTime();
        const departureHour = departure.hours;
        const departureMinute = departure.minutes;
        const departureTime = formatTime(departureHour, departureMinute);
        
        // Calculate arrival time
        const arrivalTimeInMinutes = departureHour * 60 + departureMinute + travelTime;
        const arrivalHour = Math.floor(arrivalTimeInMinutes / 60);
        const arrivalMinute = Math.floor(arrivalTimeInMinutes % 60);
        const arrivalTime = formatTime(arrivalHour, arrivalMinute);

        trainSchedules.push({
          trainCode,
          departureTime,
          arrivalTime
        });
      }
      return trainSchedules;
    };

    const trains = generateTrainSchedules();

    setResult({
      path,
      distance,
      time: travelTime.toFixed(2),
      charges: travelCharges.toFixed(2),
      trains
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img src="src\assets\logo.png" alt="Logo" className="logo" />
          <span className="title">Metro Route Finder</span>
        </div>
      </div>
      <div className="container">
        <div className="form-card">
          <div className="card-title">Route Finder</div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Start Station"
              className="form-control mb-2"
              value={start}
              onChange={e => handleInputChange(e, setStart, setFilteredStartStations, setShowStartDropdown)}
              onFocus={() => setShowStartDropdown(true)}
              onBlur={() => setShowStartDropdown(false)}
            />
            {showStartDropdown && filteredStartStations.length > 0 && (
              <ul className="dropdown">
                {filteredStartStations.map((station, index) => (
                  <li key={index} onMouseDown={() => handleDropdownClick(station, setStart, setShowStartDropdown)}>
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="End Station"
              className="form-control mb-2"
              value={end}
              onChange={e => handleInputChange(e, setEnd, setFilteredEndStations, setShowEndDropdown)}
              onFocus={() => setShowEndDropdown(true)}
              onBlur={() => setShowEndDropdown(false)}
            />
            {showEndDropdown && filteredEndStations.length > 0 && (
              <ul className="dropdown">
                {filteredEndStations.map((station, index) => (
                  <li key={index} onMouseDown={() => handleDropdownClick(station, setEnd, setShowEndDropdown)}>
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={findShortestRoute} className="btn btn-primary">Find Route</button>
        </div>
        {result && (
          <div className="result-card">
            <div><strong>Shortest Path:</strong> {result.path.join(' -> ')}</div>
            <div><strong>Distance:</strong> {result.distance} km</div>
            <div><strong>Estimated Travel Time:</strong> {result.time} minutes</div>
            <div><strong>Estimated Travel Charges:</strong> Rs.{result.charges}/- only</div>
            <div className="train-info">
              <strong>Available Trains:</strong>
              <div>
                {result.trains.map((train, index) => (
                  <div key={index} className="train-card">
                    <ul>
                      <li>Train Name: {train.trainCode}</li>
                      <li>Departure: {train.departureTime}</li>
                      <li>Arrival: {train.arrivalTime}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
