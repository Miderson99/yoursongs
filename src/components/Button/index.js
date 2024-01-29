import './button.css'

const Button = ({labelButton='Adicionar'}) => {
    return (
      <div className='button'>
        <button>{labelButton}</button>
      </div>
    );
}

export default Button