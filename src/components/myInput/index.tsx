import { Button, Input, makeStyles, useId } from '@fluentui/react-components'
import React, { useState } from 'react'


const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        maxWidth: '600px',
        gap: '20px',
    }
})

interface IMyInput {
    callback: (value: string) => void
}

export default function MyInput(props: IMyInput) {
    const inputId = useId('input')
    const styles = useStyles()

    const [value, setValue] = useState('')

    return (
        <div className={styles.mainContainer}>
            <Input value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                id={inputId}
                placeholder='Write your task'
            />
            <Button
                onClick={() => props.callback(value)}
            >Add</Button>
        </div>
    )
}

