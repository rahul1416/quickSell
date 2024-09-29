import React from 'react';

const TicketCard = ({ ticket }) => {
    console.log(ticket)
  return (
    <div
      key={ticket.id}
      style={{
        border: '1px solid lightgray',
        borderRadius: '8px',
        padding: '10px',
        width: '250px',
        backgroundColor: '#f9f9f9',
        marginBottom: '10px',
      }}
    >
      <h3>{ticket.title}</h3>
      <h3>ID : {ticket.id}</h3>
      <p>Feature: {ticket.tag[0]}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
