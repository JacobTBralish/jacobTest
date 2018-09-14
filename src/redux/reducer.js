import axios from 'axios';

const initialState = {
    states: [
        'AK',
        'AR',
        'AZ',
        'CA',
        'CO',
        'CT',
        'DE',
        'FL',
        'GA',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'VT',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY'
    ],
    chosenState: '',
    parks: [],
    parkCode: '',
    campgrounds: [],
    isLoading: false
}

const SET_STATES        = 'SET_STATES',
      CHOSEN_STATE      = 'CHOSEN_STATE',
      SET_PARKS         = 'SET_PARKS',
      SET_PARKCODE      = 'SET_PARKCODE',
      SET_CAMPGROUNDS   = 'SET_CAMPGROUNDS';


      export default function testReducer(state = initialState, action) {
        console.log(action.payload);
          switch(action.type) {
              
            //   case `${CHOSEN_STATE}_PENDING`:
            //     return {...state, isLoading: true}
              case CHOSEN_STATE:
                return {...state, chosenState: action.payload}
            //   case `${SET_PARKS}_PENDING`:
            //     return {...state, isLoading: true}
              case SET_PARKS:
                return {...state, parks: action.payload}
              case SET_PARKCODE:
                return {...state, parkCode: action.payload}
              default:
                return {...state}
          }
      }


    //   export function setStates() {
    //       return {
    //           type: SET_STATES,
    //           payload: axios.get('')

    //       }
    //   }
      export function chooseState(item) {
          console.log(item);
          
          return {
              type: CHOSEN_STATE,
              payload: item
          }
      }
      export function setParks(parks) {
          
          return {
              type: SET_PARKS,
              payload: parks
          }
      }
      export function setParkCode(code) {
          return {
              type: SET_PARKCODE,
              payload: code
          }
      }