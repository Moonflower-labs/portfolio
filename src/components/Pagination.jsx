import { PropTypes } from "prop-types";

const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handleClickPage
}) => {

  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center gap-5 mt-8 pb-5">
      <button
        className={`shadow mt-4 bg-gradient-to-r from-gray-500 to-[#aa2055] ${currentPage === 1 ? 'hidden': 'block'}  hover:scale-[1.025] ease-in duration-200 hover:text-yellow-400 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-4 rounded-lg`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pagesArray.map(page =>
          <button 
            className={`shadow mt-4  ${currentPage === page?' bg-blue-400/75  text-white shadow-lg':'bg-gradient-to-r from-gray-500 to-[#aa2055] text-yellow-100 focus:shadow-outline focus:outline-none  hover:scale-[1.025] ease-in duration-200 hover:text-yellow-400'} font-bold px-2 rounded-full`}
            key={page}
            onClick={handleClickPage}
            value={page}
            disabled={currentPage === page}>
            {page}
          </button>
        )}
      <button
        className={`shadow mt-4 bg-gradient-to-r from-gray-500 to-[#aa2055] ${currentPage === totalPages ? 'hidden': 'block'}  hover:scale-[1.025] ease-in duration-200 hover:text-yellow-400 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-4 rounded-lg`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

    
    </div>
    
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  handlePreviousPage: PropTypes.func,
  handleNextPage: PropTypes.func,
  handleClickPage: PropTypes.func,
};

export default Pagination;
