import { render, screen } from '@testing-library/react';
import SobreMi from '../page/Sobre-Mi';

describe('Contacto component', () => {
    test('la caja de texto se encuentra en el documento', () => {
        render(<SobreMi />);
        const listItem = screen.getByText(/Desarrollador web y diseñador web/i)
        expect(listItem).toBeInTheDocument();
    });
})