import { render, screen } from '@testing-library/react';
import Message from '../Message';

describe('Message', () => {
    it('renders without crashing', () => {
        render(<Message />);
        expect(screen.getByRole('heading', { name: /Welcome to BudgetBuddy/i })).toBeInTheDocument();
    });
});
