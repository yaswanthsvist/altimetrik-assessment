const LabelWidget = ({ name, type, state, stateProp, handleChange }) => (
  <label>
    {name}:
    <input
      type={type || 'text'}
      name={stateProp}
      value={state[stateProp]}
      onChange={e => handleChange(e.target.value, stateProp)}
    />
  </label>
)
export default LabelWidget
