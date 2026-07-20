import TypeText from '../components/TypeText'

interface LoadingProps{
    isLoading: boolean
}

export default function LoadingPage({
    isLoading
}: LoadingProps){
    return(
        <>
            {
                isLoading && (
                    <TypeText/>
                )
            }
        </>
    );
}