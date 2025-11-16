import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import { toast } from 'react-toastify';

const Queue = () => {
  const { serviceId } = useParams();
  const [queueInfo, setQueueInfo] = useState(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await axios.get(`/queue/${serviceId}`);
        setQueueInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQueue();
  }, [serviceId, joined]);

  const joinQueue = async () => {
    try {
      await axios.post(`/queue/join/${serviceId}`);
      toast.success('Joined Queue Successfully!');
      setJoined(true);
    } catch (err) {
      toast.error('Failed to join queue');
    }
  };

  const leaveQueue = async () => {
    try {
      await axios.post(`/queue/leave/${serviceId}`);
      toast.success('Left the Queue');
      setJoined(false);
    } catch (err) {
      toast.error('Failed to leave queue');
    }
  };

  return (
    <div className="container">
      <div className="card" style={{textAlign:'center'}}>
        <h2 style={{color:'#1E40AF'}}>{queueInfo?.serviceName || 'Loading...'}</h2>
        <p>Current Queue Length: {queueInfo?.queueLength || 0}</p>
        {joined ? (
          <>
            <p style={{color:'green'}}>You are in the queue! Position: {queueInfo?.position}</p>
            <button className="secondary" onClick={leaveQueue}>Leave Queue</button>
          </>
        ) : (
          <button className="primary" onClick={joinQueue}>Join Queue</button>
        )}
      </div>
    </div>
  );
};

export default Queue;
