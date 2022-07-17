import { useState } from 'react'

const useModal = () => {
    const [modalActive, setModalActive] = useState(false)

    const modalHandler = () => {
        setModalActive(!modalActive)
    }

    return [modalActive, modalHandler]
}

export default useModal
