import './dropdownlist.css'

const DropDownList = ({listOptions, labelDrop, handleDropChange, valueDrop,requiredDrop }) => {
    return (
      <div className="drop">
        <label>{labelDrop}</label>
        <select
          onChange={(event) => handleDropChange(event.target.value)}
          value={valueDrop}
          required={requiredDrop}
        >
          {listOptions.map((optionItem, indice) => (
            <option key={indice}>{optionItem}</option>
          ))}
        </select>
      </div>
    );
}

export default DropDownList