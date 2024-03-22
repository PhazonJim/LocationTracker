import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ColumnGroupingTable from './Table';
import ootData from '../data/oot-locations.json'
import { Hub, LocationProps, LocationType, LocationList} from 'ootTypes';

const oot_data = ootData as Hub;

let getProps = (location_data: LocationType[]): {location_props: LocationProps, location_list: LocationList } => {
  let loc_props: LocationProps  = {
    locations: location_data
  }
  
  let location_list: LocationList = {
    l_list: loc_props.locations.map(element => element.vanilla)
  }
  return {location_props: loc_props, location_list: location_list}
};

export default function CollapseTableContainer() {
  return (
    <div>
      { Object.keys(oot_data).map((myKey: string) =>
        <Accordion key={myKey}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {myKey}
          </AccordionSummary>
          <AccordionDetails>
            <ColumnGroupingTable {...getProps(oot_data[myKey])}/>
          </AccordionDetails>
        </Accordion>
      )
      }
    </div>
  );
}