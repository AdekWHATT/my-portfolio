import React, { useState, useEffect } from 'react';

function ModalCallback() {
  // Declare a state variable called "showModal" with a default value of false
  const [showModal, setShowModal] = useState(false);

  // Declare a state variable called "showFade" with a default value of false
  const [showFade, setShowFade] = useState(false);

  // Declare a function to toggle the value of "showModal" between true and false
  const toggleModal = () => {
    setShowModal(!showModal);
    setShowFade(!showFade);
  };

  // Add a click event listener to the fade layer that closes the modal and the fade layer when it is clicked
  useEffect(() => {
    const handleClick = () => {
      setShowModal(false);
      setShowFade(false);
    };

    if (showFade) {
      const fadeLayer = document.querySelector('.fade-layer');
      fadeLayer.addEventListener('click', handleClick);

      // Remove the event listener when the component unmounts
      return () => {
        fadeLayer.removeEventListener('click', handleClick);
      };
    }
  }, [showFade]);

  return (
    <div>
      {/* Render the button to open the modal */}
      <button onClick={toggleModal}>Open Modal</button>

      {/* Render the modal window */}
      {showModal && (
        <div
          className="modal-window"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            border: '1px solid black',
            padding: '20px',
            zIndex: 9999,
          }}
        >
          <h1>Modal Window</h1>
          <p>Click on the fade layer to close the modal.</p>
        </div>
      )}

      {/* Render the fade layer */}
      {showFade && (
        <div
          className="fade-layer"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: 9998,
          }}
        ></div>
      )}
    </div>
  );
}

export default ModalCallback;
