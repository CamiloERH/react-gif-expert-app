import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async () => {
       const gifs = await getGifs('One punch');
       expect( gifs.length ).toBe( 10 );
    });
});