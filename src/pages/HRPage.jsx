import { Table } from "react-bootstrap";

const HRPage = () => {
return(
    <Table responsive>
        <thead>
            <tr>
                <th>Candidate name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Designation</th>
                <th>Resume Score</th>
                <th>Status</th>
            </tr>
        </thead>
    </Table>
)
}

export default HRPage;