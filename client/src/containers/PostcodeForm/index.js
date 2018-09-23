// Import libraries, components, actions and some css
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { apiKey } from '../../config/keys';
import PostcodeFormTitle from '../../components/PostcodeFormTitle';
import PostcodeField from '../../components/PostcodeField';
import LocationField from '../../components/LocationField';
import MunicipalityField from '../../components/MunicipalityField';
import FormMap from '../../components/FormMap';
import FormSubmitButton from '../../components/FormSubmitButton';
import {
    getLocations,
    getMunicipalities,
    getGoogleGeocoding
} from './actions'
import '../../App.css';

class PostcodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postcode: '',
            location: '',
            locations: [],
            municipalities: [{ name: "" }],
            municipality: '',
            municipalityVisible: false,
            mapVisible: false,
            center: {
                lat: 47.380065,
                lng: 8.539889
            },
            zoom: 13
        };
    }

    // Handle changes in the form
    componentDidUpdate(prevProps) {
        if (prevProps.locationReducer !== this.props.locationReducer) {
            if (this.props.locationReducer.result.length === 1) {
                this.setState({
                    location: this.props.locationReducer.result[0].name
                });
            }

            if (this.props.locationReducer.result.length > 1) {
                this.setState({
                    locations: this.props.locationReducer.result
                });
            }

            if (this.props.locationReducer.result.length < 1) {
                this.setState({
                    location: ''
                });
            }
        }

        if (prevProps.municipalityReducer !== this.props.municipalityReducer) {
            const municipalityList = this.props.municipalityReducer.result.payload;
            if (municipalityList.length === 1) {
                this.setState({
                    municipalities: municipalityList,
                    municipality: municipalityList[0].name,
                    municipalityVisible: false
                });
            }

            if (municipalityList.length > 1) {
                this.setState({
                    municipalities: municipalityList,
                    municipality: municipalityList[0].name,
                    municipalityVisible: true
                });
            }

            if (municipalityList.length === 0) {
                this.setState({
                    municipalityVisible: false
                });
            }
        }

        if (prevProps.googleReducer !== this.props.googleReducer) {
            if (this.props.googleReducer.result.length >= 1) {
                const newLatLong = this.props.googleReducer.result[0].geometry.location;
                this.setState({
                    center: newLatLong,
                    mapVisible: true
                });
            }
        }
    }

    // Handle changes in the postcode field
    handlePostcodeChange = (event) => {
        const postcode = event.target.value;
        if (postcode.length < 5) {
            this.setState({
                postcode
            });
        }

        if (postcode.length < 4) {
            this.setState({
                location: '',
                locations: [],
                municipalities: [{ name: "" }],
                municipality: '',
                municipalityVisible: false,
                mapVisible: false,
            });
        }

        if (postcode.length === 4) {
            this.props.getLocations(event.target.value);
            this.props.getMunicipalities(event.target.value);
        }
    }

    // Handle changes in location auto-complete package
    handleLocationChange = (location) => {
        this.setState({
            location
        });
    }

    // Handle changes in municipality dropdown package
    handleMunicipalityChange = (option) => {
        this.setState({
            municipality: option.label
        });
    }

    // Handle and submit a request to google maps geocoding
    handleMapLocation = () => {
        const { postcode, location, municipality } = this.state;
        if (postcode && location && municipality) {
            this.props.getGoogleGeocoding(postcode, location, municipality, apiKey);
        }
    }

    render() {
        return (
            <div className='container'>
                <PostcodeFormTitle />
                <PostcodeField
                    postcode={this.state.postcode}
                    onChangePostcode={this.handlePostcodeChange}
                />
                <LocationField
                    locations={this.state.locations}
                    location={this.state.location}
                    handleLocationChange={this.handleLocationChange}
                />
                {this.state.municipalityVisible &&
                    <MunicipalityField
                        visible={this.state.municipalityVisible}
                        municipalities={this.state.municipalities}
                        municipality={this.state.municipality}
                        handleMunicipalityChange={this.handleMunicipalityChange}
                    />
                }
                <FormSubmitButton
                    handleMapLocation={this.handleMapLocation}
                />
                {this.state.mapVisible &&
                    <FormMap
                        handleMapLocation={this.handleMapLocation}
                        center={this.state.center}
                        zoom={this.state.zoom}
                        postcode={this.state.postcode}
                        location={this.state.location}
                        municipality={this.state.municipality}
                        apiKey={apiKey}
                    />}
            </div>
        );
    }
}

// Access to our redux application store
const mapStateToProps = ({ locationReducer, municipalityReducer, googleReducer }) => {
    return {
        locationReducer,
        municipalityReducer,
        googleReducer
    };
}

// Access the relevant redux actions
const mapDispatchToProps = dispatch => bindActionCreators({
    getLocations,
    getMunicipalities,
    getGoogleGeocoding
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostcodeForm);