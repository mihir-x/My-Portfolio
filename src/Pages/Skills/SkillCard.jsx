import PropTypes from 'prop-types'

const SkillCard = ({item}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;

SkillCard.propTypes ={
    item: PropTypes.object
}