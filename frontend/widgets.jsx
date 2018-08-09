import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const panes = [
  {title: 'one', content: 'This is the short content one'},
  {title: 'two', content: 'This is a slightly longer pane two here that takes up two lines'},
  {title: 'three', content: 'This is the third and longest pane that is contained in this blue box and has three lines'}
];

const names = [
  'Adrian',
  'Barney',
  'Charlie',
  'Carlos',
  'Felix',
  'Jordan',
  'Justin',
  'Zoe'
];

function Root() {
  return (
    <div>
      <Clock />
      <Weather />
      <div className='interactive'>
        <Tabs panes={panes} />
        <Autocomplete names={names} />
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Root />, document.getElementById('main'));
});
