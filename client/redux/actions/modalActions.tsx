export const openModal = () => {
  return ({
    type: "modal",
    open: true
  })
}

export const closeModal = () => {
  return ({
    type: "modal",
    open: false
  })
}