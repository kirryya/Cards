import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}
const options = ['Динамо Мн', 'Динамо Бр', 'Молодечно']

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        onChange,
        ...restProps
    }
) => {
    const [value, onChangeOption] = useState(options[0])

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                onChange={onChangeCallback}
                value={o}
                checked={o === value}
                name={name}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
