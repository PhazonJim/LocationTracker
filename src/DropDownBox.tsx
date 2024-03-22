import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { LocationProps, LocationType } from 'ootTypes';

export default function DropDownAutoComplete(locations: LocationProps) {
  return (
    <Autocomplete
      disablePortal
      id="auto-complete-select"
      options={options(locations)}
      sx={{ width: "auto" }}
      renderInput={(params) => <TextField {...params} label="Undiscovered" />}
    />
  );
}

const options = (locations: LocationProps) => {
  return locations.locations.map((location: LocationType) => {
    return {label: location.vanilla}
  })
}