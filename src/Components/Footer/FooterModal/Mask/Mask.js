import React from 'react'
import InputMask from 'react-input-mask'

export default function Mask() {
    const [phone, setPhone] = React.useState('')
    return (
        <div className="m-2">
            <InputMask
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                mask="+7(999) 999-9999"
                maskChar=" "
            />
            <p>{phone}</p>
        </div>
    )
}
