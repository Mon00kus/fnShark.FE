type Props = {
    isLoading? : boolean;
};

const Spinner = ({isLoading = true} : Props) =>{
    return (
        <div id="loading-spinner">            
        </div>
    );
};

export default Spinner;