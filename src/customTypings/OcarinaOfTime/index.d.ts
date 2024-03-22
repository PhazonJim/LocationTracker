declare module 'ootTypes' {
    type LocationType = {
        origin: string;
        vanilla: string;
    }

    interface LocationProps {
        locations: LocationType[]
    }
    
    interface LocationList {
        l_list: string[]
    }

    interface Hub {
        [key: string]: LocationType[]
      }
  }
  
  module.exports = {
    LocationProps,
    LocationType,
    Hub
  };


  
