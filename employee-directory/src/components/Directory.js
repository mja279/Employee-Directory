// import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchBox from "./SearchBox/index";
// import API from "../utils/API";
// import EmployeeDetail from "./EmployeeDetail";

// class Directory extends Component {
//     state = {
//       result: {},
//       search: ""
//     };
  
//     // When this component mounts, search for the movie "The Matrix"
//     componentDidMount() {
//       this.searchEmployees("John");
//     }
  
//     searchEmployees = query => {
//       API.search(query)
//         .then(res => this.setState({ result: res.data }))
//         .catch(err => console.log(err));
//     };
  
//     handleInputChange = event => {
//       const value = event.target.value;
//       const name = event.target.name;
//       this.setState({
//         [name]: value
//       });
//     };
  
//     // When the form is submitted, search the OMDB API for the value of `this.state.search`
//     handleFormSubmit = event => {
//       event.preventDefault();
//       this.searchEmployees(this.state.search);
//     };
  
//     render() {
//       return (
//         <Container>
//           <Row>
//             <Col size="md-8">
//               <Card
//                 heading={this.state.result.Name || "Search for an Employee to Begin"}
//               >
//                 {this.state.result.Name ? (
//                   <EmployeeDetail
//                     name={this.state.result.Name}
//                     phone={this.state.result.Phone}
//                     email={this.state.result.Email}
//                   />
//                 ) : (
//                   <h3>No Results to Display</h3>
//                 )}
//               </Card>
//             </Col>
//             <Col size="md-4">
//               <Card heading="Search">
//                 <SearchBox
//                   value={this.state.search}
//                   handleInputChange={this.handleInputChange}
//                   handleFormSubmit={this.handleFormSubmit}
//                 />
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       );
//     }
//   }
  
//   export default Directory;
  