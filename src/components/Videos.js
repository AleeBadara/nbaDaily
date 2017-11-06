import React from 'react';

import RetourBtn from './RetourBtn';
import Video from './Video';

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            videos: []
        };
    }

    componentDidMount() {
        const API_KEY = 'AIzaSyA12XHbVlp12yxuh523Z6rlLVZ0a-WDaSQ';
        let { date, q } = this.props.match.params;

        let year= date.substring(0,4);
        let month= date.substring(4,6);
        let day= date.substring(6,8);

        let dateForYTApi= new Date(year,month,day).toISOString();

        let self = this;
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?q=" + q + "&key=" + API_KEY + "&maxResults=" + 4 + "&part=snippet" + "&publishedAfter="+dateForYTApi,
            dataType: "jsonp",
            success: function (data) {
                self.setState({ videos: data.items });
                self.setState({isLoading:false});
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(textStatus, + ' | ' + errorThrown);
            }
        });
    }

    render() {
        let renderVideosResults=()=>{
            let {videos, isLoading}= this.state;
            if(videos && videos.length>0){
                return (
                    videos.map((video) => {
                        return <Video key={video.id.videoId} {...video} />;
                    })
                );
            }else if(isLoading){
                return(
                    <p>Chargement...</p>
                );
            }else{
                return(
                    <p>Aucun résultat.</p>
                );
            }
            
        }
        return(
            <div className="container">
                {renderVideosResults()}
                <RetourBtn/>
            </div>
        )
        
    }
}

export default Videos;