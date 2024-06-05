import React, { useCallback, useState } from 'react'
import TodosItem from '../../components/todos-item'
import { ITodosItem } from '../../components/todos-item'
import { Button, makeStyles } from '@fluentui/react-components'
import { myCounter } from '../../my-fnc'
import TodoList from '../../components/todo-list'
import Tabs, { myTab } from '../../components/tabs'
import MyInput from '../../components/myInput'

const useStyles = makeStyles({
    mainContainer: {
        padding: '200px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
    },
    titleContainer: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleItem: {
        fontSize: '30px',
    },
    itemsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    },

})


export default function TodosContainer() {

    const styles = useStyles()

    const idCount = myCounter()

    const initValue: ITodosItem[] = [
        { id: idCount(), isComplete: false, title: 'Test task', },
        { id: idCount(), isComplete: true, title: 'Fine code', },
        { id: idCount(), isComplete: false, title: 'Test coverage', },
    ]

    const [todos, setTodos] = useState(initValue)

    const tabVar: myTab[] = ['All', 'Active', 'Completed']
    const [tab, setTab] = useState<myTab>(tabVar[0])

    const callbacks = {
        onChangeHandler: useCallback((id: number) => {
            setTodos(prev => prev.map(item => item.id === id ? { ...item, isComplete: !item.isComplete } : item))
        }, []),

        onDeleteHandler: useCallback((id: number) => {
            setTodos(prev => prev.filter(item => item.id !== id))
        }, []),
        onChangeTab: useCallback((tab: myTab) => {
            setTab(tab)
        }, []),

        onAddNewTask: useCallback((value: string) => {

            const newTask: ITodosItem = {
                id: idCount(),
                isComplete: false,
                title: value,
            }

            setTodos(prev => [newTask, ...prev])
        }, []),
        onClearCompleted: useCallback(() => {
            setTodos(prev => prev.filter(item => item.isComplete !== true))
        }, [])
    }


    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.titleItem}>
                    Todos:
                </p>
                <Tabs currentTab={tab}
                    callback={callbacks.onChangeTab}
                    tabVar={tabVar}
                />
            </div>
            <MyInput callback={callbacks.onAddNewTask} />
            <div className={styles.itemsContainer}>
                <TodoList list={todos} currentTab={tab} callbacks={callbacks} />
            </div>
            <Button
                onClick={() => callbacks.onClearCompleted()}
            >Clear completed</Button>
        </div>
    )
}
