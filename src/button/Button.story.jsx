import { useState } from 'preact/hooks';

import Button from './index';

import { Variant } from '@vitebook/preact';
import { ControlsAddon } from '@vitebook/preact/addons';
import { eventCallback, EventsAddon } from '@vitebook/preact/addons'

function ButtonStory() {
  const [title, setTitle] = useState('Click');
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <Variant
        name="Default"
        description="The default button."
      >
        <Button
          onClick={eventCallback}
          disabled={disabled}
        >
          {title}
        </Button>
      </Variant>

      <Variant name="Disabled" description="The disabled button.">
        <Button disabled />
      </Variant>

      <ControlsAddon>
        <label className="mb-2">
          Title
          <input
            type="text"
            value={title}
            className="ml-4 p-2"
            onChange={(e) => setTitle(e.target.value)}
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