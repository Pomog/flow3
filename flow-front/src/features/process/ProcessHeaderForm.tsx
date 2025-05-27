import { Box, TextField, Typography, Paper } from '@mui/material';
import { ChangeEvent } from 'react';

export interface ProcessHeaderInput {
    name: string;
    description?: string;
    version: string;
}

interface Props {
    value: ProcessHeaderInput;
    onChange: (value: ProcessHeaderInput) => void;
}

export function ProcessHeaderForm({ value, onChange }: Props) {
    const handleChange = (field: keyof ProcessHeaderInput) => (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = {
            ...value,
            [field]: e.target.value,
        };
        onChange(newValue);
    };

    return (
        <Paper sx={{ p: 3, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                Process Info
            </Typography>

            <TextField
                label="Name"
                fullWidth
                required
                margin="normal"
                value={value.name}
                onChange={handleChange('name')}
            />

            <TextField
                label="Description"
                fullWidth
                multiline
                margin="normal"
                value={value.description ?? ''}
                onChange={handleChange('description')}
            />

            <TextField
                label="Version"
                fullWidth
                required
                margin="normal"
                value={value.version}
                onChange={handleChange('version')}
            />
        </Paper>
    );
}