import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { toast } from 'react-toastify';

const Admin = () => {
  const [queues, setQueues] = useState([]);
  const [newService, setNewService] = useState('');

  useEffect(() => {
    fetchQueues();
  }, []);

  const fetchQueues = async () => {
    try {
      const res = await axios.get('/admin/queues');
      setQueues(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createQueue = async () => {
    try {
      await axios.post('/admin/queues', { name: newService });
      toast.success('Queue created!');
      setNewService('');
      fetchQueues();
    } catch (err) {
      toast.error('Failed to create queue');
    }
  };

  const closeQueue = async (id) => {
    try {
      await axios.post(`/admin/queues/close/${id}`);
      toast.success('Queue closed!');
      fetchQueues();
    } catch (err) {
      toast.error('Failed to close queue');
    }
  };

  return (
    <div className="container">
      <h2 style={{textAlign:'center', color:'#1E40AF', marginBottom:'20px'}}>Admin Dashboard</h2>
      <div className="card" style={{marginBottom:'20px'}}>
        <input 
          placeholder="New Service Name" 
          value={newService} 
          onChange={e => setNewService(e.target.value)} 
        />
        <button className="primary" onClick={createQueue} style={{marginTop:'10px'}}>Create Queue</button>
      </div>
      <div className="grid">
        {queues.map(q => (
          <div key={q.id} className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <span>{q.name} - {q.queueLength} in queue</span>
            <button className="secondary" onClick={() => closeQueue(q.id)}>Close</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
