import React from 'react';
import axios from 'axios';

export default class ZipFetch extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          zip: [],
          loading: true,
        };
      }

    async componentDidMount() {
        try {
          let zip = await axios.get(
            'http://ctp-zip-api.herokuapp.com/zip/10016'
          );
          this.setState({ zip: zip.data, loading: false, });
          
        } catch (error) {
          console.error(error);
        }
        // console.log(this.state.zip)
      }

    render()
    {
        return(
            <div>
                <div>
                    <form>
                        <h1>Look Up A Zip-Code here</h1>
                        <input></input> <br/>
                        <button>Search</button>
                    </form>
                </div>
            
            <div>
                {
                    this.state.zip.map(items => <h2 key = {items.RecordName}>{items.RecordNumber}</h2>)
                }
            </div>

           
            </div>
        );
    }
}