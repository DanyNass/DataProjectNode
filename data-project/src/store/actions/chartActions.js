import { GET_DATA, DELETE_DATA, SET_FILTER, SET_FILTER_AREA, SET_FILTER_OBJECT, SET_HINT_POINT } from './types'


export const getData = (data) => {
  // console.log(data);
  return {
    type: GET_DATA,
    x: data.tempo,
    y: data.valore
  }
}


export const deleteData = () => ({ type: DELETE_DATA })

export const setFilterArea = (area) => ({
  type: SET_FILTER_AREA,
  area
})

export const setFilterObject = (area) => ({
  type: SET_FILTER_OBJECT,
  area
})

export const setHintPoint = (point) => ({
  type: SET_HINT_POINT,
  point
}) 

export const getDataSocket = socket => dispatch => {
  socket.on('data from server', res => {
    // console.log(res)
    dispatch(getData(res))
  })
}