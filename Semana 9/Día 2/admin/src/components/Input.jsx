

const Input = ({estado,texto,manejarValor}) => {
  return (
    <div className="nm-3">
      <label htmlFor={texto}>{texto}</label>
      <input
       type="text"
        placeholder={`Ingrese ${texto}`}
        value={estado[texto]}
        onChange={manejarValor}
        name={texto}
        id={texto}
        className="form-control"
      />
    </div>  
    )
}

export default Input
