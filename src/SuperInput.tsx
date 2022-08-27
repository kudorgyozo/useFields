import { ChangeEvent } from "react";
import { FormField } from "./useFormElementDecorators";

export type SuperInputProps = {
    value: string;
    onChange: (value: string) => void;

    // maybe these two don't belong here
    id: string;
    label?: string;
}

export const SuperInput: React.FC<SuperInputProps> = (props) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    const handleFeedback = (value: string) => {
        return `characters: ${value.length}/500`;
    }
    return (
        <FormField id={props.id} label={props.label} value={props.value} onFeedback={handleFeedback} >
            <input id={props.id} type='text' value={props.value} onChange={handleChange} />
        </FormField>
    )
};