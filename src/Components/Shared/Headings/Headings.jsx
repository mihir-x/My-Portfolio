import PropTypes from 'prop-types'

const Headings = ({heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mb-8 mt-5 md:mt-10">
            {/* <p className="text-yellow-600 mb-2">---{subHeading}---</p> */}
            <h1 className=" text-xl md:text-3xl font-semibold uppercase border-y-4 py-2 md:py-4">{heading}</h1>
        </div>
    );
};

export default Headings;

Headings.propTypes ={
    heading: PropTypes.string
}