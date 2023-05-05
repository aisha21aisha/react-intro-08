import React, { useState } from 'react';

export default function Article(props) {
  const [clicked, selected] = useState(false);

  const onClick = () => {
    selected(!clicked);
  };

  return (
    <div>
      <div
        className="d-flex flex-row justify-content-between"
        onClick={onClick}
      >
        <div className="d-flex flex-column">
          <div className="style1">
            <p>
              By {props.author} on {props.date}
            </p>
          </div>
          <div className="style2">
            <h2>{props.title}</h2>
          </div>
          {clicked && (
            <div className="style17">
              <div className="style3">
                <p>{props.text}</p>
              </div>
              <div className="style16">
                <img
                  style={{ width: '200px', height: '200px', borderRadius: 10, margin: '10px' }}
                  src={props.image}
                />
              </div>
            </div>
          )}

          <div className="style3">
            <img
              style={{ width: '50px', height: '50px', borderRadius: 50, margin: '10px' }}
              src={props.image}
            />
            <p>
              By {props.author} on {props.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
