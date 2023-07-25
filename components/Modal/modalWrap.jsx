import React from 'react'

export default function ModalWrap({isOpen, setClose, children, position}) {
  return (
    <div className="absolute top-0">
      {isOpen && (
        <>
          <div className="absolute z-40 " style={{
            top: position.top,
            left: position.left
          }}>
          {children}
          </div>
          <div
            className="absolute w-[100vw] h-[100vh] z-20 top-0"
            onClick={() => setClose(false)}
          ></div>
        </>
      )}
    </div>
  )
}
