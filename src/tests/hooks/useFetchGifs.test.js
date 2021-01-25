import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('one punch') );
        const { data, loading } = result.current;
        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one punch') );
        await waitForNextUpdate();
        const { data, loading } = result.current;
    });
})