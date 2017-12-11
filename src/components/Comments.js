import React from 'react';
import Spinner from 'react-spinkit';

import Comment from './Comment';
import RetourBtn from './RetourBtn';

class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            comments: []
        };
    }

    componentDidMount() {
        let { gd, gid, st, v, h} = this.props.match.params;

        let url= "https://cors-anywhere.herokuapp.com/data.nba.net/json/cms/noseason/game/"+ gd+"/"+gid+"/pbp_all.json";

        let self = this;
        $.ajax({
            url: url,
        })
            .done(function (data) {
                if(data && data.sports_content && data.sports_content.game && data.sports_content.game.play){
                    self.setState({ comments: data.sports_content.game.play });
                }
                self.setState({ isLoading: false });
            }).fail(function (xhr, status, errorThrown) {
                self.setState({ comments: [] });
                self.setState({ isLoading: false });
            });
       
    }
    render(){
        let {comments, isLoading}=this.state;
        let renderComments=()=>{
            if (comments.length > 0) {
                return comments.map((comment) => {
                    return (
                        <Comment key={comment.event} comment={comment} visitor={this.props.match.params.v} home={this.props.match.params.h}/>
                    );
                });
            } else if (isLoading) {
                return (
                    <div className="container">
                        <span>Chargement...</span>
                        <Spinner name="rotating-plane" color="#17a2b8" />
                    </div>
                )
            } else {
                return <p>Aucun commentaire trouvé.</p>
            }
        }
        let renderRefreshText=()=>{
            let {st} = this.props.match.params;
            if (st.toString() === "2"){
                return(
                    <p><small style={{color:"red"}}>Rafraichir la page de temps en temps pour avoir les derniers commentaires officiels de la NBA.</small></p>
                )
            }

        }
        return(
            <div className="container">
            {renderRefreshText()}
            <RetourBtn  chemin="/"/>
            {renderComments()}
            </div>
        )
    }
}

export default Comments;