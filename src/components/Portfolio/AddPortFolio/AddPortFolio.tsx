import React, { SyntheticEvent } from 'react'

interface Props  {
    onPortFolioCreate: (e:SyntheticEvent)=>void;
    symbol: string;
}

const AddPortFolio = ({onPortFolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPortFolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type="submit">Add</button>
    </form>
  );
};

export default AddPortFolio;