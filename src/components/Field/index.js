import './field.css'

const Field = ({typeInput, valueInput,placeHolderInput,labelInput,handleInputChange, requiredInput}) => {
    return (
      <div className="field">
        <label>{labelInput}</label>
        <input
          required={requiredInput}
          type={typeInput}
          value={valueInput}
          placeholder={placeHolderInput}
          onChange={(event) => handleInputChange(event.target.value)}
        />
      </div>
    );

}

export default Field