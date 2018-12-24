/* eslint no-console: 0 */
import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.less';
import ReactDOM from 'react-dom';

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i} test={i}>
      {i.toString(36) + i}
    </Option>,
  );
}

class Test extends React.Component {
  state = {
    value: [],
  };

  onChange = (value, option) => {
    console.log(`changed ${value}`, option);
    this.setState({
      value,
    });
  };

  onSelect = (value, option) => {
    console.log(`selected ${value}`, option.props);
  };

  onDeselect = (value, option) => {
    console.log(`deselected ${value}`, option);
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h2>Custom control render select</h2>

        <div>
          <Select
            placeholder="placeholder"
            multiple
            dropdownMenuStyle={{ maxHeight: 200 }}
            style={{ width: 500 }}
            value={value}
            onChange={this.onChange}
            onSelect={this.onSelect}
            onDeselect={this.onDeselect}
            tokenSeparators={[' ', ',']}
            onFocus={() => console.log('focus')}
            onBlur={() => console.log('blur')}
            controlRender={selectedValue => {
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              return <div tabIndex={0}>{JSON.stringify(selectedValue)}</div>;
            }}
            showSearch={false}
          >
            {children}
          </Select>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
