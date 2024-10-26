
function Category({ products }) {
  return (
    <div className="">
      {category.map((category, index) => (
        <div key={index} className="">
          <div className="">
            {[...Array(5)].map((_, starIndex) => (
              <img key={starIndex} src={img13} alt="star" />
            ))}{" "}
            ({category.ratingCount})
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
