import React from 'react';

const Wrisx = props => {
  return (
    <li
      onClick={() => props.onSelect(props.wrisx)}
      className={props.wrisx === props.selectedWrisx ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.wrisx)}
      >
        Delete
      </button>
      <div className="wrisx-element">
        <div className="badge">
          {props.wrisx.id}
        </div>
        <div className="title">
          {props.wrisx.title}
        </div>
        <div className="details">
          {props.wrisx.details}
        </div>
      </div>
    </li>
  );
};

export default Wrisx;
