import { useState } from "react";

export type FormFieldProps<T> = {
    value: T,
    id: string,
    label?: string,
    children?: React.ReactNode,
    onFeedback?: (value: T) => string;
};

const Label = <T,>(props: FormFieldProps<T>) => {
    return <>
        <label htmlFor={props.id}>{props.label ?? props.id}</label> :&nbsp;
    </>
};

const Feedback = <T,>(props: FormFieldProps<T>) => {
    const defaultFeedback = (value: T) => {
        switch (typeof value) {
            case "string":
                return `S: ${value.toString().length}`;
            case "number":
                return `N: ${value.toString().length}`;
            case "boolean":
                return `B: ${value.toString()}`;
            // case "object":
            //     return JSON.stringify(value);
            default:
                return "";
        }
    };

    return <div>{props.onFeedback ? props.onFeedback(props.value) : defaultFeedback(props.value)}</div>
}

export const FormField = <T,>(props: FormFieldProps<T>) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        console.log('focus');
        setFocused(true);
    };

    const handleBlur = () => {
        console.log('blur');
        setFocused(false);
    };

    return (<div onFocus={handleFocus} onBlur={handleBlur}>
        <Label {...props} />
        {props.children}
        {focused &&
            <Feedback {...props} />
        }
    </div>)
};

export const useFormFields = () => {
    return { FormField };
};
