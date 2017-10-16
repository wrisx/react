import React from 'react';

const EditWrisx = props => {
  if (props.selectedWrisx) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>id: </label>
            {props.addingWrisx
              ? <input
                  type="number"
                  name="id"
                  placeholder="id"
                  value={props.selectedWrisx.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedWrisx.id}
                </label>}
          </div>
          <div>
            <label>title: </label>
            <input
              name="title"
              value={props.selectedWrisx.title}
              placeholder="title"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>details: </label>
            <input
              name="details"
              value={props.selectedWrisx.details}
              placeholder="details"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditWrisx;
