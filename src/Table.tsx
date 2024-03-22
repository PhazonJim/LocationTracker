import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import DropDownAutoComplete from './DropDownBox';
import TableRow from '@mui/material/TableRow';
import { LocationProps, LocationType, LocationList} from 'ootTypes';

interface Column {
  id: 'location' | 'vanilla' | 'actual';
  label: string;
  minWidth?: number;
  align?: "left" | "right";
}

const columns: Column[] = [
  { id: 'location', label: 'Location', minWidth: 200 },
  { id: 'vanilla', label: 'Vanilla Path', minWidth: 200 },
  {
    id: 'actual',
    label: 'Actual',
    minWidth: 300,
    align: 'left'  
  },
];

interface Data {
  location: string;
  vanilla: string;
  actual: JSX.Element
}

function createData(
  location: string,
  vanilla: string,
  props: LocationProps
): Data {
  return { location, vanilla, actual: <DropDownAutoComplete {...props}/> };
}

const rows = (locations: LocationProps): Data[] => {
  return locations.locations.map((location: LocationType) => {
    return createData(location.origin, location.vanilla, locations)
  })
};

export default function ColumnGroupingTable (location_props: LocationProps, location_list: LocationList) {
  return (
    <Paper sx={{ width: 1 }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{  minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows(location_props)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.location}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}