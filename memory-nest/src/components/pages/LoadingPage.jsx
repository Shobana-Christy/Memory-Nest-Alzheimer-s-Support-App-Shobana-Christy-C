const LoadingPage = ({dataName}) => {
    let data = dataName || "data";

    return (
        <main className="main-content">
            <h1>Loading</h1>
            <div>Retrieving {data} from server ...</div>
        </main>
    )
}
export default LoadingPage;