import { makeStyles } from '@fluentui/react-components'
import React from 'react'
import { Field, Radio, RadioGroup } from '@fluentui/react-components'

export type myTab = 'All' | 'Active' | 'Completed'

export interface ITabs {
    tabVar: myTab[],
    currentTab: myTab,
    callback: (tab: myTab) => void,
}

export default function Tabs(props: ITabs) {
    return (
        <Field label='Show'>
            <RadioGroup layout='horizontal-stacked'
                defaultValue={props.tabVar[0]}
            >
                {props.tabVar.map((item, index) => <Radio key={index}
                    value={item}
                    label={item}
                    onChange={() => props.callback(item)}
                />
                )}
            </RadioGroup>

        </Field>
    )
}


