import React from 'react'
import Alert from '@mui/material/Alert';

import Stack from '@mui/material/Stack';
const AlertC = (props) => {
  return (
    <div>
<div >
<Stack sx={{ width: '100%' }} spacing={2}>
<Alert variant="outlined" severity="success">
{props.message}
</Alert>
   </Stack>
</div>

    </div>
  )
}

export default AlertC