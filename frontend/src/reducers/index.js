import {combineReducers} from 'redux'
import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

/* Reducer specifies the shape of the store */

function food (state = {}, action) {
  switch (action.type) {
    case ADD_RECIPE:
      const {recipe} = action

      return {
        ...state,
        [recipe.label]: recipe
      }

    default:
      return state
  }
}

const initialCalendarState = {

  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

/* reducer */
function calendar (state = initialCalendarState, action) {

  /* grab the day, recipe, and meal off of the action */
  const { day, recipe, meal } = action

  /* figure out how we want to modify the state */
  switch (action.type) {
    case ADD_RECIPE:
      return {
        /* state for all days will remain the same EXCEPT for the specific day */
        ...state,
        [day]: {
          /* state at the specific day will remain the same EXCEPT meal */
          ...state[day],
          [meal]: recipe.label,
        }
      }

    case REMOVE_FROM_CALENDAR:
      return {
        /* state for all days will remain the same EXCEPT For the specific day */
        ...state,
        [day]: {
          /* leave state alone for all meals on our day EXCEPT set the specific meal to null */
          ...state[day],
          [meal]: null,
        }
      }

    default:
      return state

  }
}

export default combineReducers({food, calendar})
