import React from "react";

const Post = (brg) => {
    return (

        <div className="tv">
            <div className="konten-tv">

                <div className="isi-tv">
                    ID : {brg.id}<br />
                    Nama : {brg.nama}<br />
                    Harga : {brg.harga}<br />
                    Stok : {brg.stok}
                </div>
                <div className="gambar-tv"><img src={brg.gambar} width="150" height="150" alt="" /></div>
                <button className="btn btn-sm btn-warning" onClick={brg.tambahtv.bind(this, brg.id)}>Beli</button>
            </div>
        </div>

    )
}

export default Post;