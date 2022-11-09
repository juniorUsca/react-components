import { useState } from 'react';
import 'classnames'
import './InputDefault.scss'

function InputDefault({ value = '', label = 'Label', error=false, helperText = '', withCounter=true, maxCharacters=200000, onChange=()=>{} }) {
  const [counter, setCounter] = useState(value.length)

  const handleCounter = (e) => {
    console.log(maxCharacters)
    if (maxCharacters >= e.target.value.length) {
      onChange(e.target.value)
      setCounter(e.target.value.length)
    }
  }

  return (
    <div className="input-default">
      <label className="block relative h-14 w-72">
        <input
          type="text"
          className={classNames(`
            h-14 w-72 bg-transparent border-b border-[#0000006a] hover:border-[#000000dd] px-2 pt-3 pb-[0.875rem]
            focus:outline-none focus:border-b-2 focus:border-red-600 text-[#000000dd]
            focus:pb-[0.813rem]
            caret-red-600 selection:bg-red-300 selection:text-red-900
          `)}
          value={value}
          onChange={handleCounter}
        />
        <div className="absolute inset-0 px-2 flex items-center pointer-events-none" >
          <span
            className={classNames("text-[#00000098]", {
              "has-value": value,
            })}
          >
            {label} {error && <span className="text-red-600">*</span>}
          </span>
        </div>
      </label>
      {helperText &&
        <div
          className="text-[#00000098] text-xs px-2 mt-0.5 flex justify-between"
        >
          <span>{helperText}</span>
          {withCounter && !!maxCharacters && <span>{counter} / {maxCharacters}</span>}
        </div>
      }
    </div>
  );
}

export default InputDefault;