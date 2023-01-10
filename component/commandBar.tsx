// Example from https://beta.reactjs.org/learn

import { Input } from '@chakra-ui/react'
import { useState } from 'react'
// import styles from './converter.module.css'

export default function CommandBar() {
    const [command, setCommand] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCommand(event.target.value)
        console.log(event.target.value);
    }

    return (
        <Input placeholder='Command' onChange={handleChange} width="50%" />
    )
}

// export default function CommandApp() {
//     return <CommandBar />
// }