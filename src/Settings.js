import React, {component} from 'react';
import Modal from 'react-modal';

class Settings extends React.Component{

  constructor() {
      super();

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    render() {
      return (
        <div>
          <button onClick={this.openModal}>설정</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="설정 view"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>설정</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <ul>
                <li>Menu 01</li>
                <li>Menu 02</li>
                <li>Menu 03</li>
                <li>Menu 04</li>
            </ul>
            <form>
              <input />
              <div>음식추가</div>
            </form>
          </Modal>
        </div>
      );
    }

}

export default Settings;
