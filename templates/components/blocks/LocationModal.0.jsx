import { styled } from '@mui/material/styles';
import { Box, Modal } from '@mui/material/';
import { LocationList } from './LocationList';

const InnerModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));

export const LocationModal = ({ open, handleClose }) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <InnerModalBox>
      <LocationList {...{ handleClose }} />
    </InnerModalBox>
  </Modal>
);
