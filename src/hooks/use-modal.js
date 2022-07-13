import { useState } from 'react'

const useModal = () => {
	const [modal, setModal] = useState(false)

	const modalHandler = () => {
		setModal(!modal)
	}

	return [modal, modalHandler]
}

export default useModal
