import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import ModalStyle from "./modal.style";
import SignUpForm from "../../organisms/SignUpForm";
import LoginForm from "../../organisms/LoginForm";
import AddPost from "../../organisms/AddPost";
import EditPost from "../../organisms/EditPost";
import EditUserForm from "../../organisms/EditUser/EditUser";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "360px",
  },
};

const CustomModal = ({ openModal, userClick, setUserClick, Children }) => {
  const [component, setComponent] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    switch (userClick) {
      case "sign-up":
        setComponent(<SignUpForm setUserClick={setUserClick} />);
        break;
      case "log-in":
        setComponent(<LoginForm setUserClick={setUserClick}  />);
        break;
      case "add-post":
        setComponent(<AddPost setUserClick={setUserClick}  />);
        break;
      case "edit-post":
        setComponent(<EditPost />);
        break;
      case "edit-user":
        setComponent(<EditUserForm />);
        break;
      default:
        break;
    }

    setModalIsOpen(openModal);
  }, [openModal]);

  function closeModal() {
    setUserClick("");
    setModalIsOpen(false);
  }

  return (
    <ModalStyle>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {component}
      </Modal>
    </ModalStyle>
  );
};

CustomModal.propTypes = {
  children: PropTypes.node,
};

CustomModal.defaultProps = {};

export default CustomModal;
