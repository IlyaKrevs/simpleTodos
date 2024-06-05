import { CheckboxProps, makeStyles } from '@fluentui/react-components'
import React from 'react'
import { Checkbox } from '@fluentui/react-components'
import { Button } from '@fluentui/react-components'

export interface ITodosItem {
    id: number,
    title: string,
    isComplete: boolean,
    onChange?: (id: number) => void,
    onDelete?: (id: number) => void,
}


const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        border: '1px solid gray',
        borderRadius: '5px'
    }
})

export default function TodosItem(props: ITodosItem) {

    const styles = useStyles()

    const checkedStyle = !props.isComplete ? {} : {
        textDecoration: 'line-through',
        color: 'green',
    }

    return (
        <div className={styles.mainContainer}>
            <Checkbox
                label={props.title}
                checked={props.isComplete}
                style={checkedStyle}
                onChange={() => props.onChange && props.onChange(props.id)}
            />
            <Button
                onClick={() => props.onDelete && props.onDelete(props.id)}
            >
                Delete
            </Button>
        </div>
    )
}

