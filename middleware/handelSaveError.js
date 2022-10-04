const getErrorStatus = ({name, code}) => (name === "MangoServerError" && code === 11000) ? 409 : 400;

const handleSaveError = (error, _, next) => {
	error.status = getErrorStatus(error);
	next();
};

module.exports = handleSaveError;