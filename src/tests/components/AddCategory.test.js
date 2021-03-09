import { shallow } from "enzyme"
import React from 'react'
import { AddCategory } from '../../components/AddCategory'
describe('Pruebas en <AddCategory />', () => {
    const setCategories =jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />)

    })
    test('debe de mostrarse correctamente ', () => {
        
 
        expect(wrapper).toMatchSnapshot();
    }),

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input') ;

        const value = 'Hola mundo'
        input.simulate('change', { target : { value } });
        
    }),

    test('No debe de postear la informacion submit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategories).not.toHaveBeenCalled();
    })
    
    
    test('Debe de llamar el setCategories y limpiar la caja de texto ', () => {
        const input = wrapper.find('input') ;

        const value = 'Hola mundo'
        input.simulate('change', { target : { value } });

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategories).toHaveBeenCalled();
        expect( setCategories).toHaveBeenCalledWith( expect.any(Function));

        expect( input.prop('value')).toBe('');
    })
    
})
 