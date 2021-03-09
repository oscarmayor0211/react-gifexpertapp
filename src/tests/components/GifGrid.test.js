import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");
describe('Prueba con el <GifGrid />', () => {

    const category = 'One Punch'
    test('debe de mostrar  <GifGrid /> correctamente', () => {
        
        useFetchGifs.mockReturnValue({

            data: [],
            loading : true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper).toMatchSnapshot();
    }),

    test('Debe de mostrar items cuando se cargan imagenes al useFetchGifs ', () => {

        const gifs = [{
            id : 'ABC',
            url :'https://localhost/cualquier/cosa.jpg',
            title : 'cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({

            data: gifs,
            loading : false
        })
        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
