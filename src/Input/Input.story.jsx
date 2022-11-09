import { useState } from 'preact/hooks';

import Input from './index';
import InputFilled from './InputFilled';
import InputOutlined from './inputOutlined';

import { Variant } from '@vitebook/preact';
import { ControlsAddon } from '@vitebook/preact/addons';
import { eventCallback, EventsAddon } from '@vitebook/preact/addons'

function ButtonStory() {
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('Label');
  const [helperText, setHelperText] = useState('Ayuda');
  const [withCounter, setWithCounter] = useState(true);
  const [maxCharacters, setMaxCharacters] = useState(20);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Variant
        name="InputDefault"
      >
        <Input
          value={value}
          label={label}
          helperText={helperText}
          withCounter={withCounter}
          maxCharacters={maxCharacters}
          onChange={setValue}
        />
      </Variant>
      <Variant
        name="InputFilled"
      >
        <InputFilled
          value={value}
          label={label}
          helperText={helperText}
          withCounter={withCounter}
          maxCharacters={maxCharacters}
          onChange={setValue}
        />
      </Variant>
      <Variant
        name="InputOutlined"
      >
        <InputOutlined
          value={value}
          label={label}
          helperText={helperText}
          withCounter={withCounter}
          maxCharacters={maxCharacters}
          onChange={setValue}
        />
      </Variant>

      <ControlsAddon>
        <label className="mb-2">
          Value
          <input
            type="text"
            value={value}
            className="ml-4 p-2"
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <label className="mb-2">
          Label
          <input
            type="text"
            value={label}
            className="ml-4 p-2"
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label className="mb-2">
          Helper Text
          <input
            type="text"
            value={helperText}
            className="ml-4 p-2"
            onChange={(e) => setHelperText(e.target.value)}
          />
        </label>
        <label className="mb-2">
          With Counter
          <input
            type="checkbox"
            checked={withCounter}
            className="ml-4"
            onChange={(e) => setWithCounter(e.target.checked)}
          />
        </label>
        <label className="mb-2">
          Max Characters
          <input
            type="number"
            value={maxCharacters}
            className="ml-4 p-2"
            onChange={(e) => setMaxCharacters(+e.target.value)}
          />
        </label>
        <label className="mb-2">
          Disabled
          <input
            type="checkbox"
            checked={disabled}
            className="ml-4"
            onChange={(e) => setDisabled(e.target.checked)}
          />
        </label>
      </ControlsAddon>
      <EventsAddon />
    </>
  );
}

export default ButtonStory;