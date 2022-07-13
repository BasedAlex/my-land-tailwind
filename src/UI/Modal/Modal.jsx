import React from 'react'
import ReactDOM from 'react-dom'

/* eslint-disable react/prop-types */

const Backdrop = (props) => {
    return (
        <div
            className="fixed bg-black opacity-50 w-full h-screen top-0	left-0 z-20"
            onClick={props.onClick}
        />
    )
}

const ModalOverlay = (props) => {
    return (
        <div className="fixed top-2/4 left-2/4 w-240 -translate-y-2/4 -translate-x-2/4 origin-center object-center	max-w-full min-h-auto max-h-full bg-white shadow shadow-black z-30 rounded ">
            <div>{props.children}</div>
        </div>
    )
}

const overlay = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />,
                overlay
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onClick={props.onClick}>
                    {props.children}
                </ModalOverlay>,
                overlay
            )}
        </>
    )
}

export default Modal
