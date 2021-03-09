import { shallow } from 'enzyme'
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  

    const title = 'un titulo';
    const url = 'htts://localhost/img.jpg'

    const wrapper = shallow(<GifGridItem title= {title} url = {url}/>)
  
    test('debe de mostrar  <GifGridItem /> correctamente ', () => {
        expect( wrapper).toMatchSnapshot();
     }),

     test('debe de tener un parrafo con el title', () => {
         
        const p = wrapper.find('p')
        expect( p.text().trim()).toBe( title );
     }),

     test('debe de tner una imagen igual al url y alt de los props', () => {
         const img = wrapper.find('img');

         expect( img.prop('src')).toBe(url)
         expect( img.prop('alt')).toBe(title)

     }),

     test('debe de tener animate_fadeIn', () => {
         
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
     });
     
     
     
    
})
