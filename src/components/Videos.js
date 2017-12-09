import React from 'react';
import Spinner from 'react-spinkit';

import RetourBtn from './RetourBtn';
import Video from './Video';

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            videos: [],
            v: '',
            h: ''
        };
        console.log(this.props.match.params);
    }

    componentDidMount() {
        const API_KEY = 'AIzaSyA12XHbVlp12yxuh523Z6rlLVZ0a-WDaSQ';
        let { date, q, v, h } = this.props.match.params;
        this.setState({ v: this.props.match.params.v });
        this.setState({ h: this.props.match.params.h });

        let year = date.substring(0, 4);
        let month = date.substring(4, 6);
        let day = date.substring(6, 8);

        let dateForYTApi = new Date(year, month, day).toISOString();

        let self = this;
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?q=" + q + "&key=" + API_KEY + "&maxResults=" + 4 + "&part=snippet" + "&publishedAfter=" + dateForYTApi,
            dataType: "jsonp",
            success: function (data) {
                self.setState({ videos: data.items });
                self.setState({ isLoading: false });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //alert(textStatus, + ' | ' + errorThrown);
            }
        });
    }

    render() {
        let renderVideosResults = () => {
            let { videos, isLoading } = this.state;
            if (videos && videos.length > 0) {
                return (
                    videos.map((video) => {
                        return <Video key={video.id.videoId} {...video} />;
                    })
                );
            } else if (isLoading) {
                return (
                    <div className="container">
                        <span>Chargement...</span>
                        <Spinner name="rotating-plane" color="#17a2b8" />
                    </div>
                );
            } else {
                return (
                    <p>Aucun résultat.</p>
                );
            }

        }
        return (
            <div className="container">
                <div className="logo_container">
                    <img type="image/svg+xml" src={`/img/${this.state.v}_logo.svg`} alt={`${this.state.v} logo`} className="logo" title={`${this.state.v} logo`} /> VS <img type="image/svg+xml" src={`/img/${this.state.h}_logo.svg`} alt={`${this.state.h} logo`} title={`${this.state.h} logo`} className="logo" />
                </div>

                {renderVideosResults()}
                <RetourBtn />
            </div>
        )

    }
}

export default Videos;