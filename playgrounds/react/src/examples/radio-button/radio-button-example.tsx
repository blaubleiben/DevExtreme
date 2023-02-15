import {
  LabelTemplateProps,
  RadioButton,
  RadioTemplateProps,
} from '@devextreme/react';
import { useState } from 'react';

function CustomRadio({ checked }: RadioTemplateProps) {
  return <span>{checked ? '+' : '-'}</span>;
}

function CustomLabel({ label }: LabelTemplateProps) {
  return <b>{label}</b>;
}

const exampleValues = [
  { text: 'some value', number: 42 },
  { text: 'another value', number: 43 },
];

export function RadioButtonExample() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selectedValue, setSelectedValue] = useState(exampleValues[0]);
  return (
    <div className="example">
      <div className="example__title">Radio button example:</div>
      <div className="example__control">
        <div className="example__play-part">
          <span>Default templates, text label: </span>
          <RadioButton
            value="string label"
            checked={checked1}
            label="string label"
            onClick={() => setChecked1((current) => !current)}
          />
        </div>
        <div className="example__play-part">
          <span>Generic value: </span>
          <RadioButton
            name="example-values"
            value={exampleValues[0]}
            checked={selectedValue === exampleValues[0]}
            label={exampleValues[0].text}
            onSelected={() => setSelectedValue(exampleValues[0])}
          />
          <RadioButton
            name="example-values"
            value={exampleValues[1]}
            checked={selectedValue === exampleValues[1]}
            label={exampleValues[1].text}
            onSelected={() => setSelectedValue(exampleValues[1])}
          />
        </div>
        <div className="example__play-part">
          <span>Custom templates, component label: </span>
          <RadioButton
            value="component label"
            checked={checked2}
            label={<i>component label</i>}
            onClick={() => setChecked2((current) => !current)}
            radioTemplate={CustomRadio}
            labelTemplate={CustomLabel}
          />
        </div>
        <div className="example__play-part">
          <span>Uncontrolled mode: </span>
          <RadioButton
            value="uncontrolled 1"
            label="uncontrolled 1"
            name="uncontrolled"
            defaultChecked
          />
          <RadioButton
            value="uncontrolled 2"
            label="uncontrolled 2"
            name="uncontrolled"
          />
        </div>
      </div>
    </div>
  );
}