/* eslint-disable react/prop-types */

const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <div className="flex justify-center gap-5 mt-8 pb-5">
      <button
        className="shadow mt-4 bg-gradient-to-r from-gray-500 to-[#aa2055]  hover:scale-[1.025] ease-in duration-200 hover:text-yellow-400 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-4 rounded-lg"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="shadow mt-4 bg-gradient-to-r from-gray-500 to-[#aa2055]  hover:scale-[1.025] ease-in duration-200 hover:text-yellow-400 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-4 rounded-lg"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
