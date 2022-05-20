import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const options = ['Динамо Мн', 'Динамо Бр', 'Молодечно']

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {

        onChange,
        ...restProps
    }
) => {

    const [value, onChangeOption] = useState(options[0])

    const mappedOptions: any[] = options ? options.map((o, i) => {
        return <option key={o + '-' + i} value={o}>{o}</option>
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
            value={value}
        </select>
    )
}

export default SuperSelect
