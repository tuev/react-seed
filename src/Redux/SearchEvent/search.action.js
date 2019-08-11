export const chooseItemAction = item => ({
  type: 'CHOOSE_EVENT',
  payload: item
})

export const getEvent = (dataFromBe = []) => ({
  type: 'GET_EVENT',
  payload: dataFromBe
})
