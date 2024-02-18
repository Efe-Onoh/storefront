import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SortIcon from '@mui/icons-material/Sort';
import { Grid } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'SI.No', width: 70 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'deviceType', headerName: 'Device Type', width: 130 },
  {
    field: 'deviceName',
    headerName: 'Device Name',
    width: 130,
  },
  {
    field: 'dateIssued',
    headerName: 'Date Issued',
    sortable: true,
    width: 130,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'otp',
    headerName: 'One Time Passcode',
    width: 130,
  },
];

const rows = [
  { id: 1, status: 'Revoked', deviceType: 'Apple iOS', age: 35, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 2, status: 'Expired', deviceType: 'Apple iOS', age: 42, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 3, status: 'Revoked', deviceType: 'Apple iOS', age: 45, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 4, status: 'Expired', deviceType: 'Apple iOS', age: 16, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 5, status: 'Pending', deviceType: 'Apple iOS', age: null, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 6, status: 'Active', deviceType: 'Apple iOS', age: 150, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 7, status: 'Completed', deviceType: 'Apple iOS', age: 44, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 8, status: 'Completed', deviceType: 'Apple iOS', age: 36, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
  { id: 9, status: 'Completed', deviceType: 'Apple iOS', age: 65, deviceName:"spotlight-int-dev-01", dateIssued:"08/28/2023 22:52", otp:"TGS^$%ttUW" , },
];

export default function Table() {
  return (
    <Grid className="table" item>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        slots={{
            columnSortedDescendingIcon: ExpandMoreIcon,
            columnSortedAscendingIcon: ExpandLessIcon,
            columnUnsortedIcon: SortIcon,
          }}
      />
    </Grid>
  );
}