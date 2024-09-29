import React from 'react';
import './TicketCard.css'; // Style the card in a separate file

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.tag.join(', ')}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
