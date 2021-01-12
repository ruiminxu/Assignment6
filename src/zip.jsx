import React from 'react';
import axios from 'axios';

export default class ZipFetch extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          zip: [],
          loading: true,
          zipC: '',
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
                        <input className = "zipCodeInput" placeholder = "zipcode..."type = "text" value = {this.state.zipC} onChange = {this.handleZipChange}></input> <br/>
                        <button className = "searchButton" onClick = {this.handleSearching}>Search</button>
                    </form>
                </div>

                {
                    !this.state.zipC?
                    <div>Please enter a Zip-Code</div>
                    :
                        this.state.foundZip? 
                        <div className = "Container"> 
                            {this.state.zip.map(items => (
                               <div>
                                   <h3>{items.City}, {items.State}</h3>
                               <ul className = "informtation"key = {items.Recordnumber}>
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
                               </div>
                           
                            ))}
                            
                        </div>
                        : <div>
                            <h1>Please Enter A Correct Zip-Code</h1>
                         </div>
                    

                }
            
            </div>
                
           
        );
    }
}

