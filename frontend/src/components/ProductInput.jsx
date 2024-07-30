import React from 'react';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';

const ProductInput = ({ inputText, setInputText, handleAddClick }) => (
  <div>
    <TextField
      style={{ width: '300px' }}
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Add product..."
    />
    <Button style={{ width: '100px' }} onClick={handleAddClick}>
      Add
    </Button>
  </div>
);

export default ProductInput;