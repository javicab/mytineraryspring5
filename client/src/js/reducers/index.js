import { ADD_ARTICLE } from "../constants/action-types";
import { FETCH_DATA_CITIES } from "../constants/action-types";
import { FETCH_DATA_ITINERARIES } from "../constants/action-types";
import { FETCH_DATA_ITINERARIES_BY_ID_CITY } from "../constants/action-types";
import { FETCH_DATA_ACTIVITIES } from "../constants/action-types";
import { FETCH_DATA_ACTIVITIES_BY_ID_ITINERARY } from "../constants/action-types";

import { LEAVE_DATA_CITY } from "../constants/action-types";
import { LEAVE_DATA_USER } from "../constants/action-types";
import { LEAVE_DATA_ITINERARY } from "../constants/action-types";
import { LEAVE_DATA_COMMENT } from "../constants/action-types";
import { LEAVE_DATA_LIKE } from "../constants/action-types";

import { SET_FILTER_TEXT } from "../constants/action-types";
import { SET_CITY_ID_SELECTED } from "../constants/action-types";
import { SET_ITINERARY_ID_SELECTED } from "../constants/action-types";

import { SET_ON_FILTER_TEXT_CHANGE } from "../constants/action-types";
import { GET_TOKEN } from "../constants/action-types";
import { SET_USER_LOGGED } from "../constants/action-types";

import { ADD_ITINERARY } from "../constants/action-types";


const initialState = {
  filterText2: [""],
  onFilterText2Change: [""],
  remoteCities: [],
  remoteItineraries: [],
  remoteActivities: [],
  remoteUser: [],
  remoteComment: [],
  remoteLike: [],
  cityIdSelected: [],
  city: [{}],
  itineraryIdSelected: [],
  itinerary: [],
  comment: [],
  activity: [],
  user: [{}],
  token: [""],
  userLogged: [],
  articles: []
};

function rootReducer(state = initialState, action) {
  switch(action.type){

    case SET_FILTER_TEXT: {
      console.log(state.filterText2.concat(action.payload))
      return Object.assign({}, state, {
        filterText2: state.filterText2.concat(action.payload)
      });
    }
    
    case SET_ON_FILTER_TEXT_CHANGE: {
      return Object.assign({}, state, {
        onFilterText2Change: state.filterText2.concat(action.payload)
      });
    }
   
    case FETCH_DATA_CITIES: {
      return Object.assign({}, state, {
        remoteCities: state.remoteCities.concat(action.payload)
      });
    }

    case FETCH_DATA_ITINERARIES: {
      console.log('FETCH_DATA_ITINERARIES')
      return Object.assign({}, state, {
        remoteItineraries: state.remoteItineraries.concat(action.payload)
      });
    }

    case FETCH_DATA_ITINERARIES_BY_ID_CITY: {
      console.log('FETCH_DATA_ITINERARIES_BY_ID_CITY')
      return Object.assign({}, state, {
        remoteItineraries: state.remoteItineraries.concat(action.payload)
      });
    }

    

    // 20191127 - clase
    case FETCH_DATA_ACTIVITIES: {
      console.log('FETCH_DATA_ACTIVITIES')
      return Object.assign({}, state, {
        remoteActivities: state.remoteActivities.concat(action.payload)
      });
    }

    case FETCH_DATA_ACTIVITIES_BY_ID_ITINERARY: {
      console.log('FETCH_DATA_ACTIVITIES_BY_ID_ITINERARY')
      return Object.assign({}, state, {
        remoteActivities: state.remoteActivities.concat(action.payload)
      });
    }

    // 20191128 - casa
    case SET_CITY_ID_SELECTED: {
      console.log('SET_CITY_ID_SELECTED')
      return Object.assign({}, state, {
        cityIdSelected: state.cityIdSelected.concat(action.payload)
      });
    }

    case SET_ITINERARY_ID_SELECTED: {
      console.log('SET_ITINERARY_ID_SELECTED')
      return Object.assign({}, state, {
        itineraryIdSelected: state.itineraryIdSelected.concat(action.payload)
      });
    }
    
    case LEAVE_DATA_CITY: {
      return Object.assign({}, state, {
        remoteCity: state.remoteCity.concat(action.payload)
      });
    }

    case LEAVE_DATA_USER: {
      console.log('LEAVE_DATA_USER')
      console.log(action.payload)
      return Object.assign({}, state, {
        user: state.user.concat(action.payload)
      });
    }

    //itinerary
    case LEAVE_DATA_ITINERARY: {
      console.log('LEAVE_DATA_ITINERARY')
      console.log(action.payload)
      return Object.assign({}, state, {
        itinerary: state.itinerary.concat(action.payload)
      });
    }


    // comment
    case LEAVE_DATA_COMMENT: {
      console.log('LEAVE_DATA_COMMENT')
      console.log(action.payload)
      return Object.assign({}, state, {
        comment: state.comment.concat(action.payload)
      });
    }

    // like
    case LEAVE_DATA_LIKE: {
      console.log('LEAVE_DATA_LIKE')
      console.log(action.payload)
      return Object.assign({}, state, {
        remoteLike: state.remoteLike.concat(action.payload)
      });
    }

    case GET_TOKEN: {
      console.log('GET_TOKEN')
      console.log(action.payload)
      return Object.assign({}, state, {
        token: state.token.concat(action.payload)
      });
    }

    case SET_USER_LOGGED: {
      console.log('SET_USER_LOGGED')
      console.log(action.payload)
      return Object.assign({}, state, {
        userLogged: state.userLogged.concat(action.payload)
      });
    }

    case ADD_ARTICLE: {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }

    case ADD_ITINERARY: {
      return Object.assign({}, state, {
        itinerary: state.itinerary.concat(action.payload)
      });
    }
  
    default: return state;

  }

}

export default rootReducer;
