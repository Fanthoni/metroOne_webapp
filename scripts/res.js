const form = document.querySelector('.form')

const addNewReservation = () => {
    const reservation = {
      name: form.name.value,
      time: form.time.value,
      groupSize: form.groupSize.value,            
    }
      db.collection('Reservations').add(reservation)
      .then(() => {
      // Reset the form values
      form.name.value = "",
      form.time.value = "",
      form.groupSize.value = ""      
  
      alert('Your reservation has been successfully saved')
      })      
  }

form.addEventListener('submit', e => {
    e.preventDefault()
    addNewReservation()
  })
