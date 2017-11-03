import React from 'react';

class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: 'Los Angeles Lakers vs Portland Trail Blazers Highlight ',
            id:''
        };
    }

    componentDidMount() {
        const API_KEY = 'AIzaSyA12XHbVlp12yxuh523Z6rlLVZ0a-WDaSQ';

        let self = this;
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?q=" + self.state.search + "&key="+ API_KEY+ "&maxResults="+4+"&part=snippet", 
            dataType: "jsonp",
            success: function(data){
                     console.log(data.items[0]);    
                     var videoId= `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
                     self.setState({id:videoId})       
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert (textStatus, + ' | ' + errorThrown);
            }
        });
    }

    render(){
        return(
            <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={this.state.id}></iframe>
        </div>
        )
    }
}

export default Test;