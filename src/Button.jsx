const Button = ({ text, number }) => {
    return (
        <button className='btn'>{text} <span>{number}</span> </button>
    )
}

export default Button;