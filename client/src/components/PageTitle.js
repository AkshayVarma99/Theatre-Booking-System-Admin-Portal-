import React from 'react'



// component receives title prop and returns an html h1 element with className text-xl and uppercase and title prop as content
function PageTitle({title}) {
  return (
    <h1 className='text-xl uppercase'>
        {title}
    </h1>

  )
}

export default PageTitle