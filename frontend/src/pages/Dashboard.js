import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('/services');
        setServices(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="container">
      <h2 style={{textAlign:'center', color:'#1E40AF', marginBottom:'30px'}}>Available Campus Services</h2>
      <div className="grid">
        {services.map(service => (
          <Link key={service.id} to={`/queue/${service.id}`} className="card">
            <h3 style={{marginBottom:'10px', color:'#1E40AF'}}>{service.name}</h3>
            <p>Current Queue: {service.queueLength || 0}</p>
            <p style={{fontSize:'14px', color:'#888'}}>Click to join queue</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
