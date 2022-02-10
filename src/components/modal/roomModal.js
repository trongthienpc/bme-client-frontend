import React from 'react';
import { Modal } from 'react-bootstrap';

import RoomDetail from '../post/roomDetail';

const RoomModal = ({ lgShow, setLgShow, roomName, roomId }) => {


    return <div>
        <Modal
            size="xl"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {roomName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <RoomDetail roomId={roomId} />
            </Modal.Body>

        </Modal>
    </div>;
};

export default RoomModal;
