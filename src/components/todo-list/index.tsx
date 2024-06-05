import React, { useMemo } from 'react'
import TodosItem, { ITodosItem } from '../todos-item'
import { myTab } from '../tabs'


interface ITodoList {
    list: ITodosItem[],
    currentTab: myTab,
    callbacks: {
        onChangeHandler: (id: number) => void,
        onDeleteHandler: (id: number) => void,
    }
}

export default function TodoList(props: ITodoList) {

    const showTodos = useMemo(() => {
        if (props.currentTab === 'Active') {
            return props.list.filter(item => item.isComplete === false)
        } else if (props.currentTab === 'Completed') {
            return props.list.filter(item => item.isComplete === true)
        } else {
            return props.list
        }
    }, [props.list, props.currentTab])


    return (
        <>
            {showTodos.map((item, index) => <TodosItem key={index}
                id={item.id}
                isComplete={item.isComplete}
                title={item.title}
                onChange={props.callbacks.onChangeHandler}
                onDelete={props.callbacks.onDeleteHandler}
            />)}
        </>
    )
}
