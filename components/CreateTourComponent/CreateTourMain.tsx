import React from 'react'
import CreateTourForm from './CreateTourForm'
import FindMoreTours from './FindMoreTours'

const CreateTourMain = () => {
  return (
    <div className="mx-3 mt-5 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:mx-auto">
      <FindMoreTours />
      <CreateTourForm />
    </div>
  )
}

export default CreateTourMain
