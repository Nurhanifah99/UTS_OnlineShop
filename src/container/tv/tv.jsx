import React, { Component } from "react";
import './tv.css';
import Post from "../../component/tv/Post";

class tv extends Component {
    state = {
        listtv: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/tv')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listtv: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGettv = data => {
        fetch(`http://localhost:3001/tv/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var datatv = { ...this.state.insertKeranjang };
                datatv["id"] = res["id"];
                datatv["nama"] = res["nama"];
                datatv["harga"] = res["harga"];
                datatv["stok"] = res["stok"];
                datatv["qty"] = 1;
                this.setState({
                    insertKeranjang: datatv
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-tv">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listtv.map(tv => {
                            return (
                                <Post
                                    key={tv.id}
                                    id={tv.id}
                                    nama={tv.nama}
                                    harga={tv.harga}
                                    gambar={tv.gambar}
                                    stok={tv.stok}
                                    tambahtv={this.handleGettv} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default tv;