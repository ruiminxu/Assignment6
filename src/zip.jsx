import React from 'react';
import axios from 'axios';

export default class ZipFetch extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          zip: [],
          loading: true,
          zipC: null,
          foundZip: false,
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
    }


    handleZipChange = event => {
        this.setState({
            zipC: event.target.value
        })
    }

    handleSumbit = (event) => {
        event.preventDefault();
    }

    handleSearching = () =>
    {
        let zipArray = this.state.zip;
        let theZip = this.state.zipC;
        zipArray.map(items => {
            if(items.Zipcode === theZip)
        {
            this.setState({
                foundZip : true,
            })
        }else{
            this.setState({
                foundZip : false,
            })
        }
        })
    }
    render()
    {
        return(
            <div>
                <div className = "Happy">
                    <form onSubmit={this.handleSumbit}>
                        <div className = "ZipCodeSearchTitle">
                            <h1 className = "ZipCodeTitle">Zip Code Search</h1>
                        </div>
                        <input type = "text" value = {this.state.zipC} onChange = {this.handleZipChange}></input> <br/>
                        <button onClick = {this.handleSearching}>Search</button>
                    </form>
                </div>

                {
                    this.state.foundZip? 
                
                    <div className = "Container"> 
                        {this.state.zip.map(items => (
                           <ul key = {items.Recordnumber}>
                               <li>
                                    State: {items.State}
                               </li>
                               <li>
                                    Location: {items.State}
                               </li>
                               <li>
                                   Population (estimated): {items.EstimatedPopulation}
                               </li>
                               <li>
                                    Total Wages: {items.TotalWages}
                               </li>
                           </ul>
                       
                        ))}
                        
                    </div>
                    : <div>
                        <h1>The Zip-Code does not work</h1>
                     </div>
                }
            
            </div>
                
           
        );
    }
}