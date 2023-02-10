import '../styles/MyButton.css'

type MyButton = React.ComponentPropsWithoutRef<"button">

const MyBtton:React.FC<MyButton>= ({children, ...props}) => {
    return (
        <button {...props} className='myBtn'>
            {children}
        </button>
    );
}

export default MyBtton;
