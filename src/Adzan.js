import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from 'antd';
import "antd/dist/antd.css";

export default class adzan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adzan: [],
            visible: false,
//nama asal nim diganti sesuai yang ada di API mu
            tanggal: "",
            shubuh: "",
            dzuhur: "",
            ashr: "",
            magrib: "",
            isya: "",
        };
    }

    handleButton = (tanggal) => {
        alert(tanggal);
    };

        componentDidMount() {
            axios({
                method: "get",
//link nya ganti sesuai API mu
                url: "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/semarang/2019/12.json",
                headers: {
                    accept: "*/*",
                },
            })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    adzan: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        }
        render() {
            return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>List Jadwal Adzan</h1>
                    </center>
                    {this.state.adzan.map((results, index) => {
                        return (
//result.xxxx diganti sesuai yang telah mbo masukin di yg tadi diatas
                            <Card style={{display:'inline-block', margin:'40px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
                                <h4 className="card-title">Tanggal : {results.tanggal}</h4>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        Shubuh : {results.shubuh}
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        Dzuhur : {results.dzuhur}
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        Ashar : {results.ashr}
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        Maghrib : {results.magrib}
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        Isya : {results.isya}
                                    </h5>
                                    <Button
                                    type="primary"
                                    shape="round"
                                    style={{margin:'15px 25px 0px 25px'}}
                                    onClick={() => this.handleButton(results.tanggal)}>
                                    Klik aku maz
                                    </Button>
                            </Card>
                    )},
                    )}
                </div>
            </div>
        );
    }
}

