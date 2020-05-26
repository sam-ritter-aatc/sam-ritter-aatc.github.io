import React from 'react';
import ReactDOM from 'react-dom';
import SwitchableTextInput from "../SwitchableTextInput";
import {render, cleanup} from '@testing-library/react';
// import '@testing-library/jest-dom';
//
//
// describe('SwitchableTextInput tests', () => {
//     afterEach(cleanup)
//
//     it('renders without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<SwitchableTextInput/>, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });
//
//     it('renders label', () => {
//         const {getByTestId} = render(<SwitchableTextInput label="Do the Thing: "/>);
//         const element = getByTestId('switchable-text-input');
//         expect(element).toContainHTML('<label>Do the Thing: </label>');
//     })
//
//     it.skip('renders text input', async () => {
//         const {getByTestId} = render(<SwitchableTextInput label="Blurp: " value="wilma" inputFlag={true} />);
//         const blob = getByTestId('switchable-text-input');
//         await expect(blob).toContainHTML('<input class="form-control" type="text" value="wilma" />');
//     })
//
//     it('shows text value - inputFlag=false', () => {
//         const {getByTestId} = render(<SwitchableTextInput label="Do the Thing: " value="fred" inputFlag={false}/>);
//         const element = getByTestId('switchable-text-input');
//         expect(element).toContainHTML('<div data-testid="switchable-text-input"><label>Do the Thing: </label>fred</div>');
//     });
//
// })
