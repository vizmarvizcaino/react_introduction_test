import { render, screen } from '@testing-library/react';
import Contacto from '../page/Contacto';

describe('Contacto component', () => {
    test('la caja de texto se encuentra en el documento', () => {
        render(<Contacto />);
        const tittle = screen.getByText(/PENDIENTE POR DESARROLLAR/i);

        expect(tittle).toBeInTheDocument();
    });
})