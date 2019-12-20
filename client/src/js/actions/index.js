
import { FETCH_DATA_CITIES } from "../constants/action-types";
import { FETCH_DATA_ITINERARIES } from "../constants/action-types";
import { FETCH_DATA_ITINERARIES_BY_ID_CITY } from "../constants/action-types";
import { FETCH_DATA_ACTIVITIES } from "../constants/action-types";
import { FETCH_DATA_ACTIVITIES_BY_ID_ITINERARY } from "../constants/action-types";
import { FETCH_DATA_USER_BY_EMAIL } from "../constants/action-types";
import { FETCH_IMG_BY_USER_ID } from "../constants/action-types";

import { SET_FILTER_TEXT } from "../constants/action-types";
import { SET_CITY_ID_SELECTED } from "../constants/action-types";
import { SET_ITINERARY_ID_SELECTED } from "../constants/action-types";
import { SET_USER_LOGGED } from "../constants/action-types";
import { SET_TOKEN } from "../constants/action-types";
import { SET_LOGOUT } from "../constants/action-types";

import { ADD_ITINERARY } from "../constants/action-types";

import { LEAVE_DATA_CITY } from "../constants/action-types";
import { LEAVE_DATA_USER } from "../constants/action-types";
import { LEAVE_DATA_ITINERARY } from "../constants/action-types";
import { LEAVE_DATA_COMMENT } from "../constants/action-types"
import { LEAVE_DATA_LIKE } from "../constants/action-types"

import { ADD_ARTICLE } from "../constants/action-types";
import { GET_TOKEN } from "../constants/action-types";


import { urlImages } from "../constants/action-types";


export const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
}

export function getUserImageByUserId(userID) {
  return function(dispatch) {
    return fetch(`http://localhost:5000/users/images/${userID}`) // ver aca
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en getUserImageById',error))
      .then(json => {
        dispatch({ type: FETCH_IMG_BY_USER_ID, payload: json });
      });
  };
}

export function getDataCities() {
  return function(dispatch) {
    return fetch("http://localhost:5000/cities/all")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en getDataCities',error))
      .then(json => {
        dispatch({ type: FETCH_DATA_CITIES, payload: json });
      });
  };
}

export function getDataItinerariesByIdCity(cityID) {
  return function(dispatch) {
    return fetch(`http://localhost:5000/cities/itineraries/${cityID}`) // ver aca
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en getDataItinerariesByIdCity',error))
      .then(json => {
        dispatch({ type: FETCH_DATA_ITINERARIES_BY_ID_CITY, payload: json });
      });
  };
}

//20191127 - clase
export function getDataActivities() {
  return function(dispatch) {
    return fetch("http://localhost:5000/cities/activities")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en getDataActivities',error))
      .then(json => {
        dispatch({ type: FETCH_DATA_ACTIVITIES, payload: json });
      });
  };
}

export function getDataActivitiesByIdItinerary(itID) {
  return function(dispatch) {
    return fetch(`http://localhost:5000/cities/activities/${itID}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en getDataActivitiesByIdItinerary',error))
      .then(json => {
        dispatch({ type: FETCH_DATA_ACTIVITIES_BY_ID_ITINERARY, payload: json });
      });
  };
}

export function getDataUserByEmail(email) {
  return function(dispatch) {
    return fetch(`http://localhost:5000/users/user/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en getDataUserByEmail',error))
      .then(json => {
        dispatch({ type: FETCH_DATA_USER_BY_EMAIL, payload: json });
      });
  };
}

export function setDataCity(city) {
  return function(dispatch) {
    return fetch(`http://localhost:5000/cities/addCity/${city}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en setDataCity',error))
      .then(json => {
        dispatch({ type: LEAVE_DATA_CITY, payload: json });
      });
  };
}

export function setDataUser(dataUser) {
  return function(dispatch) {
    return fetch('http://localhost:5000/users/addUser/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en setDataUser',error))
      .then(json => {
        dispatch({ type: LEAVE_DATA_USER, payload: json });
      });
  };
}

// itineraries
export function setDataItinerary(dataItinerary) {
  return function(dispatch) {
    return fetch('http://localhost:5000/users/addItinerary/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataItinerary),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en setDataItinerary',error))
      .then(json => {
        dispatch({ type: LEAVE_DATA_ITINERARY, payload: json });
      });
  };
}

// comments
export function setDataComment(dataComment) {
  return function(dispatch) {
    return fetch('http://localhost:5000/users/addUser/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataComment),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en setDataComment',error))
      .then(json => {
        dispatch({ type: LEAVE_DATA_COMMENT, payload: json });
      });
  };
}

// likes

export function setDataLike(dataLike) {
  return function(dispatch) {
    return fetch('http://localhost:5000/users/addUser/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataLike),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      .catch(error => console.error('Error en setDataLike',error))
      .then(json => {
        dispatch({ type: LEAVE_DATA_LIKE, payload: json });
      });
  };
}

export function getToken(login) {
  return function(dispatch) {
    return fetch('http://localhost:5000/login/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }         
        //this.setState({ isLoading: false });
        return response;
      })
      .then(response => response.json())
      
      .then(json => {
        dispatch({ type: GET_TOKEN, payload: json });
      })
      .catch(error => console.error('Error en getToken',error));
  };
}

export const setUserLogged = (payload) => {
  return { type: SET_USER_LOGGED, payload };
}

export const setToken = (payload) => {
  return {type: SET_TOKEN, payload };
}

export const setLogout = (payload) => {
  return { type: SET_LOGOUT, payload };
}

export const setFilterText2 = (payload) => {
  return { type: SET_FILTER_TEXT, payload };
}

export const setCityIdSelected = (payload) => {
  return { type: SET_CITY_ID_SELECTED, payload };
}

export const setItineraryIdSelected = (payload) => {
  return { type: SET_ITINERARY_ID_SELECTED, payload };
}

export const addItinerary = (payload) => {
  return { type: ADD_ITINERARY, payload };
}