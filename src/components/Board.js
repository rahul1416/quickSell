import React from 'react';
import TicketCard from './TicketCard';
import addIcon from '../images/add.svg'; // Add icon
import menuIcon from '../images/3 dot menu.svg'; // Menu icon
import inProgressIcon from '../images/in-progress.svg'; // In Progress icon
import toDoIcon from '../images/To-do.svg'; // To Do icon
import backLogIcon from '../images/Backlog.svg'; // Backlog icon
import userIcon from '../images/user.svg';
import urgentIcon from '../images/SVG - Urgent Priority colour.svg'; // Urgent (Priority level 4)
import highIcon from '../images/Img - High Priority.svg'; // High (Priority level 3)
import mediumIcon from '../images/Img - Medium Priority.svg'; // Medium (Priority level 2)
import lowIcon from '../images/Img - Low Priority.svg'; // Low (Priority level 1)
import noPriorityIcon from '../images/No-priority.svg'; // No priority (Priority level 0)



const Board = ({ tickets, groupBy }) => {
  // Group tickets based on criteria
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = groupBy === 'status' ? ticket.status :
                     groupBy === 'user' ? ticket.userId :
                     ticket.priority;

    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  // Function to render status icons based on the group using a switch statement
  const renderStatusIcon = (group) => {
    // console.log(group)
    switch (group) {
      case 'In progress':
        return <img src={inProgressIcon} alt="In Progress" className="status-icon" />;
      case 'Todo':
        return <img src={toDoIcon} alt="To Do" className="status-icon" />;
      case 'Backlog':
        return <img src={backLogIcon} alt="Backlog" className="status-icon" />;
      case '4': 
        return <img src={urgentIcon} alt="Urgent" className="priority-icon" />;
      case '3': 
        return <img src={highIcon} alt="High Priority" className="priority-icon" />;
      case '2': 
        return <img src={mediumIcon} alt="Medium Priority" className="priority-icon" />;
      case '1': 
        return <img src={lowIcon} alt="Low Priority" className="priority-icon" />;
      case '0': 
        return <img src={noPriorityIcon} alt="No Priority" className="priority-icon" />;
      case 'usr-1':
      case 'usr-2':
      case 'usr-3':
      case 'usr-4':
      case 'usr-5':
      case 'usr-6':
      case 'usr-7':
      case 'usr-8':
      case 'usr-9':
        return <img src={userIcon} alt="" className="user-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="group-column">
          <div className="group-header">
            <div className="group-info">
              {/* Render the status icon */}
              {renderStatusIcon(group)}
              <span className="group-name">{group}</span>
              <span className="group-count">{groupedTickets[group].length}</span>
            </div>
            <div className="group-actions">
              <img src={addIcon} alt="add" className="action-icon" />
              <img src={menuIcon} alt="menu" className="action-icon" />
            </div>
          </div>
          <div className="ticket-list">
            {groupedTickets[group].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
