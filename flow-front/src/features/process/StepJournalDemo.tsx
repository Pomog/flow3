import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";

export default function StepJournalDemo() {
    return (
        <div className="p-6 space-y-6">
            <Typography variant="h4" gutterBottom>
                Step Journal: Monitoring Chemical Process
            </Typography>

            <Card>
                <CardContent className="space-y-2">
                    <Typography variant="h6">Step Overview</Typography>
                    <ul className="text-sm list-disc pl-5">
                        <li><b>Kind:</b> Addition</li>
                        <li><b>Title:</b> Adding Solvent</li>
                        <li><b>Description:</b> Gradual addition of MeOH under cooling</li>
                        <li><b>Equipment:</b> Reactor R-5, 20L</li>
                        <li><b>Personnel:</b> 1 required</li>
                        <li><b>Scheduled:</b> 14:00 – 14:30 (2025-05-26)</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <Typography variant="h6">Process Parameters (Target)</Typography>
                    <table className="w-full text-sm">
                        <thead className="text-left border-b">
                        <tr>
                            <th>Name</th><th>Target</th><th>Min</th><th>Max</th><th>Unit</th><th>Criticality</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>Temperature</td><td>25</td><td>20</td><td>30</td><td>°C</td><td>CP</td></tr>
                        <tr><td>pH</td><td>7.0</td><td>6.5</td><td>7.5</td><td>pH</td><td>PC</td></tr>
                        <tr><td>Pressure</td><td>1.0</td><td>0.9</td><td>1.1</td><td>bar</td><td>O</td></tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <Typography variant="h6">Actual Measurements</Typography>
                    <table className="w-full text-sm">
                        <thead className="text-left border-b">
                        <tr>
                            <th>Timestamp</th><th>Parameter</th><th>Value</th><th>Unit</th><th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr><td>14:05:12</td><td>Temperature</td><td>24.8</td><td>°C</td><td>✅ Normal</td></tr>
                        <tr><td>14:10:45</td><td>Temperature</td><td>30.9</td><td>°C</td><td>⚠ High</td></tr>
                        <tr><td>14:15:00</td><td>pH</td><td>7.1</td><td>pH</td><td>✅ Normal</td></tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <Typography variant="h6">Audit Trail</Typography>
                    <ul className="text-sm list-disc pl-5">
                        <li><b>14:00</b> – Journal created by operator_01</li>
                        <li><b>14:16</b> – Updated temperature log</li>
                        <li><b>14:30</b> – Signed by QA reviewer</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}