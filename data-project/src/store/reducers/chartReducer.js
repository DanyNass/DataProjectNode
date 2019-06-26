import { GET_DATA, DELETE_DATA, SET_FILTER_AREA, SET_FILTER_OBJECT, SET_HINT_POINT } from '../actions/types'

const initialState = {
  data: [],
  filter: null,
  point: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: [...state.data, { x: action.x, y: action.y }]
      }
    case DELETE_DATA:
      return {
        ...state,
        data: [],
        filter: null,
        point: null
      }
    case SET_FILTER_AREA:
      return {
        ...state,
        filter: action.area
      }
    case SET_FILTER_OBJECT:
      return {
        ...state,
        filter: {
          bottom: state.filter.bottom + (action.area.top - action.area.bottom),
          left: state.filter.left - (action.area.right - action.area.left),
          right: state.filter.right - (action.area.right - action.area.left),
          top: state.filter.top + (action.area.top - action.area.bottom)
        }
      }
    case SET_HINT_POINT:
      return {
        ...state,
        point: action.point
      }
    default:
      return state
  }
}
