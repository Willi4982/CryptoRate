import '../styles/MyInput.css'

type MyInput = React.ComponentPropsWithoutRef<"input">

const MyInput:React.FC<MyInput> = (props) => {
    return (
        <input className='myInput' {...props} />
    );
}

export default MyInput;
