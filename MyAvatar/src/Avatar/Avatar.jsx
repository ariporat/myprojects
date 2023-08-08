import './Avatar.css'
export default
function Avatar(props) {
    return (
        <div>
            <img className="circle-image" src={props.url} alt="Description of the image" />
        </div>
    );
}