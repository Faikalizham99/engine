import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar';
import { Line, LineChart ,Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function MemberOverview(){

    const [overview,setOverview] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/audit/members/overview")
            .then(res => {
                setOverview(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    const [mostCreated,setmostCreated] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/audit/members/mostCreated")
            .then(res => {
                setmostCreated(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    const formatXAxis = (tickItem) => {
        tickItem = new Date(tickItem).toLocaleDateString()
        return tickItem
    }


    const [activennew,setactivenew] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/audit/members/activennew")
            .then(res => {
                setactivenew(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col style={{marginLeft:"0px"}}>
                        <SideBar />
                    </Col>
                    <Col style={{marginTop:"10px", marginRight:"50px"}} xs lg={9}>  
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Audit</Breadcrumb.Item>
                            <Breadcrumb.Item active>Team Members Overview</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row>
                            <Col>
                                <h3 style={{color:"white",marginBottom:"20px"}}>Active and New User</h3>
                                <LineChart margin={{left:150,right:20, bottom:40}} width={1300} height={360} data={activennew}>
                                    <CartesianGrid vertical={false}  />
                                    <XAxis tick={{ fontSize:"12px",fontWeight:"bold" }} stroke="white" type="category" dataKey="date" label={{ value: "Day",fill:"white", dy: 25}} tickFormatter={formatXAxis}/>
                                    <YAxis tick={{ fontSize:"12px",fontWeight:"bold" }} stroke="white" type="number" dataKey="active" label={{ value: "active and new users",fill:"white", angle:270, dx:-25}} />
                                    <Tooltip />                                  
                                    <Line type="linear" dataKey="active" strokeWidth={2} fill="#8884d8" dot={false} />
                                </LineChart>   
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3 style={{color:"white",marginBottom:"20px"}}>Most active user</h3>
                                <BarChart margin={{left:150,right:20, bottom:40}} layout="vertical" width={1300} height={360} data={overview}>
                                    <CartesianGrid vertical={true} horizontal={false} />
                                    <XAxis tick={{ fontSize:"12px", fontWeight:"bold" }} stroke="white" type="number" dataKey="exectime" label={{ value: "Total execution time (milliseconds)",fill:"white", dy: 25}} />
                                    <YAxis tick={{ fontSize:"10px", fontWeight:"bold" }} stroke="white" type="category" dataKey="user" />
                                    <Tooltip />
                                    <Bar dataKey="exectime" fill="#8884d8" />
                                </BarChart> 
                            </Col>

                            <Col>
                                <h3 style={{color:"white",marginBottom:"20px"}}>Members who are creating most things</h3>
                                <BarChart margin={{left:150,right:20, bottom:40}} layout="vertical" width={1300} height={360} data={mostCreated}>
                                    <CartesianGrid vertical={true} horizontal={false} />
                                    <XAxis tick={{ fontSize:"12px", fontWeight:"bold" }} stroke="white" type="number" dataKey="total" label={{ value: "Total",fill:"white", dy: 25}} />
                                    <YAxis tick={{ fontSize:"10px", fontWeight:"bold" }} stroke="white" type="category" dataKey="name" />
                                    <Tooltip />
                                    <Bar dataKey="total" fill="#8884d8" />
                                </BarChart> 
                            </Col>
                        </Row>
                    </Col>
                </Row>  
            </Container> 
            
        </div>
    )
}

export default MemberOverview
