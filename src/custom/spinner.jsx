import { CircularProgress } from "@mui/material"

const Spinner = () => {
    return (
        <div className="overflow-hidden w-screen h-screen flex justify-center items-center">
            <CircularProgress color="success" />
        </div>
    )
}
export default Spinner