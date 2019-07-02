import React, { Component } from 'react';
import axios from 'axios';

class Photofeed extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        let token = '2264965224.63c1569.6a6bc1a554c045ba91042fd430534e78';
        let num_photos = 6;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos + '&max_id=1845994542608725132_2264965224')
            .then(res => {
                console.log(res.data.data);
                this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return(
            <div className="instafeed" style={{textAlign: 'center', backgroundColor: '#2B2B2B'}}>
                { this.state.images.map((image) => {
                    return <img style={{marginLeft: '30px', marginRight: '30px', marginBottom: '20px', borderRadius: '15px'}} src={image.images.thumbnail.url}/>
                })}
            </div>
        )
    }
}

export default Photofeed;