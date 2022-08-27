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
                return value;
            case "number":
            case "bigint":
                return value.toString();
            default:
                return "";
        }
    };

    return <div>{props.onFeedback ? props.onFeedback(props.value) : defaultFeedback(props.value)}</div>
}

const FormField = <T,>(props: FormFieldProps<T>) => {
    return (<div>
        <Label {...props} />
        {props.children}
        <Feedback {...props} />
    </div>)
};

export const useFormFields = <String, >() => {
    return { FormField };
};
