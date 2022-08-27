import { ChangeEvent, useState } from "react";
import { useFormFields } from "./useFormElementDecorators";

export type SuperInputProps = {
    value: string;
    onChange: (value: string) => void;
    id: string;
    label?: string;
}

export const SuperInput: React.FC<SuperInputProps> = (props) => {
    const { FormField } = useFormFields();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    const handleFeedback = (value: string) => {
        return `ez_${value}_az`;
    }
    return (
        <FormField id={props.id} label={props.label} value={props.value} onFeedback={undefined} >
            <input id={props.id} type='text' value={props.value} onChange={handleChange} />
        </FormField>
    )
};