import {Button, Container} from "@mui/material";
import {ProcessHeaderForm, ProcessHeaderInput} from "../features/process/ProcessHeaderForm.tsx";
import {useState} from "react";

export function CreateProcessPage() {
    const [processHeader, setProcessHeader] = useState<ProcessHeaderInput>({
        name: '',
        description: '',
        version: '1.0',
    });

    const handleSave = () => {
        console.log('Saved process:', processHeader);
    };

    return (
        <Container maxWidth="sm">
            <ProcessHeaderForm value={processHeader} onChange={setProcessHeader} />
            <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
                Save
            </Button>
        </Container>
    );
}