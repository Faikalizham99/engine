import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar'
import ApiLoader from '../../Loader/ApiLoader'


function Tables(){
    const [loading,setLoading] = useState(false)
    const [tables,setTables] = useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get("http://localhost:5000/api/audit/tables")
            .then(res => {
                setTables(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

   
    
    return(
        <div>
            <Container fluid>
                <Row>
                    <SideBar />
                    <Col style={{marginTop:"10px", marginLeft:"100px"}} xs lg={9}>  
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Audit</Breadcrumb.Item>
                            <Breadcrumb.Item active>Tables</Breadcrumb.Item>
                        </Breadcrumb>
                        {loading === true ? <ApiLoader apiload={loading}/> :
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Database</th>
                                    <th>Schema</th>
                                    <th>Table in Database</th>
                                    <th>Table Display Name</th>   
                                </tr>
                            </thead>
                            {tables.map(table => (
                                <tbody key={table.id}>
                                    <tr>
                                        <td>{table.db_name}</td>
                                        <td>{table.schema}</td>
                                        <td>{table.table_name}</td>
                                        <td>{table.display_name}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>}
                    </Col>
                </Row>  
            </Container>      
        </div>
    )
}

export default Tables