import PropTypes from 'prop-types';

function About({ name }) {
    return <h2>About {name}</h2>;
}
export default About;

About.propTypes = {
    name: PropTypes.string,
};
