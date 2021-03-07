import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar';
import { ResponsiveContainer ,Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function QuestionOverview(){

    const [popularqueries,setPopularqueries] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/audit/questions/popularqueries")
            .then(res => {
                setPopularqueries(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const [slowestqueries,setSlowestqueries] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/audit/questions/slowestqueries")
            .then(res => {
                setSlowestqueries(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    

    return (
        <div>
            <Container fluid>
                <Row>
                    <SideBar />
                    <Col style={{marginTop:"10px", marginLeft:"100px"}} xs lg={9}>  
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Audit</Breadcrumb.Item>
                            <Breadcrumb.Item active>Questions Overview</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row>
                            <Col style={{backgroundColor:"rgb(240, 240, 245, 0.75)", borderRadius:"5px", marginRight:"10px"}} fluid>
                                <h4 style={{color:"black", fontWeight:"bold", marginBottom:"10px", marginTop:"10px"}}>Most Popular Queries</h4>
                                <ResponsiveContainer width="90%" height={670}>
                                    <BarChart margin={{left:80,top:15}} layout="vertical" data={popularqueries}>
                                        <CartesianGrid stroke="#545454" vertical={true} horizontal={false} />
                                        <XAxis tick={{ fontWeight:"bold" }} stroke="black" type="number" dataKey="executions"/>
                                        <YAxis tick={{ fontSize:"9px",fontWeight:"bold" }} stroke="black" type="category" dataKey="card" />
                                        <Tooltip />
                                        <Bar dataKey="executions" fill="#009933" />
                                    </BarChart>  
                                </ResponsiveContainer>
                            </Col>

                            <Col style={{backgroundColor:"rgb(240, 240, 245, 0.75)", borderRadius:"5px", marginRight:"10px"}} fluid>
                                <h4 style={{color:"black", fontWeight:"bold", marginBottom:"10px", marginTop:"10px"}}>Slowest Queries</h4>
                                <ResponsiveContainer width="90%" height={670}>
                                    <BarChart margin={{left:80,top:15}} layout="vertical"  data={slowestqueries}>
                                        <CartesianGrid stroke="#545454" vertical={true} horizontal={false} />
                                        <XAxis tick={{ fontWeight:"bold" }} stroke="black" type="number" dataKey="avgrunningtime"/>
                                        <YAxis tick={{ fontSize:"8px",fontWeight:"bold" }} stroke="black" type="category" dataKey="card" />
                                        <Tooltip />
                                        <Bar dataKey="avgrunningtime" fill="#730099" />
                                    </BarChart>  
                                </ResponsiveContainer>
                            </Col>
                        </Row>
                    </Col>
                </Row>  
            </Container> 
            
        </div>
    )
}

export default QuestionOverview
