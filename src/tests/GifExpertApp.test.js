import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme'
import React from 'react';

describe('Prueba con el <GifExpertApp />', () => {
    
    test('debe de mostrar  <GifExpertApp /> correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    }),

    test('debe de mostrar una lista de categorias ', () => {

        const categories = ['One unch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories} />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length);

        
    })
    
    
})
