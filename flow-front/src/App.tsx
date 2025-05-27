import { Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Button } from '@mui/material';
import { CreateProcessPage } from './pages/CreateProcessPage';
import { SelectProcessPage } from './pages/SelectProcessPage';

export function App() {
    return (
        <Container maxWidth="md">
            <AppBar position="static" sx={{ mb: 2 }}>
                <Toolbar>
                    <Button color="inherit" component={Link} to="/create">
                        Create
                    </Button>
                    <Button color="inherit" component={Link} to="/select">
                        Select
                    </Button>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path="/create" element={<CreateProcessPage />} />
                <Route path="/select" element={<SelectProcessPage />} />
            </Routes>
        </Container>
    );
}