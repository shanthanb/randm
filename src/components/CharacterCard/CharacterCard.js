import React from 'react';
import './CharacterCard.css'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// This style for modal

const customStyles = {
    content : {
      top : '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
const CharacterCard = ({chars}) => {
    const {name, gender, status,species, image, location, origin} = chars;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    
    
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
  
    }
   
    function closeModal(){
      setIsOpen(false);
    }


    return (
        <> 
        {/* This is for the modal */}
        <div  onClick={openModal} className=" card-container d-flex justify-content-center align-items-center ">
            <img src={image} className="image" alt="picture" />
           <strong className="name">{name}</strong>
           <div className="signal"></div>
           <p className="status"> <span></span>{status} - {species}</p>
        </div>
    
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* card container box */}
          <div className="modal-container">
                <div className="first-container d-flex">
                  <div className="img-container">
                      <img src={image} className="modal-img" alt="picture"/>
                  </div>
                  <div className="title-container">
                      <h5 className="modal-name">{name}</h5>
                      <div className="modal-signal"></div>
                        <p className="modal-status">
                            {status} - {species}
                        </p>
                  </div> 
                </div>
                <hr/>
                <div className="second-container d-flex">
                    <div className="first-box">
                        <p className="modal-bio">Gender</p>
                        <h6>{gender}</h6>
                    </div>
                    <div className="second-box">
                        <p  className="modal-bio">Location</p>
                        <h6>{location.name}</h6>
                    </div>
                </div>
                <br/>
                <div className="last-container d-flex">
                    <div className="first-box">
                        <p  className="modal-bio">Species</p>
                        <h6>{species}</h6>
                    </div>
                    <div  className="second-box">
                        <p  className="modal-bio">Origin</p>
                        <h6>{origin.name}</h6>
                    </div>
                </div>
          </div>
        </Modal>
        </>
    );
};

export default CharacterCard;