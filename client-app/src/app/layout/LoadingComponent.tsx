import { Dimmer, Loader } from "semantic-ui-react";


interface Props {
    inverted?: boolean;
    context?: string;
}

export default function LoadingComponent({inverted = true, context = "Loading..."}:Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={context}/>
        </Dimmer>
    )
}