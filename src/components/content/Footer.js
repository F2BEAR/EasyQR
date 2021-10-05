import React from 'react'

const Footer = () => {
  return (
    <div className="h-32 w-screen flex flex-row justify-center items-center text-justify">
      <p>
        This site was made by{' '}
        <a
          href="https://facu.dev"
          rel="noopener noreferrer"
          target="_blank"
          className="text-accent"
        >
          Facundo Carbonel
        </a>{' '}
        and it's hosted on{' '}
        <a
          href="https://stratus.services"
          rel="noopener noreferrer"
          target="_blank"
          className="text-accent"
        >
          Stratus
        </a>
      </p>
    </div>
  )
}

export default Footer
